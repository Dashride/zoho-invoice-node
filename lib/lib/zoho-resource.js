'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _zohoMethodBasic = require('./zoho-method-basic');

var ZohoResource = (function () {
    function ZohoResource(zohoInvoice) {
        _classCallCheck(this, ZohoResource);

        this._zohoInvoice = zohoInvoice;
        this.basePath = '';
        this.path = '';

        if (this.includeCRUD) {
            // for loop and add basic methods
            this.includeCRUD.forEach(function (methodName) {
                this[methodName] = _zohoMethodBasic.ZohoBasicMethods[methodName];
            });
        }
    }

    _createClass(ZohoResource, [{
        key: 'createFullPath',
        value: function createFullPath(commandPath, urlData) {
            return _path2['default'].join(this._zohoInvoice.basePath, this.path, commandPath);
        }
    }, {
        key: 'createRequestURI',
        value: function createRequestURI(path) {
            return path.join(this._zohoInvoice.apiHost, path);
        }
    }, {
        key: '_request',
        value: function _request(method, path, options, data) {
            var authToken = this.authtoken;
            var requestURI = this.createRequestURI(path);

            var requestOptions = {
                method: method,
                qs: {
                    authtoken: authToken
                },
                form: {},
                uri: requestURI,
                json: true
            };

            Object.assign(requestOptions.qs, options);

            if (Object.keys(data).length) {
                options.form.JSONString = JSON.stringify(data);
            }

            return (0, _requestPromise2['default'])(requestOptions);
        }
    }]);

    return ZohoResource;
})();

exports.ZohoResource = ZohoResource;