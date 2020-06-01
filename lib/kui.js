"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function kotchiCLI() {
  return _kotchiCLI.apply(this, arguments);
}

function _kotchiCLI() {
  _kotchiCLI = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
      var path,
        args,
        Utils,
        commands,
        baseCommand,
        command,
        descriptor,
        componentsPath,
        config,
        name,
        templatesPath,
        outdir,
        startTime,
        steps,
        endTime;
      return regeneratorRuntime.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                path = require("path");
                args = require("minimist")(process.argv.slice(2));
                Utils = require("./commands/utils"); // //Available commands

                commands = [
                  "component",
                  "component-only",
                  "unit-test",
                  "story",
                  "docs",
                ]; //Reading the CLI parameters

                baseCommand = args["_"];

                if (
                  !(baseCommand[0] !== "generate" && baseCommand[0] !== "g")
                ) {
                  _context2.next = 7;
                  break;
                }

                throw new Error("Unknown command");

              case 7:
                command = baseCommand[1];

                if (!(commands.indexOf(command) === -1)) {
                  _context2.next = 10;
                  break;
                }

                throw new Error("Unknown generate command ".concat(command));

              case 10:
                descriptor = args["config"];

                if (descriptor) {
                  _context2.next = 13;
                  break;
                }

                throw new Error("Missing required config file");

              case 13:
                componentsPath = args["componentsPath"] || "src/components"; //Reading the descriptor file

                _context2.next = 16;
                return Utils.readConfigurationFile(descriptor);

              case 16:
                config = _context2.sent;
                name = config.name; //Preparing the paths

                templatesPath = ""
                  .concat(__dirname)
                  .concat(path.sep, "commands")
                  .concat(path.sep, "templates");
                outdir = ""
                  .concat(componentsPath)
                  .concat(path.sep)
                  .concat(Utils.tagName(name))
                  .concat(path.sep); // //Start generating the files

                console.log(
                  "Generating "
                    .concat(command, " #")
                    .concat(name, " into ")
                    .concat(outdir)
                );
                console.log("Generating files ...");
                startTime = new Date().getTime();
                steps = [];
                _context2.t0 = command;
                _context2.next =
                  _context2.t0 === "component"
                    ? 27
                    : _context2.t0 === "component-only"
                    ? 36
                    : _context2.t0 === "unit-test"
                    ? 42
                    : _context2.t0 === "story"
                    ? 44
                    : _context2.t0 === "docs"
                    ? 46
                    : 48;
                break;

              case 27:
                steps.push(
                  Utils.generateComponentClass.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentIndex.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentReadMe.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentStyle.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentTemplate.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateUnitTest.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateStory.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateDocs.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                return _context2.abrupt("break", 48);

              case 36:
                steps.push(
                  Utils.generateComponentClass.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentIndex.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentReadMe.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentStyle.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                steps.push(
                  Utils.generateComponentTemplate.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                return _context2.abrupt("break", 48);

              case 42:
                steps.push(
                  Utils.generateUnitTest.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                return _context2.abrupt("break", 48);

              case 44:
                steps.push(
                  Utils.generateStory.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                return _context2.abrupt("break", 48);

              case 46:
                steps.push(
                  Utils.generateDocs.bind(this, {
                    config: config,
                    outdir: outdir,
                    templatesPath: templatesPath,
                  })
                );
                return _context2.abrupt("break", 48);

              case 48:
                _context2.next = 50;
                return Promise.all(
                  steps.map(function (fn) {
                    return fn();
                  })
                );

              case 50:
                endTime = new Date().getTime();
                console.log("Finished in ".concat(endTime - startTime, "ms"));

              case 52:
              case "end":
                return _context2.stop();
            }
          }
        },
        _callee2,
        this
      );
    })
  );
  return _kotchiCLI.apply(this, arguments);
}

_asyncToGenerator(
  /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(
      function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return kotchiCLI();

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      },
      _callee,
      null,
      [[0, 5]]
    );
  })
)();
