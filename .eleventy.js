const { marked } = require("marked");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("IMG");
    eleventyConfig.addPassthroughCopy("JS");
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addFilter("markdown", (value) => marked.parse(value));

    return {
        dir: {
            input: ".",
            output: "_site"
        },
        templateFormats: ["html"],
        htmlTemplateEngine: "liquid"
    };
};
