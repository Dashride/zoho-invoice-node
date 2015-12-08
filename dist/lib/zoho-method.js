'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _ = require('lodash');
/**
 * [ZohoMethod description]
 * @param {object} spec
 * @param {string} spec.method
 * @param {function} spec.path
 * @param {string[]} spec.required
 * @param {object} [context] - Optional context binding
 */
function ZohoMethod(spec, context) {
    var requestMethod = (spec.method || 'GET').toUpperCase();
    var commandPath = spec.path;
    var urlParams = spec.urlParams;
    var urlData = {};

    function zMethod() {
        var args = [].slice.call(arguments);
        var requestData = {};
        var requestOptions = {};
        var requestPath = '';

        // Parse the url path params.
        for (var i = 0; i < urlParams.length; i++) {
            var arg = args[0];
            var param = urlParams[i];

            if (!arg || typeof arg !== 'string') {
                throw new Error('Argument ' + param + ' is required.');
            }

            urlData[param] = args.shift();
        }

        // Parse out the request data, if any
        if (args.length > 0) {
            if (_.isPlainObject(args[0]) && !isRequestOption(args[0])) {
                requestData = args.shift();
            }
        }

        // Parse any request options, pagination, etc.
        if (args.length > 0) {
            if (_.isPlainObject(args[0]) && isRequestOption(args[0])) {
                requestOptions = args.shift();
            }
        }

        // Create the full request path.
        requestPath = this.createFullPath(commandPath, urlData);

        return this._request(requestMethod, requestPath, requestOptions, requestData);
    }

    // Bind to the provided context
    if (context) {
        return zMethod.bind(context);
    } else {
        return zMethod;
    }
}

function isRequestOption(obj) {
    return _.isPlainObject(obj) && ['organization_id'].some(function (key) {
        return obj.hasOwnProperty(key);
    });
}

exports.ZohoMethod = ZohoMethod;