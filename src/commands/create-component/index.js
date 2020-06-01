const path = require("path");
const { generateResource } = require("../generator");
const { toKuiTagName } = require("../utils");

async function generateComponentClass({ config, outDir, tempDir }) {
  const resourceTemplatePath = `${tempDir}/component.js.template`;
  const resourceOutputPath = `${outDir}${path.sep}`;
  const resourceOutputFileName = `${toKuiTagName(config.name)}.js`;
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}

async function generateComponentIndex({ config, outDir, tempDir }) {
  const resourceTemplatePath = `${tempDir}/index.js.template`;
  const resourceOutputPath = `${outDir}${path.sep}`;
  const resourceOutputFileName = "index.js";
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}

async function generateComponentReadMe({ config, outDir, tempDir }) {
  const resourceTemplatePath = `${tempDir}/README.md.template`;
  const resourceOutputPath = `${outDir}${path.sep}`;
  const resourceOutputFileName = "README.md";
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}
async function generateComponentStyle({ config, outDir, tempDir }) {
  const resourceTemplatePath = `${tempDir}/style.scss.template`;
  const resourceOutputPath = `${outDir}${path.sep}`;
  const resourceOutputFileName = "style.scss";
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}
async function generateComponentTemplate({ config, outDir, tempDir }) {
  const resourceTemplatePath = `${tempDir}/template.js.template`;
  const resourceOutputPath = `${outDir}${path.sep}`;
  const resourceOutputFileName = "template.js";
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}

async function generateComponent({ config, outDir, tempDir }) {
  generateComponentClass({ config, outDir, tempDir });
  generateComponentIndex({ config, outDir, tempDir });
  generateComponentReadMe({ config, outDir, tempDir });
  generateComponentStyle({ config, outDir, tempDir });
  generateComponentTemplate({ config, outDir, tempDir });
}

module.exports = generateComponent;
