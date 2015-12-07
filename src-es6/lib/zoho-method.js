var _ = require('lodash');
/**
 * [ZohoMethod description]
 * @param {object} spec
 * @param {string} spec.method
 * @param {function} spec.path
 * @param {string[]} spec.required
 */
function ZohoMethod(spec) {
    let requestMethod = (spec.method || 'GET').toUpperCase();
    let commandPath = spec.path;
    let urlParams = spec.urlParams;
    let urlData = {};

    // Assembles the request spec and returns a function to execute it
    // self._request fires the request
    return function() {
        let args = [].slice.call(arguments);
        let requestData = {};
        let requestOptions = {};
        let requestPath = '';

        for (var i = 0; i < urlParams.length; i++) {
            let arg = args[0];
            let param = urlParams[i];

            if (!arg) {
                throw new Error(`Argument ${param} is required.`);
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
    return _.isPlainObject(obj) && ['organization_id'].some((key) => obj.hasOwnProperty(key));
}

export { ZohoMethod };
