import fs from "node:fs";
import path from "node:path";
import { shadCnUiConfig } from "../configs/shadcnui-config";
import { tailwindConfig } from "../configs/tailwind-config";
import { globalCss } from "../templates/global-css";
import { utilsTs } from "../templates/utils-ts";
import { writeFileContent } from "../utils";

export const shadCnSetup = async (projectName: string, isSrc: boolean) => {
  writeFileContent(`${projectName}/components.json`, shadCnUiConfig);
  writeFileContent(`${projectName}/tailwind.config.ts`, tailwindConfig);
  writeFileContent(
    isSrc ? `${projectName}/src/app/globals.css` : `${projectName}/app/globals.css`,
    globalCss,
  );
  writeFileContent(
    isSrc ? `${projectName}/src/lib/utils.ts` : `${projectName}/lib/utils.ts`,
    utilsTs,
  );
};
