module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventDispatcher = /*#__PURE__*/function () {
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);
  }

  _createClass(EventDispatcher, [{
    key: "dispatch",

    /**
     * A static variable for storing events
     * It is shared across all components
     * Yet it is hidden from them
     * So this variable is private
     */

    /**
     * Dispatches the given function set to the __$.
     * @param {string} key The string representation of the components name
     * @param {Function[]} $functionSet A set of functions which is to be dispatched
     * @return {void}
     */
    value: function dispatch(key) {
      for (var _len = arguments.length, $functionSet = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        $functionSet[_key - 1] = arguments[_key];
      }

      if (!EventDispatcher.__$.set(key, EventDispatcher.__$.get(key) ? EventDispatcher.__$.get(key).concat($functionSet) : [].concat($functionSet))) throw new Error('Cannot add the new function set to the EventDispatcher.');
    }
    /**
     * Gets a function with the given key an index.
     * When failed returns a function which throws an error.
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be got
     * @return {Function} The function with the given index and key
     */

  }, {
    key: "getOne",
    value: function getOne(key) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (EventDispatcher.__$.has(key)) {
        return EventDispatcher.__$.get(key)[index];
      } else {
        return function () {
          throw new Error('Key has not been found');
        };
      }
    }
    /**
     * Gets the function set of the given key.
     * When failed returns a function which throws an error.
     * @param {string} key The string representation of the components name
     * @return {Function[] | Function} Function set for the given key
     */

  }, {
    key: "getAll",
    value: function getAll(key) {
      if (EventDispatcher.__$.has(key)) {
        return EventDispatcher.__$.get(key);
      } else {
        return function () {
          throw new Error('Key has not been found');
        };
      }
    }
    /**
     * Instead of getOne, runs the function with given key and index.
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be executed
     * @param {any[]} args The arguments to be injected in the target function as parameters
     * @return {void}
     */

  }, {
    key: "triggerOne",
    value: function triggerOne(key, index) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      return this.getOne(key, index).apply(void 0, args);
    }
    /**
     * Instead of getAll, runs the function set with given key.
     * @param {string} key The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {void}
     */

  }, {
    key: "triggerAll",
    value: function triggerAll(key, argsSet) {
      var functionSet = this.getAll(key);
      var returnValues = [];

      for (var i = 0; i < functionSet.length; ++i) {
        returnValues.push(functionSet[i].apply(functionSet, _toConsumableArray(argsSet[i])));
      }

      return returnValues;
    }
    /**
     * Clears the event map __$.
     * @return {void}
     */

  }, {
    key: "clear",
    value: function clear() {
      EventDispatcher.__$.clear();
    }
  }]);

  return EventDispatcher;
}();
/**
 * @brief Singleton object of EventDispatcher
 * @type {EventDispatcher}
 */


_defineProperty(EventDispatcher, "__$", new Map());

var eventEmitter = new EventDispatcher();
/* harmony default export */ __webpack_exports__["default"] = (eventEmitter);

/***/ })
/******/ ])["default"];