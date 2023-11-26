const sass = require("sass")
const htmlmin = require("html-minifier")

const { execSync } = require("child_process")

/** @param {import('@11ty/eleventy').UserConfig} config */
module.exports = function (config) {
  config.addPassthroughCopy({ "src/public": "." })

  config.addTemplateFormats("scss")
  config.addExtension("scss", {
    outputFileExtension: "css",

    compile: async function (inputContent) {
      let result = sass.compileString(inputContent)

      return async (data) => {
        return result.css
      }
    },
  })

  config.addTransform("htmlmin", function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      })
      return minified
    }

    return content
  })

  config.addFilter("scss", (data) => {
    return sass.compileString(data).css
  })

  config.addShortcode("ghlink", (repo) => {
    return `[${repo}](https://github.com/cf12/${repo})`
  })

  config.addShortcode("gitHash", () => {
    return execSync("git rev-parse --short HEAD").toString().trim()
  })

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
  }
}
