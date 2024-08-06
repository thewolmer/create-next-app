export const biomeConfig = `{
	"$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
	"files": {
		"maxSize": 1572864
	},
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true,
			"a11y": {
				"noSvgWithoutTitle": "off"
			},
			"correctness": {
				"noUnusedVariables": "error",
				"useExhaustiveDependencies": "off"
			},
			"security": {
				"noDangerouslySetInnerHtml": "off"
			},
			"style": {
				"useBlockStatements": "error",
				"noNonNullAssertion": "off"
			},
			"performance": {
				"noDelete": "off"
			},
			"suspicious": {
				"noExplicitAny": "off",
				"noConsoleLog": "warn"
			},
			"complexity": {
				"noForEach": "off"
			}
		},
		"ignore": [
			".vitest",
			"node_modules",
			".next",
			"dist",
			".nuxt",
			"./packages/api/src/openapi.d.ts",
			".wrangler",
			".react-email",
			".content-collections"
		]
	},
	"formatter": {
		"indentStyle": "space",
		"indentWidth": 2,
		"enabled": true,
		"lineWidth": 100,
		"ignore": [
			"node_modules",
			".next",
			"dist",
			".nuxt",
			".wrangler",
			".react-email",
			".content-collections"
		]
	},
	"organizeImports": {
		"enabled": true,
		"ignore": [
			"node_modules",
			".next",
			"dist",
			".nuxt",
			".wrangler",
			".react-email",
			".content-collections"
		]
	}
}`;
