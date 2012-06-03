/**
 * Define the store for the data for the Current user
 */
Ext.define('example8.store.Currentuser', {
	
	/** Extend the default data Store */
	extend: 'Ext.data.Store',

	/** Link to a model for structure */
	model: 'example8.model.User',

	/** Include some default data */
	data: [
		{name:'enygma', id:1}
	]

});