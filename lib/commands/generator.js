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

var _require = require("fs"),
  fs = _require.promises;

var Handlebars = require("handlebars");

var HandlebarsHelpers = require("./handlebarsHelpers");

function readAndCompileTemplate(_x) {
  return _readAndCompileTemplate.apply(this, arguments);
}

function _readAndCompileTemplate() {
  _readAndCompileTemplate = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref) {
      var componentConfig, resourceTemplatePath, fileContents;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (componentConfig = _ref.componentConfig),
                (resourceTemplatePath = _ref.resourceTemplatePath);
              _context.next = 3;
              return fs.readFile(resourceTemplatePath, "utf8");

            case 3:
              fileContents = _context.sent;
              HandlebarsHelpers.registerHelpers();
              return _context.abrupt(
                "return",
                Handlebars.compile(fileContents)(componentConfig)
              );

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _readAndCompileTemplate.apply(this, arguments);
}

function writeTargetFile(_x2) {
  return _writeTargetFile.apply(this, arguments);
}

function _writeTargetFile() {
  _writeTargetFile = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(_ref2) {
      var resourceOutputPath, resourceOutputFileName, fileContents;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              (resourceOutputPath = _ref2.resourceOutputPath),
                (resourceOutputFileName = _ref2.resourceOutputFileName),
                (fileContents = _ref2.fileContents);
              _context2.next = 3;
              return fs.mkdir(resourceOutputPath, {
                recursive: true,
              });

            case 3:
              _context2.next = 5;
              return fs.writeFile(
                "".concat(resourceOutputPath).concat(resourceOutputFileName),
                fileContents,
                "utf8"
              );

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return _writeTargetFile.apply(this, arguments);
}

function readConfigurationFile(_x3) {
  return _readConfigurationFile.apply(this, arguments);
}

function _readConfigurationFile() {
  _readConfigurationFile = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(filePath) {
      var configurationFile;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              _context3.next = 2;
              return fs.readFile(filePath, "utf8");

            case 2:
              configurationFile = _context3.sent;
              return _context3.abrupt("return", JSON.parse(configurationFile));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })
  );
  return _readConfigurationFile.apply(this, arguments);
}

function generateResource(_x4) {
  return _generateResource.apply(this, arguments);
}

function _generateResource() {
  _generateResource = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(_ref3) {
      var resourceTemplatePath,
        resourceOutputPath,
        resourceOutputFileName,
        componentConfig,
        fileContents;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch ((_context4.prev = _context4.next)) {
            case 0:
              (resourceTemplatePath = _ref3.resourceTemplatePath),
                (resourceOutputPath = _ref3.resourceOutputPath),
                (resourceOutputFileName = _ref3.resourceOutputFileName),
                (componentConfig = _ref3.componentConfig);
              _context4.next = 3;
              return readAndCompileTemplate({
                componentConfig: componentConfig,
                resourceTemplatePath: resourceTemplatePath,
              });

            case 3:
              fileContents = _context4.sent;
              writeTargetFile({
                resourceOutputPath: resourceOutputPath,
                resourceOutputFileName: resourceOutputFileName,
                fileContents: fileContents,
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })
  );
  return _generateResource.apply(this, arguments);
}

module.exports = {
  readConfigurationFile: readConfigurationFile,
  generateResource: generateResource,
};
