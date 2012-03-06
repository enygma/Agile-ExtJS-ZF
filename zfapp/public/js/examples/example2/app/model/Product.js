/**
 * Define the example2 Product model
 */
Ext.define('example2.model.Product', {
	
	/** Extend the default Ext model */
	extend: 'Ext.data.Model',

	/** Define the Product's fields */
	fields: ['item_name','item_type','amount']

});