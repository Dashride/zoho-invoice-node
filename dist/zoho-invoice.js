'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libResourcesContacts = require('./lib/resources/contacts');

var _libResourcesInvoices = require('./lib/resources/invoices');

var _libResourcesOrganizations = require('./lib/resources/organizations');

var _libResourcesSettings = require('./lib/resources/settings');

var ZohoInvoice = (function () {
    function ZohoInvoice() {
        var authtoken = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

        _classCallCheck(this, ZohoInvoice);

        this.AUTH_TOKEN = authtoken;
        this.API_PROTOCOL = 'https';
        this.API_HOST = 'invoice.zoho.com';
        this.API_PATH = '/api/v3';

        this.invoices = new _libResourcesInvoices.Invoices(this);
        this.contacts = new _libResourcesContacts.Contacts(this);
        this.organizations = new _libResourcesOrganizations.Organizations(this);
        this.settings = new _libResourcesSettings.Settings(this);
    }

    _createClass(ZohoInvoice, [{
        key: 'setAuthToken',
        value: function setAuthToken(token) {
            this.AUTH_TOKEN = token;
        }
    }]);

    return ZohoInvoice;
})();

module.exports = function (authtoken) {
    return new ZohoInvoice(authtoken);
};