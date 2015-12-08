import { ZohoResource } from '../zoho-resource';
import { ZohoMethod } from '../zoho-method';

class Contacts extends ZohoResource {

    constructor(...args) {
        super(...args);
        this.resourcePath = 'contacts';
        this._includeBasicMethods(['create', 'list', 'retrieve', 'update', 'remove']);

        this.markAsActive = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/active`,
            urlParams: ['id']
        });

        this.markAsInactive = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/inactive`,
            urlParams: ['id']
        });

        this.enablePaymentReminders = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/paymentreminder/enable`,
            urlParams: ['id']
        });

        this.disablePaymentReminders = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/paymentreminder/disable`,
            urlParams: ['id']
        });

        this.emailStatement = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/statements/email`,
            urlParams: ['id']
        });

        this.getStatementEmailContent = ZohoMethod({
            method: 'GET',
            path: ({ id } = {}) => `${id}/statements/email`,
            urlParams: ['id']
        });

        this.emailContact = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/email`,
            urlParams: ['id']
        });

        this.listComments = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/comments`,
            urlParams: ['id']
        });

        this.listRefunds = ZohoMethod({
            method: 'POST',
            path: ({ id } = {}) => `${id}/refunds`,
            urlParams: ['id']
        });

        this.contactpersons = {};

        this.contactpersons.list = ZohoMethod({
            method: 'GET',
            path: ({ id } = {}) => `${id}/contactpersons`,
            urlParams: ['id']
        }, this);

        this.contactpersons.retrieve = ZohoMethod({
            method: 'GET',
            path: ({ contact_id, id } = {}) => `${id}/contactpersons/${contact_id}`,
            urlParams: ['id', 'contact_id']
        }, this);

        this.contactpersons.create = ZohoMethod({
            method: 'POST',
            path: () => `contactpersons`,
            urlParams: []
        }, this);

        this.contactpersons.update = ZohoMethod({
            method: 'PUT',
            path: ({ contact_id } = {}) => `contactpersons/${contact_id}`,
            urlParams: ['contact_id']
        }, this);

        this.contactpersons.remove = ZohoMethod({
            method: 'DELETE',
            path: ({ contact_id } = {}) => `contactpersons/${contact_id}`,
            urlParams: ['contact_id']
        }, this);

        this.contactpersons.primary = ZohoMethod({
            method: 'POST',
            path: ({ contact_id } = {}) => `contactpersons/${contact_id}/primary`,
            urlParams: ['contact_id']
        }, this);
    }

}

export { Contacts };
