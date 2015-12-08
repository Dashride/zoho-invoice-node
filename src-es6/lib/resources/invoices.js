import { ZohoResource } from '../zoho-resource';
import { ZohoMethod } from '../zoho-method';

class Invoices extends ZohoResource {

    constructor(...args) {
        super(...args);
        this.resourcePath = 'invoices';
        this._includeBasicMethods(['create', 'list', 'retrieve', 'update', 'remove']);

        this.markAsSent = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/status/sent`,
            urlParams: ['id']
        });

        this.markAsVoid = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/status/void`,
            urlParams: ['id']
        });

        this.markAsDraft = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/status/draft`,
            urlParams: ['id']
        });

        this.sendEmail = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/email`,
            urlParams: ['id']
        });

        this.getEmailContent = ZohoMethod({
            method: 'GET',
            path: ({ id } = {}) => `${id}/email`,
            urlParams: ['id']
        });

        this.writeOffInvoice = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/writeoff`,
            urlParams: ['id']
        });

        this.cancelWriteOff = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/writeoff/cancel`,
            urlParams: ['id']
        });

        this.updateBillingAddress = ZohoMethod({
            method: 'PUT',
            path: ({ id } = {}) => `${id}/address/billing`,
            urlParams: ['id']
        });

        this.updateShippingAddress = ZohoMethod({
            method: 'PUT',
            path: ({ id } = {}) => `${id}/address/shipping`,
            urlParams: ['id']
        });

        this.listInvoiceTemplates = ZohoMethod({
            method: 'GET',
            path: () => `templates`,
            urlParams: []
        });

        this.updateInvoiceTemplate = ZohoMethod({
            method: 'PUT',
            path: ({ id, template_id } = {}) => `${id}/templates/${template_id}`,
            urlParams: ['id', 'template_id']
        });
    }

}

export { Invoices };
