/**
 * Define the structure for the Current Messages model
 */
Ext.define('example8.model.Message', {
	
	/** Extend the default Model */
	extend: 'Ext.data.Model',

	/** Define the model structure */
	fields: [
		{ name: 'message', type: 'string' },
		{ name: 'posted', type: 'string' },
		{ name: 'username', type: 'string' },
		{ name: 'ts', type: 'int' },
		{ name: 'id', type: 'int' },
		{ name: 'chatUser', type: 'int'}
	]

});