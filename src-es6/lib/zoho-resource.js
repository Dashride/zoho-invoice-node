import path from 'path';
import request from 'request-promise';
import { ZohoBasicMethods } from './zoho-method-basic';

class ZohoResource {

    constructor(zohoInvoice) {
        this._zohoInvoice = zohoInvoice;
        this.basePath = '';
        this.path = '';

        if (this.includeCRUD) {
            // for loop and add basic methods
            this.includeCRUD.forEach(function(methodName) {
                this[methodName] = ZohoBasicMethods[methodName];
            });
        }
    }

    createFullPath(commandPath, urlData) {
        return path.join(
            this._zohoInvoice.basePath,
            this.path,
            commandPath
        );
    }

    createRequestURI(path) {
        return path.join(
            this._zohoInvoice.apiHost,
            path
        );
    }

    _request(method, path, options, data) {
        let authToken = this.authtoken;
        let requestURI = this.createRequestURI(path);

        let requestOptions = {
            method: method,
            qs: {
                authtoken: authToken
            },
            form: {},
            uri: requestURI,
            json: true
        };

        Object.assign(requestOptions.qs, options);

        if (Object.keys(data).length) {
            options.form.JSONString = JSON.stringify(data);
        }

        return request(requestOptions);
    }

}

export { ZohoResource };
