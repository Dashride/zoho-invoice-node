import { ZohoMethod } from './zoho-method';

class ZohoMethodBasic {}

ZohoMethodBasic.prototype.create = ZohoMethod({
    method: 'POST',
    urlParams: []
});

ZohoMethodBasic.prototype.update = ZohoMethod({
    method: 'POST',
    path: (id) => `${id}`,
    urlParams: ['id']
});

ZohoMethodBasic.prototype.list = ZohoMethod({
    method: 'GET',
    urlParams: []
});

ZohoMethodBasic.prototype.retrieve = ZohoMethod({
    method: 'GET',
    path: (id) => `${id}`,
    urlParams: ['id']
});

ZohoMethodBasic.prototype.remove = ZohoMethod({
    method: 'DELETE',
    path: (id) => `${id}`,
    urlParams: ['id']
});

export { ZohoMethodBasic };
