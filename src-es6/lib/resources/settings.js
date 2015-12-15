import { ZohoResource } from '../zoho-resource';
import { ZohoMethod } from '../zoho-method';

class Settings extends ZohoResource {

    constructor(...args) {
        super(...args);
        this.resourcePath = 'settings';

        this.listPreferences = ZohoMethod({
            method: 'GET',
            path: () => `preferences`,
            urlParams: []
        });

        this.updatePreferences = ZohoMethod({
            method: 'PUT',
            path: () => `preferences`,
            urlParams: []
        });

        this.createAUnit = ZohoMethod({
            method: 'POST',
            path: () => `units`,
            urlParams: []
        });

        this.deleteAUnit = ZohoMethod({
            method: 'DELETE',
            path: ({ unit_id } = {}) => `units/${unit_id}`,
            urlParams: ['unit_id']
        });

        this.getInvoiceSettings = ZohoMethod({
            method: 'GET',
            path: () => `invoices`,
            urlParams: []
        });

        this.updateInvoiceSettings = ZohoMethod({
            method: 'PUT',
            path: () => `invoices`,
            urlParams: []
        });

        this.getInvoiceNotesAndTerms = ZohoMethod({
            method: 'GET',
            path: () => `invoices/notesandterms`,
            urlParams: []
        });

        this.updateInvoiceNotesAndTerms = ZohoMethod({
            method: 'PUT',
            path: () => `invoices/notesandterms`,
            urlParams: []
        });

        this.listTemplates = ZohoMethod({
            method: 'GET',
            path: () => `templates`,
            urlParams: []
        });

    }

}

export { Settings };
