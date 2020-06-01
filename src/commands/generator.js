const { promises: fs } = require("fs");
const Handlebars = require("handlebars");
const HandlebarsHelpers = require("./handlebarsHelpers");
const { addUserDefinedTypes } = require("./utils");

/**
 * Generate a compiled template with the configuration object as it's data
 *
 * @param {Object} data - The data needed for reading and compiling the template
 * @param {Object} data.config - The configuration file that is used as the data for the template
 * @param {string} data.resourceTemplatePath - The template file path
 *
 * @returns compiled template with the configuration object as it's data
 */
async function readAndCompileTemplate({ config, resourceTemplatePath }) {
  const fileContents = await fs.readFile(resourceTemplatePath, "utf8");
  HandlebarsHelpers.registerHelpers();
  return Handlebars.compile(fileContents)(config);
}

/**
 * Generate a compiled configuration file with the configuration object itself as it's data
 * @param {String} rawConfig - The configuration file contents as a plain text
 */
function compileConfig(rawConfig) {
  HandlebarsHelpers.registerHelpers();
  const compiledConfig = Handlebars.compile(rawConfig)(JSON.parse(rawConfig));
  return JSON.parse(compiledConfig);
}

async function writeTargetFile({
  resourceOutputPath,
  resourceOutputFileName,
  fileContents,
}) {
  await fs.mkdir(resourceOutputPath, { recursive: true });
  await fs.writeFile(
    `${resourceOutputPath}${resourceOutputFileName}`,
    fileContents,
    "utf8"
  );
}

async function readConfigurationFile(filePath) {
  const rawConfig = await fs.readFile(filePath, "utf8");
  const config = compileConfig(rawConfig);
  addUserDefinedTypes(config);
  return config;
}

async function generateResource({
  resourceTemplatePath,
  resourceOutputPath,
  resourceOutputFileName,
  config,
}) {
  const fileContents = await readAndCompileTemplate({
    config,
    resourceTemplatePath,
  });
  writeTargetFile({
    resourceOutputPath,
    resourceOutputFileName,
    fileContents,
  });
}

module.exports = { readConfigurationFile, generateResource };
