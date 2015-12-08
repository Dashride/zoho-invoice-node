import { ZohoMethod } from './zoho-method';

var ZohoBasicMethods = {};

ZohoBasicMethods.create = ZohoMethod({
    method: 'POST',
    urlParams: []
});

ZohoBasicMethods.update = ZohoMethod({
    method: 'PUT',
    path: ({ id } = {}) => `${id}`,
    urlParams: ['id']
});

ZohoBasicMethods.list = ZohoMethod({
    method: 'GET',
    urlParams: []
});

ZohoBasicMethods.retrieve = ZohoMethod({
    method: 'GET',
    path: ({ id } = {}) => `${id}`,
    urlParams: ['id']
});

ZohoBasicMethods.remove = ZohoMethod({
    method: 'DELETE',
    path: ({ id } = {}) => `${id}`,
    urlParams: ['id']
});

export { ZohoBasicMethods };
