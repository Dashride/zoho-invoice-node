import { ZohoResource } from '../zoho-resource';
import { ZohoMethod } from '../zoho-method';

class Organizations extends ZohoResource {

    constructor(...args) {
        super(...args);
        this.resourcePath = 'organizations';
        this._includeBasicMethods(['create', 'list', 'retrieve', 'update']);
    }

}

export { Organizations };
