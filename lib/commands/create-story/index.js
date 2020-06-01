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

var Utils = require("../utils");

function createStory(_x) {
  return _createStory.apply(this, arguments);
}

function _createStory() {
  _createStory = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref) {
      var componentConfig,
        targetComponentPath,
        resourceTemplatePath,
        resourceOutputPath,
        resourceOutputFileName;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (componentConfig = _ref.componentConfig),
                (targetComponentPath = _ref.targetComponentPath);
              resourceTemplatePath = "_story.js.template";
              resourceOutputPath = ""
                .concat(targetComponentPath)
                .concat(path.sep);
              resourceOutputFileName = "_story.js";
              Utils.generateResource({
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
  return _createStory.apply(this, arguments);
}

module.exports = createStory;
