import { Contacts } from './lib/resources/contacts';
import { Invoices } from './lib/resources/invoices';
import { Organizations } from './lib/resources/organizations';
import { Settings } from './lib/resources/settings';

class ZohoInvoice {
    constructor(authtoken=null) {
        this.AUTH_TOKEN = authtoken;
        this.API_PROTOCOL = 'https';
        this.API_HOST = 'invoice.zoho.com';
        this.API_PATH = '/api/v3';

        this.invoices = new Invoices(this);
        this.contacts = new Contacts(this);
        this.organizations = new Organizations(this);
        this.settings = new Settings(this);
    }

    setAuthToken(token) {
        this.AUTH_TOKEN = token;
    }
}

module.exports = function(authtoken) {
    return new ZohoInvoice(authtoken);
};
