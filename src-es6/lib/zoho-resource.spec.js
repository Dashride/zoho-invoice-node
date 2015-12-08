import { expect } from 'chai';
import sinon from 'sinon';
import _ from 'lodash';
import { ZohoResource } from './zoho-resource';
import { ZohoAPIError } from './zoho-api-error';

describe('zoho-resource', function() {
    let context = {
        API_PROTOCOL: 'https',
        API_HOST: 'api.test.com',
        API_PATH: '/api/v3',
        AUTH_TOKEN: '12345'
    };

    it('should form a full path', function() {
        let zResource = new ZohoResource(context);
        let commandPath = ({ id } = {}) => `${id}/some/path`;

        zResource.resourcePath = 'invoices';

        expect(zResource.createFullPath(commandPath, {
            id: '12345'
        }))
        .to.equal('/api/v3/invoices/12345/some/path');
    });

    it('should form a full path without a command path provided', function() {
        let zResource = new ZohoResource(context);
        zResource.resourcePath = 'invoices';

        expect(zResource.createFullPath(undefined, {}))
        .to.equal('/api/v3/invoices');
    });

    it('should form a full API URI', function() {
        let zResource = new ZohoResource(context);
        let commandPath = ({ id } = {}) => `${id}/some/path`;

        zResource.resourcePath = 'invoices';

        let path = zResource.createFullPath(commandPath, {
            id: '12345'
        });

        expect(zResource.createRequestURI(path))
        .to.equal('https://api.test.com/api/v3/invoices/12345/some/path');
    });

    it('should include specified basic methods', function() {
        let zResource = new ZohoResource(context);
        let methods = ['create', 'list', 'retrieve', 'update', 'remove'];
        zResource._includeBasicMethods(methods);

        expect(zResource).to.contain.keys(methods);
    });

    it('should throw an error when the authtoken is not present', function() {
        let contextNoToken = _.pick(context, ['API_HOST', 'API_PROTOCOL', 'API_PATH']);
        let zResource = new ZohoResource(contextNoToken);
        let spy = sinon.stub(zResource, '_makeRequest').returns(Promise.resolve('hi'));
        zResource.resourcePath = 'testing';

        let reqData = {
            customer_name: 'testing',
            param2: true,
            tester: 123
        };

        try {
            zResource._request('POST', '/api/v3/testing/12345', { organization_id: '12345' }, reqData);
        } catch (e) {
            expect(e.toString()).to.equal('Error: No auth token provided.');
        }
    });

    it('should fire a request', function() {
        let zResource = new ZohoResource(context);
        let spy = sinon.stub(zResource, '_makeRequest').returns(Promise.resolve('hi'));
        zResource.resourcePath = 'testing';

        let reqData = {
            customer_name: 'testing',
            param2: true,
            tester: 123
        };

        zResource._request('POST', '/api/v3/testing/12345', { organization_id: '12345' }, reqData);

        var [requestOptions] = spy.args[0];

        expect(requestOptions.form.JSONString).to.be.a('string');
        expect(requestOptions.uri).to.equal('https://api.test.com/api/v3/testing/12345');
        expect(requestOptions.qs.authtoken).to.equal('12345');
        expect(requestOptions.qs.organization_id).to.equal('12345');
    });

    it('should make a request', function() {
        let zResource = new ZohoResource(context);
        let spy = sinon.spy(zResource, '_makeRequest');

        let options = {
            method: 'GET',
            uri: 'https://dashride.com'
        };

        zResource._makeRequest(options);

        expect(spy.called).to.be.true;
    });

});
