"use strict";

var Handlebars = require("handlebars");

var Utils = require("./utils");

function registerHelpers() {
  Handlebars.registerHelper("componentName", Utils.toComponentTitle);
  Handlebars.registerHelper("className", Utils.toKuiComponentClass);
  Handlebars.registerHelper("attributeName", Utils.toKuiAttribute);
  Handlebars.registerHelper("propertyName", Utils.toKuiProperty);
  Handlebars.registerHelper("tagName", Utils.toKuiTagName); //Functions

  Handlebars.registerHelper("hasBooleanAttribute", function (
    attributes,
    options
  ) {
    return attributes.filter(function (attr) {
      return attr.type.toLowerCase() === "boolean";
    }).length > 0
      ? options.fn(this)
      : "";
  });
  Handlebars.registerHelper("isBoolean", function (type, options) {
    return type.toLowerCase() === "boolean" ? options.fn(this) : "";
  });
  Handlebars.registerHelper("notBoolean", function (type, options) {
    return type.toLowerCase() !== "boolean" ? options.fn(this) : "";
  });
  Handlebars.registerHelper("hasRegularAttribute", function (
    attributes,
    options
  ) {
    return attributes.filter(function (attr) {
      return attr.type.toLowerCase() !== "boolean";
    }).length > 0
      ? options.fn(this)
      : "";
  });
  Handlebars.registerHelper("joinArray", function (arr) {
    var str = "";

    if (arr) {
      for (var i = 0; i < arr.length - 1; i++) {
        str += '"'.concat(arr[i], '", ');
      }

      str += '"'.concat(arr[arr.length - 1], '"');
    }

    return str;
  });
  Handlebars.registerHelper("paramsList", function (arr) {
    var str = "";

    if (arr) {
      for (var i = 0; i < arr.length - 1; i++) {
        str += "".concat(arr[i].name, ", ");
      }

      str += "".concat(arr[arr.length - 1].name);
    }

    return str;
  });
}

module.exports = {
  registerHelpers: registerHelpers,
};
