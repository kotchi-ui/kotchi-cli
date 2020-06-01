const _startCase = require("lodash/startCase");
const _kebabCase = require("lodash/kebabCase");

/**
 * Makes sure the text is correctly used by the cli by removing any kui(-) prefix
 * @param {String} str string to fix
 * @returns a string without kui(-) prefix
 */
function removeKUIPrefix(str) {
  let modifiedString = str;
  if (str.toLowerCase().indexOf("kui") === 0) {
    modifiedString = str.substring(str.charAt(3) === "-" ? 4 : 3, str.length);
  }
  return modifiedString;
}

/**
 * Generate the component name as a title
 * @param {String} name Component name
 * @returns component name as a title
 */
function toComponentTitle(name) {
  return _startCase(name).replace(/\s/, "");
}

/**
 * Generates the kui component class name
 * @param {String} name Component name
 * @returns kui component class name
 */
function toKuiComponentClass(name) {
  const str = removeKUIPrefix(name);
  return `KUI${toComponentTitle(str)}`;
}

/**
 * Generates the KUI attribute name
 * @param {String} name Attribute name
 * @returns kui attribute name
 */
function toKuiAttribute(name) {
  const str = removeKUIPrefix(name);
  return `kui-${_kebabCase(str)}`;
}

/**
 * Generates the KUI property name
 * @param {String} name Property name
 * @returns kui property name
 */
function toKuiProperty(name) {
  const str = removeKUIPrefix(name);
  return `kui${_startCase(str).replace(/\s/, "")}`;
}

/**
 * Generates the KUI component tag name
 * @param {String} name Component name
 * @returns kui component tag name
 */
function toKuiTagName(name) {
  const str = removeKUIPrefix(name);
  return `kui-${_kebabCase(str)}`;
}

/**
 * Checks if the given type is a user defined type
 * @param {String} type the object type
 * @returns is the given type a user defined one
 */
function isUserDefinedType(type) {
  const lcType = type.toLowerCase();
  return lcType !== "boolean" && lcType !== "number" && lcType !== "string";
}

/**
 * Checks if the given type is a boolean type
 * @param {String} type the object type
 * @returns is the given type a boolean one
 */
function isBooleanType(type) {
  const lcType = type.toLowerCase();
  return lcType === "boolean";
}
/**
 * Checks if the given type is a number type
 * @param {String} type the object type
 * @returns is the given type a number one
 */
function isNumberType(type) {
  const lcType = type.toLowerCase();
  return lcType === "number";
}
/**
 * Checks if the given type is a string type
 * @param {String} type the object type
 * @returns is the given type a string one
 */
function isStringType(type) {
  const lcType = type.toLowerCase();
  return lcType === "string";
}

/**
 * Alters the configuration file and adds the user defined types
 * @param {Object} config Component descriptor object
 */
function addUserDefinedTypes(config) {
  const userDefinedTypes = [];
  config.attributes.forEach((attribute) => {
    if (isUserDefinedType(attribute.type)) {
      userDefinedTypes.push({
        name: attribute.type,
        values: Object.keys(attribute.values).map(function (key) {
          return { key, value: attribute.values[key] };
        }),
      });
    }
  });
  if (userDefinedTypes.length > 0) {
    config.userDefinedTypes = userDefinedTypes;
  }
}

module.exports = {
  toComponentTitle,
  toKuiAttribute,
  toKuiComponentClass,
  toKuiProperty,
  toKuiTagName,
  addUserDefinedTypes,
  isUserDefinedType,
  isBooleanType,
  isNumberType,
  isStringType,
};
