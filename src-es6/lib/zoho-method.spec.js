import { expect } from 'chai';
import sinon from 'sinon';
import { ZohoResource } from './zoho-resource';
import { ZohoMethod } from './zoho-method';

describe('zoho-method', function() {
    let context = {
        API_PROTOCOL: 'https',
        API_HOST: 'api.test.com',
        API_PATH: '/api/v3',
        AUTH_TOKEN: '12345'
    };

    it('should return a configured zoho method function', function() {
        let method = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}`,
            urlParams: ['id']
        });

        expect(method).to.be.a('function');
    });

    it('should send a request', function() {
        let zResource = new ZohoResource(context);
        zResource.resourcePath = 'testing';
        let spy = sinon.stub(zResource, '_request').returns(Promise.resolve('hi'));

        let zMethod = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/some/command`,
            urlParams: ['id']
        });

        let reqData = {
            param1: true,
            param2: true
        };

        zMethod.call(zResource, '12345', reqData, { organization_id: '12345' });

        var [method, path, options, data] = spy.args[0];

        expect(method).to.equal('POST');
        expect(path).to.equal('/api/v3/testing/12345/some/command');
        expect(options).to.deep.equal({organization_id: '12345'});
        expect(data).to.deep.equal(reqData);
    });

    it('should throw an error due to missing required url param', function() {
        let zResource = new ZohoResource(context);
        zResource.resourcePath = 'testing';

        let zMethod = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/some/command`,
            urlParams: ['id']
        });

        let reqData = {
            param1: true,
            param2: true
        };

        try {
            zMethod.call(zResource, reqData, { organization_id: '12345' });
        } catch (e) {
            expect(e.toString()).to.equal('Error: Argument id is required.');
        }
    });

});
