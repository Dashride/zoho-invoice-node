'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x11, _x12, _x13) { var _again = true; _function: while (_again) { var object = _x11, property = _x12, receiver = _x13; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x11 = parent; _x12 = property; _x13 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _zohoResource = require('../zoho-resource');

var _zohoMethod = require('../zoho-method');

var Invoices = (function (_ZohoResource) {
    _inherits(Invoices, _ZohoResource);

    function Invoices() {
        _classCallCheck(this, Invoices);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(Invoices.prototype), 'constructor', this).apply(this, args);
        this.resourcePath = 'invoices';
        this._includeBasicMethods(['create', 'list', 'retrieve', 'update', 'remove']);

        this.markAsSent = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref.id;
                return id + '/status/sent';
            },
            urlParams: ['id']
        });

        this.markAsVoid = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref2.id;
                return id + '/status/void';
            },
            urlParams: ['id']
        });

        this.markAsDraft = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref3.id;
                return id + '/status/draft';
            },
            urlParams: ['id']
        });

        this.sendEmail = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref4.id;
                return id + '/email';
            },
            urlParams: ['id']
        });

        this.getEmailContent = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                var _ref5 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref5.id;
                return id + '/email';
            },
            urlParams: ['id']
        });

        this.writeOffInvoice = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref6 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref6.id;
                return id + '/writeoff';
            },
            urlParams: ['id']
        });

        this.cancelWriteOff = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref7 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref7.id;
                return id + '/writeoff/cancel';
            },
            urlParams: ['id']
        });

        this.updateBillingAddress = (0, _zohoMethod.ZohoMethod)({
            method: 'PUT',
            path: function path() {
                var _ref8 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref8.id;
                return id + '/address/billing';
            },
            urlParams: ['id']
        });

        this.updateShippingAddress = (0, _zohoMethod.ZohoMethod)({
            method: 'PUT',
            path: function path() {
                var _ref9 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref9.id;
                return id + '/address/shipping';
            },
            urlParams: ['id']
        });

        this.listInvoiceTemplates = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                return 'templates';
            },
            urlParams: []
        });

        this.updateInvoiceTemplate = (0, _zohoMethod.ZohoMethod)({
            method: 'PUT',
            path: function path() {
                var _ref10 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref10.id;
                var template_id = _ref10.template_id;
                return id + '/templates/' + template_id;
            },
            urlParams: ['id', 'template_id']
        });
    }

    return Invoices;
})(_zohoResource.ZohoResource);

exports.Invoices = Invoices;