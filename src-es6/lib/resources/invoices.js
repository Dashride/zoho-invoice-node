import { ZohoResource } from '../zoho-resource';
import { ZohoMethod } from '../zoho-method';

class Invoices extends ZohoResource {

    constructor(...args) {
        super(...args);
        this.path = 'invoices';
        this.includeCRUD = ['create', 'list', 'retrieve', 'update', 'remove'];
    }

}

Invoices.prototype.markAsSent = ZohoMethod({
    method: 'POST',
    path: (id) => `${id}/status/sent`,
    urlParams: ['id']
});

export { Invoices };
