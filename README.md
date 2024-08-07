
# 🚀 Bootstrap Next.js + Tailwind CSS + ShadcnUI Project in Seconds

Welcome to @wolmer/create-next-app, the ultimate CLI tool for rapidly setting up a Next.js project with Tailwind CSS, ShadcnUI, and a bunch of modern development goodies. Save time, stay organized, and get your project up and running in no time with this lightning-fast tool.
## ✨ Features

- **Next.js**: Automatically installs the latest version of Next.js for cutting-edge features and performance.
- **Tailwind CSS**: Integrates Tailwind CSS, the most popular utility-first CSS framework for rapid styling.
- **Linter Options**: Choose between ESLint + Prettier or Biome for code linting and formatting.
- **Shadcn/UI**: Includes ShadcnUI for beautiful, accessible UI components out of the box.
- **Next Fonts**: Seamlessly add custom fonts to your project.
- **Next Theme**: Easily implement theming with dark and light modes.
- **Next Site** Map: Automatically generate a sitemap for improved SEO and search engine indexing.
- **Version Control**: Utilize Commitizen, cz-conventional-changelog, and commit-and-tag-version for structured version control and changelog management.
- **Changelog**: Automatically generates changelog in a Markdown file.
- **Generate Seo**: Utilize custom component to easily set up SEO metadata for your pages, including Open Graph and Twitter cards, helping your site rank better and gain more visibility.
- **Google Analytics**: Integrates Google Analytics effortlessly, just add an env and you're done! allowing you to track and analyze user interactions with your site for better insights and decision-making.

## ⚡️ Why Use This Tool?
- **Saves Time**: Get started with a fully configured project in seconds, so you can focus on building amazing features.
- **Fast AF**: Super fast installation and setup process that doesn't compromise on quality or configuration.
- **Modern Best Practices**: Includes industry-standard tools and configurations to ensure you're following best practices from the start.
## 🛠️ Usage
```bash
npx @wolmer/create-next-app
```
Follow the prompts to configure your project:
```bash
Enter project name: Give your project a catchy name.
Use src/ directory?: Choose your preferred project structure.
Choose a linter: Pick between Biome or ESLint + Prettier for maintaining code quality.
Choose a package manager: Select your favorite package manager (npm, yarn, pnpm, or bun).
```
## Custom Components
### Image Component
The Image component is an enhanced version of the Next.js Image component, providing seamless fallback images in case of loading errors. It ensures your website looks great, even when images fail to load.
```tsx
import { Image } from '@components/image';
```
### Link Component
The Link component is an improved version of the Next.js Link component. It automatically add external links with target="_blank" and includes a UTM source for external tracking, enhancing your site's analytics capabilities.

```tsx
import { Link } from '@components/link';
```

## 📂 Project Structure

```
-N 📂 your-awesome-project
-N ├── 📂 app
-N │   ├── 📂 [...not_found]
-N │   ├── 📄 error.tsx
-N │   ├── 🖼️ favicon.ico
-N │   ├── 🎨 globals.css
-N │   ├── 📄 layout.tsx
-N │   ├── 📄 not-found.tsx
-N │   ├── 📄 page.tsx
-N │   └── 📄 providers.tsx
-N ├── 📂 components
-N │   ├── 📂 fonts
-N │   ├── 📂 image
-N │   ├── 📂 link
-N │   └── 📂 ui
-N ├── 📂 hooks
-N │   ├── 📜 useMediaQuery.ts
-N │   └── 📜 useMounted.ts
-N ├── 📂 lib
-N │   └── 📜 utils.ts
-N ├── 📂 public
-N │   ├── 🖼️ logo.png
-N │   ├── 🖼️ next.svg
-N │   └── 🖼️ vercel.svg
-N ├── 📝 biome.json
-N ├── 📑 bun.lockb
-N ├── 📝 components.json
-N ├── ⚙️ config
-N │   └── 📜 index.ts
-N ├── 📂 types
-N │   └── 📜 index.d.ts
-N ├── 📜 next-sitemap.config.js
-N ├── 📜 next.config.mjs
-N ├── 📦 package.json
-N ├── 📜 postcss.config.mjs
-N ├── 📖 README.md
-N ├── 📜 tailwind.config.ts
-N ├── 📜 tsconfig.json
-N └── 📂 utils
-N     ├── 📜 generateSeo.ts
-N     └── 📄 googleAnalytics.tsx
```
## 📦 Version Control and Changelog
This project uses Commitizen and cz-conventional-changelog for structured commits, ensuring a consistent commit message format and changelog generation. You can also utilize commit-and-tag-version for automated versioning based on commit history.
Making a Commit

### When making a commit, use the command:
```bash
npm run commit
```
This will prompt you to provide a commit message following conventional changelog standards.

### Releasing a New Version
```bash
npm run release
```
This command will bump the version, generate a changelog, and create a new git tag.
## 🤝 Contributing
Contributions are welcome! If you have ideas for improving this tool, feel free to open an issue or submit a pull request.