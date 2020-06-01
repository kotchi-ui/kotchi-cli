"use strict";

var _startCase = require("lodash/startCase");

var _kebabCase = require("lodash/kebabCase");
/**
 * Makes sure the text is correctly used by the cli by removing any kui(-) prefix
 * @param {String} str string to fix
 * @returns a string without kui(-) prefix
 */

function removeKUIPrefix(str) {
  var modifiedString;

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
  var str = removeKUIPrefix(name);
  return "KUI".concat(toComponentTitle(str));
}
/**
 * Generates the KUI attribute name
 * @param {String} name Attribute name
 * @returns kui attribute name
 */

function toKuiAttribute(name) {
  var str = removeKUIPrefix(name);
  return "kui-".concat(_kebabCase(str));
}
/**
 * Generates the KUI property name
 * @param {String} name Property name
 * @returns kui property name
 */

function toKuiProperty(name) {
  var str = removeKUIPrefix(name);
  return "kui".concat(_startCase(str).replace(/\s/, ""));
}
/**
 * Generates the KUI component tag name
 * @param {String} name Component name
 * @returns kui component tag name
 */

function toKuiTagName(name) {
  var str = removeKUIPrefix(name);
  return "kui-".concat(_kebabCase(str));
}

module.exports = {
  toComponentTitle: toComponentTitle,
  toKuiAttribute: toKuiAttribute,
  toKuiComponentClass: toKuiComponentClass,
  toKuiProperty: toKuiProperty,
  toKuiTagName: toKuiTagName,
};
