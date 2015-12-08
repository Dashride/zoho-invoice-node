import { expect } from 'chai';
import sinon from 'sinon';
import { Organizations } from './organizations';

describe('organizations', function() {
    let context = {
        API_PROTOCOL: 'https',
        API_HOST: 'api.test.com',
        API_PATH: '/api/v3',
        AUTH_TOKEN: '12345'
    };

    it('should create a new instance', function() {
        let organizations = new Organizations(context);

        expect(organizations.resourcePath).to.equal('organizations');
        expect(organizations).to.have.all.keys([
            '_zohoInvoice',
            'resourcePath',
            'create',
            'list',
            'retrieve',
            'update',
        ]);
    });

});
