/**
 * Defaine the model for the data on the current user
 */
Ext.define('example8.model.User', {
	
	/** Extend the default data Model */
	extend: 'Ext.data.Model',

	/** Define the model's fields */
	fields: [
		{name:'name',type:'string'},
		{name:'id', type:'int'}
	]
});