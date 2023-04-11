const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
require('dotenv').config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'img' });

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy('favicon.ico');

  eleventyConfig.setDataDeepMerge(true);

  return {
    htmlTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md', '11ty.js'],
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'build',
      data: '_data',
    },
  };
};
