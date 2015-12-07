'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _zohoMethod = require('./zoho-method');

var ZohoMethodBasic = function ZohoMethodBasic() {
    _classCallCheck(this, ZohoMethodBasic);
};

ZohoMethodBasic.prototype.create = (0, _zohoMethod.ZohoMethod)({
    method: 'POST',
    urlParams: []
});

ZohoMethodBasic.prototype.update = (0, _zohoMethod.ZohoMethod)({
    method: 'POST',
    path: function path(id) {
        return '' + id;
    },
    urlParams: ['id']
});

ZohoMethodBasic.prototype.list = (0, _zohoMethod.ZohoMethod)({
    method: 'GET',
    urlParams: []
});

ZohoMethodBasic.prototype.retrieve = (0, _zohoMethod.ZohoMethod)({
    method: 'GET',
    path: function path(id) {
        return '' + id;
    },
    urlParams: ['id']
});

ZohoMethodBasic.prototype.remove = (0, _zohoMethod.ZohoMethod)({
    method: 'DELETE',
    path: function path(id) {
        return '' + id;
    },
    urlParams: ['id']
});

exports.ZohoMethodBasic = ZohoMethodBasic;