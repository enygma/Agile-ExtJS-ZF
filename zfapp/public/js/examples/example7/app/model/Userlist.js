/**
 * Define the Userlist model
 */
Ext.define('example7.model.Userlist', {
	
	/** Extend the default Model */
	extend: 'Ext.data.Model',

	/** Define the model's fields */
	fields: [
		{ 
			name:'username',
			type:'string',
		},
		{ 
			name: 'id', 
			type: 'int'
		}
	],

});