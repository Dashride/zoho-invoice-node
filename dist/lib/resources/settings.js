'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _zohoResource = require('../zoho-resource');

var _zohoMethod = require('../zoho-method');

var Settings = (function (_ZohoResource) {
    _inherits(Settings, _ZohoResource);

    function Settings() {
        _classCallCheck(this, Settings);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(Settings.prototype), 'constructor', this).apply(this, args);
        this.resourcePath = 'settings';

        this.listPreferences = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                return 'preferences';
            },
            urlParams: []
        });

        this.updatePreferences = (0, _zohoMethod.ZohoMethod)({
            method: 'PUT',
            path: function path() {
                return 'preferences';
            },
            urlParams: []
        });

        this.createAUnit = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                return 'units';
            },
            urlParams: []
        });

        this.deleteAUnit = (0, _zohoMethod.ZohoMethod)({
            method: 'DELETE',
            path: function path() {
                var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var unit_id = _ref.unit_id;
                return 'units/' + unit_id;
            },
            urlParams: ['unit_id']
        });

        this.getInvoiceSettings = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                return 'invoices';
            },
            urlParams: []
        });

        this.updateInvoiceSettings = (0, _zohoMethod.ZohoMethod)({
            method: 'PUT',
            path: function path() {
                return 'invoices';
            },
            urlParams: []
        });

        this.getInvoiceNotesAndTerms = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                return 'invoices/notesandterms';
            },
            urlParams: []
        });

        this.updateInvoiceNotesAndTerms = (0, _zohoMethod.ZohoMethod)({
            method: 'PUT',
            path: function path() {
                return 'invoices/notesandterms';
            },
            urlParams: []
        });

        this.listTemplates = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                return 'templates';
            },
            urlParams: []
        });
    }

    return Settings;
})(_zohoResource.ZohoResource);

exports.Settings = Settings;