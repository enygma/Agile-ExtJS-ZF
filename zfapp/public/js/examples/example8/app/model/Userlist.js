/**
 * Defaine the model structure for the current user list
 */
Ext.define('example8.model.Userlist', {
	
	/** Extend the default Model */
	extend: 'Ext.data.Model',
	fields: [
		{
			/** Username value */
			name:'username',
			type:'string',
		},
		{ 
			/** ID value */
			name: 'id', 
			type: 'int'
		}
	],

});