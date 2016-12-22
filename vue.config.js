module.exports = {
	title: 'revue example',
	entry: './example',
	resolve: true,
	dist: 'dist-example',
	mergeConfig: {
		module: {
			rules: [
				{test: /\.js$/, loader: 'babel-loader', include: [/node_modules\/dot-prop/]}
			]
		}
	}
}
