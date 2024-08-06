import path from "path";
import { vsCodeBiomeSettings, vsCodeEslintSettings } from "../configs/vscode-settings";
import  fs from "fs";

export const vsCodeSetup = async (name: string, linter: 'eslint' | 'biome') => {
  if(linter == 'eslint') {
    const dest = path.join(
      process.cwd(),
      name as string, ".vscode", "settings.json"
    );
    fs.writeFileSync(dest, vsCodeBiomeSettings);
  } 
  if(linter == 'eslint') {
    const dest = path.join(
      process.cwd(),
      name as string, ".vscode", "settings.json"
    );
    fs.writeFileSync(dest, vsCodeEslintSettings);
  }
};