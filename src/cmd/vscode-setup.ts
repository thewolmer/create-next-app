import { vsCodeBiomeSettings, vsCodeEslintSettings } from "../configs/vscode-settings";
import { writeFileContent } from "../utils";

export const vsCodeSetup = async (name: string, linter: "eslint" | "biome") => {
  const dest = `${name}/.vscode/settings.json`;
  if (linter === "eslint") {
    writeFileContent(dest, vsCodeBiomeSettings);
  }
  if (linter === "eslint") {
    writeFileContent(dest, vsCodeEslintSettings);
  }
};
