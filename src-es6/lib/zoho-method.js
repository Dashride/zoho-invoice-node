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
    let requestMethod = (spec.method || 'GET').toUpperCase();
    let commandPath = spec.path;
    let urlParams = spec.urlParams;
    let urlData = {};

    function zMethod() {
        let args = [].slice.call(arguments);
        let requestData = {};
        let requestOptions = {};
        let requestPath = '';

        // Parse the url path params.
        for (var i = 0; i < urlParams.length; i++) {
            let arg = args[0];
            let param = urlParams[i];

            if (!arg || typeof arg !== 'string') {
                throw new Error(`Argument ${param} is required.`);
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
    return _.isPlainObject(obj) && ['organization_id'].some((key) => obj.hasOwnProperty(key));
}

export { ZohoMethod };
