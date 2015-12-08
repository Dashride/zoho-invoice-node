import path from 'path';
import _ from 'lodash';
import request from 'request-promise';
import { ZohoAPIError } from './zoho-api-error';
import { ZohoBasicMethods } from './zoho-basic-methods';

class ZohoResource {

    constructor(zohoInvoice) {
        this._zohoInvoice = zohoInvoice;
        this.resourcePath = '';
    }

    createFullPath(commandPath, urlData) {
        let urlParts = [
            this._zohoInvoice.API_PATH,
            this.resourcePath
        ];

        if (commandPath && typeof commandPath === 'function') {
            urlParts.push(commandPath(urlData));
        }

        return path.join.apply(this, urlParts);
    }

    createRequestURI(urlPath) {
        return this._zohoInvoice.API_PROTOCOL + '://' + path.join(
            this._zohoInvoice.API_HOST,
            urlPath
        );
    }

    _includeBasicMethods(methods) {
        if (methods.length) {
            // for loop and add basic methods
            methods.forEach((methodName) => {
                this[methodName] = ZohoBasicMethods[methodName];
            });
        }
    }

    _request(method, path, options, data) {
        let authToken = this._zohoInvoice.AUTH_TOKEN;
        let requestURI = this.createRequestURI(path);

        if (!authToken) {
            throw new Error('No auth token provided.');
        }

        let requestOptions = {
            method: method,
            qs: {
                authtoken: authToken
            },
            form: {},
            uri: requestURI,
            json: true
        };

        _.assign(requestOptions.qs, options);

        if (Object.keys(data).length) {
            requestOptions.form.JSONString = JSON.stringify(data);
        }

        return this._makeRequest(requestOptions);
    }

    _makeRequest(options) {
        return request(options)
            .catch(this._handleAPIError);
    }

    _handleAPIError(err) {
        return Promise.reject(new ZohoAPIError(err.error));
    }

}

export { ZohoResource };
