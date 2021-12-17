module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true
	},

	extends: ['standard', 'plugin:react/recommended', 'plugin:prettier/recommended'],

	globals: {
		document: false,
		window: false
	},

	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			impliedStrict: true,
			jsx: true
		},
		ecmaVersion: 6,
		sourceType: 'module'
	},

	plugins: ['prettier'],

	rules: {
		indent: ['error', 'tab', { ignoredNodes: ['TemplateLiteral > *'] }],
		'no-console': 0,
		'no-tabs': 0,
		'react/display-name': 0,
		'react/jsx-key': 0,
		'react/prop-types': 0,
		'space-before-function-paren': [
			'error',
			{ anonymous: 'never', asyncArrow: 'always', named: 'never' }
		]
	},

	settings: {
		react: {
			fragment: 'F', // Fragment
			pragma: 'h', // createElement
			version: '0' // Remove the warning of the missing React package
		}
	}
};
