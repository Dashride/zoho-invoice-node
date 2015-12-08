'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _zohoMethod = require('./zoho-method');

var ZohoBasicMethods = {};

ZohoBasicMethods.create = (0, _zohoMethod.ZohoMethod)({
    method: 'POST',
    urlParams: []
});

ZohoBasicMethods.update = (0, _zohoMethod.ZohoMethod)({
    method: 'PUT',
    path: function path() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var id = _ref.id;
        return '' + id;
    },
    urlParams: ['id']
});

ZohoBasicMethods.list = (0, _zohoMethod.ZohoMethod)({
    method: 'GET',
    urlParams: []
});

ZohoBasicMethods.retrieve = (0, _zohoMethod.ZohoMethod)({
    method: 'GET',
    path: function path() {
        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var id = _ref2.id;
        return '' + id;
    },
    urlParams: ['id']
});

ZohoBasicMethods.remove = (0, _zohoMethod.ZohoMethod)({
    method: 'DELETE',
    path: function path() {
        var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var id = _ref3.id;
        return '' + id;
    },
    urlParams: ['id']
});

exports.ZohoBasicMethods = ZohoBasicMethods;