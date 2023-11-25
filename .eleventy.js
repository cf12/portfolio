const sass = require("sass")

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

  config.addShortcode("ghlink", function (repo) {
    return `[${repo}](https://github.com/cf12/${repo})`
  })

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
  }
}
