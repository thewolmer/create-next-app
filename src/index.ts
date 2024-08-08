#!/usr/bin/env node

import { execSync } from "node:child_process";
import { cancel, confirm, group, intro, note, outro, select, text } from "@clack/prompts";
import color from "picocolors";
import { Finishup } from "./cmd/finishup";
import { setupScripts } from "./cmd/scripts-setup";
import { shadCnSetup } from "./cmd/shadcn-setup";
import { vsCodeSetup } from "./cmd/vscode-setup";
import { biomeConfig } from "./configs/biome-config";
import { eslintConfig } from "./configs/eslint-config";
import { prettierConfig } from "./configs/prettier-config";
import { getCommand, run, task, writeFileContent } from "./utils";
async function main() {
  console.clear();
  intro(color.bold(color.underline(color.cyan("🚀 create-next-app by wolmer"))));

  const p = await group(
    {
      projectName: () =>
        text({
          message: "Enter project name:",
          validate(value) {
            // biome-ignore lint/style/useBlockStatements: <explanation>
            if (value.length === 0) return "Project name is required!";
            if (value.includes(" ")) {
              return "Spaces are not allowed. Please use dashes (-) instead.";
            }
          },
        }),
      addSrc: () =>
        confirm({
          initialValue: false,
          message: "Would you like to use `src/` directory?",
        }),
      linter: () =>
        select({
          message: "Choose a linter:",
          initialValue: "biome",
          options: [
            { value: "biome", label: "Biome" },
            { value: "eslint", label: "ESLint + Prettier" },
          ],
        }),
      packageManager: () =>
        select({
          message: "Choose a package manager:",
          initialValue: "npm",
          options: [
            { value: "npm", label: "npm" },
            { value: "yarn", label: "yarn" },
            { value: "pnpm", label: "pnpm" },
            { value: "bun", label: "bun" },
          ],
        }),
    },
    {
      onCancel: () => {
        cancel("Operation cancelled.");
        process.exit(0);
      },
    },
  );

  const createCommand = `create-next-app@latest ${p.projectName as string} --ts --app --no-eslint --use-${p.packageManager as string} --tailwind ${p.addSrc ? "--src-dir" : "--no-src-dir"} --no-import-alias`;

  await task("Initializing Next.js + Tailwind Project...", async (s) => {
    await run(`${getCommand(p.packageManager as string, { executable: true })} ${createCommand}`);
    s.stop("Project initialized.");
  });

  if (p.linter === "biome") {
    await task("Installing Biome...", async (s) => {
      await run(`${getCommand(p.packageManager as string)} @biomejs/biome`, {
        cwd: p.projectName as string,
      });

      writeFileContent(`${p.projectName as string}/biome.json`, biomeConfig);

      s.stop("Biome config done.");
    });
  }

  if (p.linter === "eslint") {
    await task("Installing Eslint + Prettier...", async (s) => {
      await run(
        `${getCommand(p.packageManager as string, { dev: true })} eslint@^8 eslint-config-next@14.2.3 eslint-config-prettier@^9.1.0 eslint-config-react-app@^7.0.1 eslint-plugin-import@^2.29.1 eslint-plugin-prefer-arrow@^1.2.3 eslint-plugin-prettier@^5.1.3 eslint-plugin-react@^7.34.1 prettier@^3.2.5 prettier-plugin-tailwindcss@^0.5.14`,
        { cwd: p.projectName as string },
      );

      writeFileContent(`${p.projectName as string}/.eslintrc.js`, eslintConfig);
      writeFileContent(`${p.projectName as string}/.prettierrc.js`, prettierConfig);
      s.stop("Eslint + Prettier config done.");
    });
  }

  await task("Installing Shadcn/ui...", async (s) => {
    await run(
      `${getCommand(p.packageManager as string)} class-variance-authority clsx tailwindcss-animate tailwind-merge`,
      { cwd: p.projectName as string },
    );
    await shadCnSetup(p.projectName as string, p.addSrc as boolean);
    await run(
      `${getCommand(p.packageManager as string, { executable: true })} shadcn-ui@latest add button card -y`,
      { cwd: p.projectName as string },
    );
    s.stop("Shadcn/ui config done.");
  });

  await task("Installing dependencies...", async (s) => {
    await run(
      `${getCommand(p.packageManager as string, { dev: true })} commitizen cz-conventional-changelog next-sitemap commit-and-tag-version`,
      { cwd: p.projectName as string },
    );
    await run(
      `${getCommand(p.packageManager as string)} swr zustand date-fns react-icons next-themes`,
      { cwd: p.projectName as string },
    );
    s.stop("Installed dependencies.");
  });

  await task("Finishing up ...", async (s) => {
    await vsCodeSetup(p.projectName as string, p.linter as "eslint" | "biome");
    await setupScripts(p.projectName as string);
    await Finishup(p.projectName as string, p.addSrc as boolean);
    s.stop("Finished.");
  });

  const runDev = await confirm({
    message: "Run Now?",
    active: "Yes",
    inactive: "No",
    initialValue: true,
  });

  if (runDev) {
    execSync(`${p.packageManager} run dev`, { cwd: p.projectName, stdio: "inherit" });
  } else {
    note(`Next Steps: ${color.green(`cd ${p.projectName} && ${p.packageManager} run dev`)}`);
  }

  outro("Done, Happy Coding!");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
