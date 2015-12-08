import { expect } from 'chai';
import sinon from 'sinon';
import { Settings } from './settings';

describe('settings', function() {
    let context = {
        API_PROTOCOL: 'https',
        API_HOST: 'api.test.com',
        API_PATH: '/api/v3',
        AUTH_TOKEN: '12345'
    };

    it('should create a new instance', function() {
        let settings = new Settings(context);

        expect(settings.resourcePath).to.equal('settings');
        expect(settings).to.have.all.keys([
            '_zohoInvoice',
            'resourcePath',
            'listPreferences',
            'updatePreferences',
            'createAUnit',
            'deleteAUnit',
            'getInvoiceSettings',
            'updateInvoiceSettings',
            'getInvoiceNotesAndTerms',
            'updateInvoiceNotesAndTerms'
        ]);
    });

});
