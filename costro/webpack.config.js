const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production';

	return {
		devtool: isProduction ? false : 'source-map',
		entry: {
			app: `${path.resolve(__dirname, './src/index.js')}`
		},
		module: {
			rules: [
				{
					include: [path.resolve(__dirname, './src')],
					test: /\.js$/,
					use: [
						{
							loader: 'babel-loader'
						}
					]
				}
			]
		},
		optimization: {
			chunkIds: 'deterministic', // or 'named'
			mergeDuplicateChunks: true,
			minimizer: [
				new TerserPlugin({
					extractComments: false,
					parallel: true,
					terserOptions: {
						compress: {
							// Drop console.log|console.info|console.debug
							// Keep console.warn|console.error
							pure_funcs: ['console.log', 'console.info', 'console.debug']
						}
					}
				})
			],
			providedExports: false,
			removeAvailableModules: true,
			removeEmptyChunks: true,
			splitChunks: false
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, './dist'),
			sourceMapFilename: '[file].map'
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new MiniCssExtractPlugin({
				chunkFilename: '[name].css',
				filename: '[name].css'
			}),
			new webpack.optimize.ModuleConcatenationPlugin()
		],
		stats: {
			assets: true,
			assetsSort: '!size',
			children: false,
			chunkModules: false,
			chunks: false,
			colors: true,
			entrypoints: false,
			excludeAssets: /.map$/,
			hash: false,
			modules: false,
			timings: true
		},
		watch: !isProduction,
		watchOptions: {
			ignored: /node_modules/
		}
	};
};
