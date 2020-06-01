async function kotchiCLI() {
  const path = require("path");
  const args = require("minimist")(process.argv.slice(2));
  const Generator = require("./commands/generator");
  const Utils = require("./commands/utils");

  const generateComponent = require("./commands/create-component");
  const generateDocs = require("./commands/create-docs");
  const generateStory = require("./commands/create-story");
  const generateTest = require("./commands/create-unit-test");

  // //Available commands
  const commands = [
    "component",
    "component-only",
    "unit-test",
    "story",
    "docs",
  ];
  //Reading the CLI parameters
  const baseCommand = args["_"];
  if (baseCommand[0] !== "generate" && baseCommand[0] !== "g") {
    throw new Error(`Unknown command`);
  }
  const command = baseCommand[1];
  if (commands.indexOf(command) === -1) {
    throw new Error(`Unknown generate command ${command}`);
  }
  const descriptor = args["config"];
  if (!descriptor) {
    throw new Error("Missing required config file");
  }
  const componentsPath = args["componentsPath"] || "src/components";
  //Reading the descriptor file
  const config = await Generator.readConfigurationFile(descriptor);
  const { name } = config;
  //Preparing the paths
  const tempDir = `${__dirname}${path.sep}commands${path.sep}templates`;
  const outDir = `${componentsPath}${path.sep}${Utils.toKuiTagName(name)}${
    path.sep
  }`;
  // //Start generating the files
  console.log(`Generating ${command} ${name} into ${outDir}`);
  console.log("Generating files ...");
  const startTime = new Date().getTime();
  const steps = [];
  switch (command) {
    case "component":
      steps.push(generateComponent.bind(this, { config, outDir, tempDir }));
      steps.push(generateDocs.bind(this, { config, outDir, tempDir }));
      steps.push(generateStory.bind(this, { config, outDir, tempDir }));
      steps.push(generateTest.bind(this, { config, outDir, tempDir }));
      break;
    case "component-only":
      steps.push(generateComponent.bind(this, { config, outDir, tempDir }));
      break;
    case "docs":
      steps.push(generateDocs.bind(this, { config, outDir, tempDir }));
      break;
    case "story":
      steps.push(generateStory.bind(this, { config, outDir, tempDir }));
      break;
    case "unit-test":
      steps.push(generateTest.bind(this, { config, outDir, tempDir }));
      break;
  }
  await Promise.all(steps.map((fn) => fn()));
  const endTime = new Date().getTime();
  console.log(`Finished in ${endTime - startTime}ms`);
}

(async () => {
  try {
    await kotchiCLI();
  } catch (err) {
    console.log(err.message);
  }
})();
