'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x15, _x16, _x17) { var _again = true; _function: while (_again) { var object = _x15, property = _x16, receiver = _x17; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x15 = parent; _x16 = property; _x17 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _zohoResource = require('../zoho-resource');

var _zohoMethod = require('../zoho-method');

var Contacts = (function (_ZohoResource) {
    _inherits(Contacts, _ZohoResource);

    function Contacts() {
        _classCallCheck(this, Contacts);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(Contacts.prototype), 'constructor', this).apply(this, args);
        this.resourcePath = 'contacts';
        this._includeBasicMethods(['create', 'list', 'retrieve', 'update', 'remove']);

        this.markAsActive = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref.id;
                return id + '/active';
            },
            urlParams: ['id']
        });

        this.markAsInactive = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref2.id;
                return id + '/inactive';
            },
            urlParams: ['id']
        });

        this.enablePaymentReminders = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref3.id;
                return id + '/paymentreminder/enable';
            },
            urlParams: ['id']
        });

        this.disablePaymentReminders = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref4.id;
                return id + '/paymentreminder/disable';
            },
            urlParams: ['id']
        });

        this.emailStatement = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref5 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref5.id;
                return id + '/statements/email';
            },
            urlParams: ['id']
        });

        this.getStatementEmailContent = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                var _ref6 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref6.id;
                return id + '/statements/email';
            },
            urlParams: ['id']
        });

        this.emailContact = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref7 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref7.id;
                return id + '/email';
            },
            urlParams: ['id']
        });

        this.listComments = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref8 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref8.id;
                return id + '/comments';
            },
            urlParams: ['id']
        });

        this.listRefunds = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref9 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref9.id;
                return id + '/refunds';
            },
            urlParams: ['id']
        });

        this.contactpersons = {};

        this.contactpersons.list = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                var _ref10 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var id = _ref10.id;
                return id + '/contactpersons';
            },
            urlParams: ['id']
        }, this);

        this.contactpersons.retrieve = (0, _zohoMethod.ZohoMethod)({
            method: 'GET',
            path: function path() {
                var _ref11 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var contact_id = _ref11.contact_id;
                var id = _ref11.id;
                return id + '/contactpersons/' + contact_id;
            },
            urlParams: ['id', 'contact_id']
        }, this);

        this.contactpersons.create = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                return 'contactpersons';
            },
            urlParams: []
        }, this);

        this.contactpersons.update = (0, _zohoMethod.ZohoMethod)({
            method: 'PUT',
            path: function path() {
                var _ref12 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var contact_id = _ref12.contact_id;
                return 'contactpersons/' + contact_id;
            },
            urlParams: ['contact_id']
        }, this);

        this.contactpersons.remove = (0, _zohoMethod.ZohoMethod)({
            method: 'DELETE',
            path: function path() {
                var _ref13 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var contact_id = _ref13.contact_id;
                return 'contactpersons/' + contact_id;
            },
            urlParams: ['contact_id']
        }, this);

        this.contactpersons.primary = (0, _zohoMethod.ZohoMethod)({
            method: 'POST',
            path: function path() {
                var _ref14 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                var contact_id = _ref14.contact_id;
                return 'contactpersons/' + contact_id + '/primary';
            },
            urlParams: ['contact_id']
        }, this);
    }

    return Contacts;
})(_zohoResource.ZohoResource);

exports.Contacts = Contacts;