import { expect } from 'chai';
import { ZohoAPIError } from './zoho-api-error';

describe('zoho-api-error', function() {
    it('should create a zoho api error object', function() {
        var err = new ZohoAPIError({
            code: -1,
            message: 'testing error'
        });

        expect(err).to.be.instanceof(Error);
        expect(err.name).to.equal('ZohoAPIError');
        expect(err.code).to.equal(-1);
        expect(err.message).to.equal('testing error');
    });
});
