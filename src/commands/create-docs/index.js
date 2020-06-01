const path = require("path");
const { generateResource } = require("../generator");

async function generateDocs({ config, outDir, tempDir }) {
  generateDocsConfiguration({ config, outDir, tempDir });
  generateDocsBasicExample({ config, outDir, tempDir });
  generateDocsAttributes({ config, outDir, tempDir });
  generateDocsAttributesExamples({ config, outDir, tempDir });
}

async function generateDocsConfiguration({ config, outDir, tempDir }) {
  const resourceOutputFileName = "configuration.json";
  const resourceTemplatePath = `${tempDir}${path.sep}docs${path.sep}${resourceOutputFileName}.template`;
  const resourceOutputPath = `${outDir}${path.sep}docs${path.sep}`;
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}

async function generateDocsBasicExample({ config, outDir, tempDir }) {
  const resourceOutputFileName = "example-basic.html";
  const resourceTemplatePath = `${tempDir}${path.sep}docs${path.sep}${resourceOutputFileName}.template`;
  const resourceOutputPath = `${outDir}${path.sep}docs${path.sep}`;
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}

async function generateDocsAttributes({ config, outDir, tempDir }) {
  const resourceOutputFileName = "example-attributes.html";
  const resourceTemplatePath = `${tempDir}${path.sep}docs${path.sep}${resourceOutputFileName}.template`;
  const resourceOutputPath = `${outDir}${path.sep}docs${path.sep}`;
  generateResource({
    resourceTemplatePath,
    resourceOutputPath,
    resourceOutputFileName,
    config,
  });
}
async function generateDocsAttributesExamples({ config, outDir, tempDir }) {
  config.attributes.forEach((attribute) => {
    const resourceOutputFileName = `example-${attribute.name}.html`;
    const resourceTemplatePath = `${tempDir}${path.sep}docs${path.sep}example-attribute.html.template`;
    const resourceOutputPath = `${outDir}${path.sep}docs${path.sep}`;
    generateResource({
      resourceTemplatePath,
      resourceOutputPath,
      resourceOutputFileName,
      config: attribute,
    });
  });
}

module.exports = generateDocs;
