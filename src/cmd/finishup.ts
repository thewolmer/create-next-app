import { czrcConfig } from "../configs/czrc-config";
import { editorConfig } from "../configs/editor-config";
import { nextJsConfig } from "../configs/next-config";
import { nextSiteMapConfig } from "../configs/next-sitemap-config";
import { errorTsx } from "../templates/error-tsx";
import { fontsComponent } from "../templates/fonts-component";
import { generateSeoUtil } from "../templates/generate-seo-util";
import { googleAnalyticsUtil } from "../templates/google-analytics-util";
import { imageComponent } from "../templates/image-component";
import { linkComponent } from "../templates/link-component";
import { mediaQueryHookTs } from "../templates/mediaquery-hook-ts";
import { mountedHookTs } from "../templates/mounted-hook-ts";
import { notFoundCatchAll, notFoundTsx } from "../templates/not-found-tsx";
import { providersComponent } from "../templates/providers-tsx";
import { rootLayout } from "../templates/root-layout-tsx";
import { rootPage } from "../templates/root-page-tsx";
import { siteConfig } from "../templates/site-config";
import { siteConfigTypes } from "../templates/site-config-types";
import { downloadFile, writeFileContent } from "../utils";

export const Finishup = async (projectName: string, isSrc: boolean) => {
  await downloadFile(
    "https://wolmer.me/images/logo/logo-base-256x256.png",
    `${projectName as string}/public/logo.png`,
  );

  const project = `${projectName as string}${isSrc ? "/src" : ""}`.trim();
  //--------------------------------------------//
  writeFileContent(`${projectName as string}/next.config.mjs`, nextJsConfig);
  writeFileContent(`${projectName as string}/next-sitemap.config.js`, nextSiteMapConfig);
  writeFileContent(`${projectName as string}/.czrc`, czrcConfig);
  writeFileContent(`${projectName as string}/.editorconfig`, editorConfig);
  //--------------------------------------------//
  writeFileContent(`${project}/app/[...not_found]/page.tsx`, notFoundCatchAll);
  writeFileContent(`${project}/app/not-found.tsx`, notFoundTsx);
  writeFileContent(`${project}/app/error.tsx`, errorTsx);
  //--------------------------------------------//
  writeFileContent(`${project}/config/index.ts`, siteConfig);
  writeFileContent(`${project}/types/index.d.ts`, siteConfigTypes);
  //--------------------------------------------//
  writeFileContent(`${project}/components/fonts/index.ts`, fontsComponent);
  writeFileContent(`${project}/components/image/index.tsx`, imageComponent);
  writeFileContent(`${project}/components/link/index.tsx`, linkComponent);
  //--------------------------------------------//
  writeFileContent(`${project}/utils/generateSeo.ts`, generateSeoUtil);
  writeFileContent(`${project}/utils/googleAnalytics.tsx`, googleAnalyticsUtil);
  //--------------------------------------------//

  writeFileContent(`${project}/hooks/useMediaQuery.ts`, mediaQueryHookTs);
  writeFileContent(`${project}/hooks/useMounted.ts`, mountedHookTs);
  //--------------------------------------------//
  writeFileContent(`${project}/app/layout.tsx`, rootLayout);
  writeFileContent(`${project}/app/providers.tsx`, providersComponent);
  writeFileContent(`${project}/app/page.tsx`, rootPage);
};
