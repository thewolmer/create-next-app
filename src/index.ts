#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { confirm, intro, outro, select,  text } from "@clack/prompts";
import { biomeConfig } from "./configs/biome-config";
import { run, task } from "./utils";
import { eslintConfig } from "./configs/eslint-config";
import { prettierConfig } from "./configs/prettier-config";
import { vsCodeSetup } from "./cmd/vscode-setup";

async function main() {
	intro("Welcome to @wolmer/create-next-app CLI!");

	const projectName = await text({ message: "Enter project name:" });

	const addTailwind = await confirm({
		message: "Do you want to add Tailwind Css?",
	});

	const addSrc = await confirm({
		initialValue: false,
		message: "Would you like to use `src/` directory?",
	});

	const linter = await select({
		message: "Choose a linter:",
		initialValue: "biome",
		options: [
			{ value: "biome", label: "Biome" },
			{ value: "eslint", label: "ESLint + Prettier" },
		],
	});

	const addShadCn = await confirm({
		message: "Would you like to add shadcn/ui to your project?",
	});

	const packageManager = await select({
		message: "Choose a package manager:",
		initialValue: "npm",
		options: [
			{ value: "npm", label: "npm" },
			{ value: "yarn", label: "yarn" },
			{ value: "pnpm", label: "pnpm" },
			{ value: "bun", label: "bun" },
		],
	});

	const command = `npx create-next-app@latest ${projectName as string} --ts --app --no-eslint --use-${packageManager as string} ${addTailwind ? "--tailwind" : "--no-tailwind"} ${addSrc ? "--src-dir" : "--no-src-dir"} --no-import-alias`;

	await task("Initializing Next.js Project...", async (s) => {
		await run(
			//TODO: Fix this command later
			command
			// `mkdir ${projectName as string} && cd ${projectName as string} && npm init -y`,
		);
		s.stop("Next.js Project initialized.");
	});

	if (linter === "biome") {
		await task("Installing Biome...", async (s) => {
			await run(
				`${packageManager as string} add ${
					packageManager === "bun" || packageManager === "yarn"
						? "--dev"
						: "--save-dev"
				} @biomejs/biome`,
				{
					cwd: projectName as string,
				},
			);

			const configDest = path.join(
				process.cwd(),
				projectName as string,
				"biome.json",
			);
			fs.writeFileSync(configDest, biomeConfig);

			s.stop("Biome config done.");
		});
	}

	if (linter === "eslint") {
		await task("Installing Eslint + Prettier ...", async (s) => {
			await run(
				`${packageManager as string} add ${
					packageManager === "bun" || packageManager === "yarn"
						? "--dev"
						: "--save-dev"
				} eslint@^8 eslint-config-next@14.2.3 eslint-config-prettier@^9.1.0 eslint-config-react-app@^7.0.1 eslint-plugin-import@^2.29.1 eslint-plugin-prefer-arrow@^1.2.3 eslint-plugin-prettier@^5.1.3 eslint-plugin-react@^7.34.1 prettier@^3.2.5 prettier-plugin-tailwindcss@^0.5.14`,
				{
					cwd: projectName as string,
				},
			);

			const eslintConfigDest = path.join(
				process.cwd(),
				projectName as string,
				".eslintrc.js",
			);
			fs.writeFileSync(eslintConfigDest, eslintConfig);

			const prettierConfigDest = path.join(
				process.cwd(),
				projectName as string,
				".prettierrc.js",
			);
			fs.writeFileSync(prettierConfigDest, prettierConfig);

			s.stop("Eslint + Prettier config done.");
		});
	}

	if(addShadCn) {
		await task("Installing Shadcn/ui...", async (s) => {
			await run(
				`npx shadcn-ui@latest init -y`,
			);
			s.stop("Shadcn/ui config done.");
		});
	}

	await task("Finishing up ...", async (s) => {
		await vsCodeSetup(projectName as string, linter as 'eslint' | 'biome');
		s.stop("done.");
	});
	outro("Done");
	process.exit(0);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
