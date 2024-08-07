import { exec } from "node:child_process";
import fs from "node:fs";
import https from "node:https";
import path from "node:path";
import { spinner } from "@clack/prompts";
export async function task<T>(
  name: string,
  fn: (s: ReturnType<typeof spinner>) => Promise<T>,
): Promise<T> {
  const s = spinner();
  s.start(name);

  try {
    const res = await fn(s);
    return res;
  } catch (err) {
    s.stop((err as Error).message);
    process.exit(1);
  }
}

export async function run(cmd: string, opts?: { cwd: string; acceptDefault?: boolean }) {
  await new Promise((resolve, reject) => {
    const p = exec(cmd, opts);

    if (opts?.acceptDefault) {
      p.stdout?.on("data", () => {
        process.stdin.write("\n");
      });

      p.stderr?.on("data", (data) => {
        console.error(data.toString());
      });
    }

    p.on("exit", (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
}

export function getCommand(
  packageManager: string,
  opts: { dev?: boolean; executable?: boolean } = {},
): string {
  const validPackageManagers = ["npm", "yarn", "pnpm", "bun"];
  if (!validPackageManagers.includes(packageManager)) {
    throw new Error(`Unsupported package manager: ${packageManager}`);
  }

  const { dev = false, executable = false } = opts;

  if (executable) {
    switch (packageManager) {
      case "bun":
        return "bunx";
      case "yarn":
        return "npx";
      case "npm":
        return "npx";
      case "pnpm":
        return "pnpm dlx";
      default:
        throw new Error(`Unhandled case for package manager: ${packageManager}`);
    }
  }

  const devFlag = dev
    ? packageManager === "bun" || packageManager === "yarn"
      ? "--dev"
      : "--save-dev"
    : "";
  return `${packageManager} add ${devFlag}`.trim();
}

export const writeFileContent = (destination: string, content: string) => {
  try {
    const fullPath = path.resolve(process.cwd(), destination);
    const dirPath = path.dirname(fullPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(fullPath, content, { encoding: "utf8" });
  } catch (error) {
    console.error(`Error writing file to ${destination}:`, error);
  }
};

export const downloadFile = async (url: string, location: string): Promise<void> => {
  const dest = path.join(process.cwd(), location);
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const fileStream = fs.createWriteStream(dest, { flags: "w" });
  try {
    await new Promise<void>((resolve, reject) => {
      https
        .get(url, (response) => {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode < 300) {
            response.pipe(fileStream);
            response.on("end", resolve);
            response.on("error", reject);
          } else {
            reject(new Error(`Failed to fetch ${url}: ${response.statusCode}`));
          }
        })
        .on("error", reject);
    });
  } catch (error) {
    console.error(`Error downloading file: ${(error as Error).message}`);
  }
};
