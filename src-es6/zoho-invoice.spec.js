import { expect } from 'chai';
import ZohoInvoice from './zoho-invoice';

describe('zoho-invoice', function() {

    it('should create an instance', function() {
        let zohoInvoice = new ZohoInvoice();

        expect(zohoInvoice).to.have.all.keys([
            'AUTH_TOKEN',
            'API_PROTOCOL',
            'API_HOST',
            'API_PATH',
            'invoices',
            'contacts',
            'organizations',
            'settings'
        ]);
    });

    it('should set the authtoken via the constructor', function() {
        let zohoInvoice = new ZohoInvoice('123456');
        expect(zohoInvoice.AUTH_TOKEN).to.equal('123456');
    });

    it('should set the authtoken via the setAuthToken method', function() {
        let zohoInvoice = new ZohoInvoice();
        zohoInvoice.setAuthToken('123456');
        expect(zohoInvoice.AUTH_TOKEN).to.equal('123456');
    });

});
