import { expect } from 'chai';
import sinon from 'sinon';
import { Contacts } from './contacts';

describe('contacts', function() {
    let context = {
        API_PROTOCOL: 'https',
        API_HOST: 'api.test.com',
        API_PATH: '/api/v3',
        AUTH_TOKEN: '12345'
    };

    it('should create a new instance', function() {
        let contacts = new Contacts(context);

        expect(contacts.resourcePath).to.equal('contacts');
        expect(contacts).to.have.all.keys([
            '_zohoInvoice',
            'resourcePath',
            'create',
            'list',
            'retrieve',
            'update',
            'remove',
            'markAsActive',
            'markAsInactive',
            'enablePaymentReminders',
            'disablePaymentReminders',
            'emailStatement',
            'getStatementEmailContent',
            'emailContact',
            'listComments',
            'listRefunds',
            'contactpersons'
        ]);

        expect(contacts.contactpersons).to.have.all.keys([
            'list',
            'retrieve',
            'create',
            'update',
            'remove',
            'primary'
        ]);
    });

});
