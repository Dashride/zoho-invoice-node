'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libResourcesInvoices = require('./lib/resources/invoices');

var ZohoInvoice = (function () {
    function ZohoInvoice(authtoken) {
        _classCallCheck(this, ZohoInvoice);

        this.authtoken = authtoken;
        this.apiHost = 'https://invoice.zoho.com';
        this.basePath = '/api/v3';

        this.invoices = new _libResourcesInvoices.Invoices(this);
    }

    _createClass(ZohoInvoice, [{
        key: 'authToken',
        get: function get() {
            return this.authToken;
        }
    }]);

    return ZohoInvoice;
})();

module.exports = ZohoInvoice;