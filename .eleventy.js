require('dotenv').config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'img' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/favicon.ico': 'favicon.ico' });

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
// console.log(process.env)