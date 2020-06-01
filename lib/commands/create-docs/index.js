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

var path = require("path");

function generateDocs(_x) {
  return _generateDocs.apply(this, arguments);
}

function _generateDocs() {
  _generateDocs = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref) {
      var componentConfig, targetComponentPath, templatesPath;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (componentConfig = _ref.componentConfig),
                (targetComponentPath = _ref.targetComponentPath),
                (templatesPath = _ref.templatesPath);
              generateDocsConfiguration({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });
              generateDocsBasicExample({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });
              generateDocsAttributesConfigurations({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });
              generateDocsAttributesExample({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _generateDocs.apply(this, arguments);
}

function generateDocsConfiguration(_x2) {
  return _generateDocsConfiguration.apply(this, arguments);
}

function _generateDocsConfiguration() {
  _generateDocsConfiguration = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(_ref2) {
      var componentConfig,
        targetComponentPath,
        templatesPath,
        resourceTemplatePath,
        resourceOutputPath,
        resourceOutputFileName;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              (componentConfig = _ref2.componentConfig),
                (targetComponentPath = _ref2.targetComponentPath),
                (templatesPath = _ref2.templatesPath);
              resourceTemplatePath = "".concat(templatesPath, "/docs.template");
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep, "docs")
                .concat(path.sep);
              resourceOutputFileName = "configuration.json";
              generateResource({
                resourceTemplatePath: resourceTemplatePath,
                resourceOutputPath: resourceOutputPath,
                resourceOutputFileName: resourceOutputFileName,
                componentConfig: componentConfig,
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return _generateDocsConfiguration.apply(this, arguments);
}

function generateDocsBasicExample(_x3) {
  return _generateDocsBasicExample.apply(this, arguments);
}

function _generateDocsBasicExample() {
  _generateDocsBasicExample = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(_ref3) {
      var componentConfig,
        targetComponentPath,
        templatesPath,
        resourceTemplatePath,
        resourceOutputPath,
        resourceOutputFileName;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              (componentConfig = _ref3.componentConfig),
                (targetComponentPath = _ref3.targetComponentPath),
                (templatesPath = _ref3.templatesPath);
              resourceTemplatePath = "".concat(
                templatesPath,
                "/basic-example-docs.template"
              );
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep, "docs")
                .concat(path.sep);
              resourceOutputFileName = "basic-examples.html";
              generateResource({
                resourceTemplatePath: resourceTemplatePath,
                resourceOutputPath: resourceOutputPath,
                resourceOutputFileName: resourceOutputFileName,
                componentConfig: componentConfig,
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })
  );
  return _generateDocsBasicExample.apply(this, arguments);
}

function generateDocsAttributesConfigurations(_x4) {
  return _generateDocsAttributesConfigurations.apply(this, arguments);
}

function _generateDocsAttributesConfigurations() {
  _generateDocsAttributesConfigurations = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(_ref4) {
      var componentConfig,
        targetComponentPath,
        templatesPath,
        resourceTemplatePath,
        resourceOutputPath,
        resourceOutputFileName;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch ((_context4.prev = _context4.next)) {
            case 0:
              (componentConfig = _ref4.componentConfig),
                (targetComponentPath = _ref4.targetComponentPath),
                (templatesPath = _ref4.templatesPath);
              resourceTemplatePath = "".concat(
                templatesPath,
                "/attributes-docs.template"
              );
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep, "docs")
                .concat(path.sep);
              resourceOutputFileName = "attributes-configurations.html";
              generateResource({
                resourceTemplatePath: resourceTemplatePath,
                resourceOutputPath: resourceOutputPath,
                resourceOutputFileName: resourceOutputFileName,
                componentConfig: componentConfig,
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })
  );
  return _generateDocsAttributesConfigurations.apply(this, arguments);
}

function generateDocsAttributesExample(_x5) {
  return _generateDocsAttributesExample.apply(this, arguments);
}

function _generateDocsAttributesExample() {
  _generateDocsAttributesExample = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(_ref5) {
      var componentConfig, targetComponentPath, templatesPath;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch ((_context5.prev = _context5.next)) {
            case 0:
              (componentConfig = _ref5.componentConfig),
                (targetComponentPath = _ref5.targetComponentPath),
                (templatesPath = _ref5.templatesPath);
              componentConfig.attributes.forEach(function (attribute) {
                var resourceTemplatePath = "".concat(
                  templatesPath,
                  "/attribute-docs.template"
                );
                var resourceOutputPath = ""
                  .concat(targetComponentPath)
                  .concat(path.sep, "docs")
                  .concat(path.sep);
                var resourceOutputFileName = "".concat(
                  attribute.name,
                  "-example.html"
                );
                generateResource({
                  resourceTemplatePath: resourceTemplatePath,
                  resourceOutputPath: resourceOutputPath,
                  resourceOutputFileName: resourceOutputFileName,
                  componentConfig: attribute,
                });
              });

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })
  );
  return _generateDocsAttributesExample.apply(this, arguments);
}

module.exports = generateDocs;
