import fs from "node:fs";
import path from "node:path";

const newScripts = {
  dev: "next dev",
  build: "next build",
  postbuild: "next-sitemap --config next-sitemap.config.js",
  commit: "git-cz",
  release: "commit-and-tag-version",
  start: "next start",
};

export const setupScripts = async (projectName: string) => {
  const packageJsonPath = path.join(process.cwd(), projectName, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  packageJson.scripts = {};
  packageJson.scripts = { ...newScripts };
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
};
