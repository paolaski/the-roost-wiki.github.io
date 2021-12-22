module.exports = function (eleventyConfig){
    const markdownIt = require('markdown-it');
    const markdownItAttrs = require('markdown-it-attrs');
    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }
    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
    eleventyConfig.setLibrary('md', markdownLib);
    
    eleventyConfig.addPassthroughCopy("styles.css");

    return{
        dir:{
            input: "src",
            output: "public",
        },
    };
};