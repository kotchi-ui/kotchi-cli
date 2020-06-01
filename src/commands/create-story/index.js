const path = require("path");
const { generateResource } = require("../generator");

async function generateStory({ config, outDir, tempDir }) {
  const resourceTemplatePath = `${tempDir}${path.sep}_story.js.template`;
  const resourceOutputPath = `${outDir}${path.sep}`;
  const resourceOutputFileName = "_story.js";
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}

module.exports = generateStory;
