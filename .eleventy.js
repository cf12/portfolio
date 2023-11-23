const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const CleanCSS = require("clean-css")

const OUTPUT_DIR = path.join(__dirname, "public")
const INPUT_DIR = path.join(__dirname, "src")

/** @param {import("@11ty/eleventy").UserConfig} config */
module.exports = function (config) {
  config.addGlobalData("build", () => {
    return {
      hash: execSync("git rev-parse --short HEAD").toString().trim(),
      size: execSync(`du -s -B1 -A -h ${OUTPUT_DIR} | cut -f1`),
    }
  })
  config.addGlobalData("year", () => {
    return new Date().getFullYear()
  })

  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  // config.on("eleventy.after", async ({ dir }) => {
  //   const stats = fs.statSync("./dist")
  //   console.log(stats)
  // })

  return {
    dir: {
      input: INPUT_DIR,
      output: OUTPUT_DIR,
    },
  }
}
