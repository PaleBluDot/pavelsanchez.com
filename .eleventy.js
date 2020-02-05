module.exports = function(config) {
	return {
		dir: {
			input: 'src',
			output: 'build',
			data: '_data'
		},
		templateFormats: ['html', 'njk', 'md', '11ty.js'],
		passthroughFileCopy: true
	};
};
