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

function generateComponentClass(_x) {
  return _generateComponentClass.apply(this, arguments);
}

function _generateComponentClass() {
  _generateComponentClass = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref) {
      var componentConfig,
        targetComponentPath,
        templatesPath,
        resourceTemplatePath,
        resourceOutputPath,
        resourceOutputFileName;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (componentConfig = _ref.componentConfig),
                (targetComponentPath = _ref.targetComponentPath),
                (templatesPath = _ref.templatesPath);
              resourceTemplatePath = "".concat(
                templatesPath,
                "/component.js.template"
              );
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep);
              resourceOutputFileName = "kui-".concat(
                _kebabCase(componentConfig.name),
                ".js"
              );
              generateResource({
                resourceTemplatePath: resourceTemplatePath,
                resourceOutputPath: resourceOutputPath,
                resourceOutputFileName: resourceOutputFileName,
                componentConfig: componentConfig,
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _generateComponentClass.apply(this, arguments);
}

function generateComponentIndex(_x2) {
  return _generateComponentIndex.apply(this, arguments);
}

function _generateComponentIndex() {
  _generateComponentIndex = _asyncToGenerator(
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
              resourceTemplatePath = "".concat(
                templatesPath,
                "/index.js.template"
              );
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep);
              resourceOutputFileName = "index.js";
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
  return _generateComponentIndex.apply(this, arguments);
}

function generateComponentReadMe(_x3) {
  return _generateComponentReadMe.apply(this, arguments);
}

function _generateComponentReadMe() {
  _generateComponentReadMe = _asyncToGenerator(
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
                "/README.md.template"
              );
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep);
              resourceOutputFileName = "README.md";
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
  return _generateComponentReadMe.apply(this, arguments);
}

function generateComponentStyle(_x4) {
  return _generateComponentStyle.apply(this, arguments);
}

function _generateComponentStyle() {
  _generateComponentStyle = _asyncToGenerator(
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
                "/style.scss.template"
              );
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep);
              resourceOutputFileName = "style.scss";
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
  return _generateComponentStyle.apply(this, arguments);
}

function generateComponentTemplate(_x5) {
  return _generateComponentTemplate.apply(this, arguments);
}

function _generateComponentTemplate() {
  _generateComponentTemplate = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(_ref5) {
      var componentConfig,
        targetComponentPath,
        templatesPath,
        resourceTemplatePath,
        resourceOutputPath,
        resourceOutputFileName;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch ((_context5.prev = _context5.next)) {
            case 0:
              (componentConfig = _ref5.componentConfig),
                (targetComponentPath = _ref5.targetComponentPath),
                (templatesPath = _ref5.templatesPath);
              resourceTemplatePath = "".concat(
                templatesPath,
                "/template.js.template"
              );
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep);
              resourceOutputFileName = "template.js";
              generateResource({
                resourceTemplatePath: resourceTemplatePath,
                resourceOutputPath: resourceOutputPath,
                resourceOutputFileName: resourceOutputFileName,
                componentConfig: componentConfig,
              });

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })
  );
  return _generateComponentTemplate.apply(this, arguments);
}

function generateComponent(_x6) {
  return _generateComponent.apply(this, arguments);
}

function _generateComponent() {
  _generateComponent = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee6(_ref6) {
      var componentConfig, targetComponentPath, templatesPath;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch ((_context6.prev = _context6.next)) {
            case 0:
              (componentConfig = _ref6.componentConfig),
                (targetComponentPath = _ref6.targetComponentPath),
                (templatesPath = _ref6.templatesPath);
              generateComponentClass({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });
              generateComponentIndex({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });
              generateComponentReadMe({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });
              generateComponentStyle({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });
              generateComponentTemplate({
                componentConfig: componentConfig,
                targetComponentPath: targetComponentPath,
                templatesPath: templatesPath,
              });

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })
  );
  return _generateComponent.apply(this, arguments);
}

module.exports = generateComponent;
