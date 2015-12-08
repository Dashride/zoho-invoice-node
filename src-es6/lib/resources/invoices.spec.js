import { expect } from 'chai';
import sinon from 'sinon';
import { Invoices } from './invoices';

describe('invoices', function() {
    let context = {
        API_PROTOCOL: 'https',
        API_HOST: 'api.test.com',
        API_PATH: '/api/v3',
        AUTH_TOKEN: '12345'
    };

    it('should create a new instance', function() {
        let invoices = new Invoices(context);

        expect(invoices.resourcePath).to.equal('invoices');
        expect(invoices).to.have.all.keys([
            '_zohoInvoice',
            'resourcePath',
            'create',
            'list',
            'retrieve',
            'update',
            'remove',
            'markAsSent',
            'markAsDraft',
            'markAsVoid',
            'getEmailContent',
            'listInvoiceTemplates',
            'sendEmail',
            'updateBillingAddress',
            'updateShippingAddress',
            'updateInvoiceTemplate',
            'writeOffInvoice',
            'cancelWriteOff'
        ]);
    });

});
