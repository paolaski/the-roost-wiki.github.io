'use strict';
const path = require('path');
const fs = require("fs");
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function (eleventyConfig){
    eleventyConfig.setLibrary('md', markdownLib);
    eleventyConfig.addPassthroughCopy("styles.css");

    return{
        dir:{
            input: "src",
            output: "public",
        },
    };

    // const content_404 = fs.readFileSync(path.join(__dirname, '404.html'));
    // const browserSync = require("browser-sync").create();

    // browserSync.init({
    //     files: ["public/styles/*.css"],
    //     server: {
    //         baseDir: "public"
    //     }
    // }, (err, bs) => {
    //     bs.addMiddleware("*", (req, res) => {
    //         // Provides the 404 content without redirect.
    //         res.write(content_404);
    //         res.end();
    //     });
    // });
};