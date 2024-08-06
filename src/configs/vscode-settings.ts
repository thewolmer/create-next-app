export const vsCodeBiomeSettings = `{
	"editor.quickSuggestions": {
		"strings": "on"
	},
	"editor.formatOnSave": true,
	"editor.formatOnPaste": true,
	"editor.defaultFormatter": "biomejs.biome",
	"editor.codeActionsOnSave": {
		"quickfix.biome": "explicit",
		"source.organizeImports.biome": "explicit",
		"source.fixAll": "explicit"
	},
	"editor.linkedEditing": true,
	"files.eol": "\n",
	"emeraldwalk.runonsave": {
		"commands": [
			{
				"match": "\\.(ts|tsx|js|jsx|html)$",
				"cmd": "bunx biome lint \"\${file}\" --write --unsafe"
			}
		]
	}
}`

export const vsCodeEslintSettings = `{
	"editor.quickSuggestions": {
		"strings": "on"
	},
	"editor.formatOnSave": true,
	"editor.formatOnPaste": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.codeActionsOnSave": {
		"quickfix.biome": "explicit",
		"source.organizeImports.biome": "explicit",
		"source.fixAll": "explicit"
	},
	"editor.linkedEditing": true,
	"files.eol": "\n",
}`