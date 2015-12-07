import { Invoices } from './lib/resources/invoices';

class ZohoInvoice {
    constructor(authtoken) {
        this.authtoken = authtoken;
        this.apiHost = 'https://invoice.zoho.com';
        this.basePath = '/api/v3';

        this.invoices = new Invoices(this);
    }

    get authToken() {
        return this.authToken;
    }
}

module.exports = ZohoInvoice;
