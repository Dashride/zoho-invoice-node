'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _zohoBasicMethods = require('./zoho-basic-methods');

var ZohoResource = (function () {
    function ZohoResource(zohoInvoice) {
        _classCallCheck(this, ZohoResource);

        this._zohoInvoice = zohoInvoice;
        this.resourcePath = '';
    }

    _createClass(ZohoResource, [{
        key: 'createFullPath',
        value: function createFullPath(commandPath, urlData) {
            var urlParts = [this._zohoInvoice.API_PATH, this.resourcePath];

            if (commandPath && typeof commandPath === 'function') {
                urlParts.push(commandPath(urlData));
            }

            return _path2['default'].join.apply(this, urlParts);
        }
    }, {
        key: 'createRequestURI',
        value: function createRequestURI(urlPath) {
            return this._zohoInvoice.API_PROTOCOL + '://' + _path2['default'].join(this._zohoInvoice.API_HOST, urlPath);
        }
    }, {
        key: '_includeBasicMethods',
        value: function _includeBasicMethods(methods) {
            var _this = this;

            if (methods.length) {
                // for loop and add basic methods
                methods.forEach(function (methodName) {
                    _this[methodName] = _zohoBasicMethods.ZohoBasicMethods[methodName];
                });
            }
        }
    }, {
        key: '_request',
        value: function _request(method, path, options, data) {
            var authToken = this._zohoInvoice.AUTH_TOKEN;
            var requestURI = this.createRequestURI(path);

            if (!authToken) {
                throw new Error('No auth token provided.');
            }

            var requestOptions = {
                method: method,
                qs: {
                    authtoken: authToken
                },
                form: {},
                uri: requestURI,
                json: true
            };

            _lodash2['default'].assign(requestOptions.qs, options);

            if (Object.keys(data).length) {
                requestOptions.form.JSONString = JSON.stringify(data);
            }

            return this._makeRequest(requestOptions);
        }
    }, {
        key: '_makeRequest',
        value: function _makeRequest(options) {
            return (0, _requestPromise2['default'])(options);
        }
    }]);

    return ZohoResource;
})();

exports.ZohoResource = ZohoResource;