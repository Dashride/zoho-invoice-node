'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
        this.path = 'invoices';
        this.includeCRUD = ['create', 'list', 'retrieve', 'update', 'remove'];
    }

    return Invoices;
})(_zohoResource.ZohoResource);

Invoices.prototype.markAsSent = (0, _zohoMethod.ZohoMethod)({
    method: 'POST',
    path: function path(id) {
        return id + '/status/sent';
    },
    urlParams: ['id']
});

exports.Invoices = Invoices;