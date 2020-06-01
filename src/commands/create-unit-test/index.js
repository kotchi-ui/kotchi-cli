const path = require("path");
const { generateResource } = require("../generator");

async function generateTest({ config, outDir, tempDir }) {
  const resourceTemplatePath = `${tempDir}${path.sep}_test.js.template`;
  const resourceOutputPath = `${outDir}${path.sep}`;
  const resourceOutputFileName = "_test.js";
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}

module.exports = generateTest;
