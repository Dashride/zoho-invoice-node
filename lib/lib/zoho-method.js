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
 */
function ZohoMethod(spec) {
    var requestMethod = (spec.method || 'GET').toUpperCase();
    var commandPath = spec.path;
    var urlParams = spec.urlParams;
    var urlData = {};

    // Assembles the request spec and returns a function to execute it
    // self._request fires the request
    return function () {
        var args = [].slice.call(arguments);
        var requestData = {};
        var requestOptions = {};
        var requestPath = '';

        for (var i = 0; i < urlParams.length; i++) {
            var arg = args[0];
            var param = urlParams[i];

            if (!arg) {
                throw new Error('Argument ' + param + ' is required.');
            }

            urlData[param] = args.shift();
        }

        if (args.length > 0) {
            if (_.isPlainObject(args[0]) && !isRequestOption(args[0])) {
                requestData = args.shift();
            }
        }

        if (args.length > 0) {
            if (_.isPlainObject(args[0]) && isRequestOption(args[0])) {
                requestOptions = args.shift();
            }
        }

        if (Object.keys(requestOptions) === 0) {
            throw new Error('No organization ID was provided');
        }

        requestPath = this.createFullPath(commandPath, urlData);

        // fire request.
        return this.request(requestMethod, requestPath, requestOptions, requestData);
    };
}

function isRequestOption(obj) {
    return _.isPlainObject(obj) && ['organization_id'].some(function (key) {
        return obj.hasOwnProperty(key);
    });
}

exports.ZohoMethod = ZohoMethod;