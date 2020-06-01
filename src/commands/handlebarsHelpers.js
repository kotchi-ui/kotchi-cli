const Handlebars = require("handlebars");
const Utils = require("./utils");

function registerHelpers() {
  Handlebars.registerHelper("componentName", Utils.toComponentTitle);
  Handlebars.registerHelper("toClass", Utils.toKuiComponentClass);
  Handlebars.registerHelper("toAttribute", Utils.toKuiAttribute);
  Handlebars.registerHelper("toProperty", Utils.toKuiProperty);
  Handlebars.registerHelper("toTagName", Utils.toKuiTagName);
  Handlebars.registerHelper("toUserDefinedValue", function (str) {
    return str.toLowerCase() === "null" ? "null" : `"${str}"`;
  });

  //Functions
  Handlebars.registerHelper("hasBooleanAttribute", function (
    attributes,
    options
  ) {
    return attributes.filter((attr) => Utils.isBooleanType(attr.type)).length >
      0
      ? options.fn(this)
      : options.inverse(this);
  });
  Handlebars.registerHelper("isBoolean", function (type, options) {
    return Utils.isBooleanType(type) ? options.fn(this) : options.inverse(this);
  });
  Handlebars.registerHelper("isUserDefinedType", function (type, options) {
    return Utils.isUserDefinedType(type)
      ? options.fn(this)
      : options.inverse(this);
  });

  Handlebars.registerHelper("notBoolean", function (type, options) {
    return !Utils.isBooleanType(type)
      ? options.fn(this)
      : options.inverse(this);
  });
  Handlebars.registerHelper("hasRegularAttribute", function (
    attributes,
    options
  ) {
    return attributes.filter((attr) => Utils.isBooleanType(attr.type)).length >
      0
      ? options.fn(this)
      : options.inverse(this);
  });
  Handlebars.registerHelper("joinArray", function (arr) {
    let str = "";
    if (arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        str += `"${arr[i]}", `;
      }
      str += `"${arr[arr.length - 1]}"`;
    }
    return str;
  });
  Handlebars.registerHelper("paramsList", function (arr) {
    let str = "";
    if (arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        str += `${arr[i].name}, `;
      }
      str += `${arr[arr.length - 1].name}`;
    }
    return str;
  });
}
module.exports = { registerHelpers };
