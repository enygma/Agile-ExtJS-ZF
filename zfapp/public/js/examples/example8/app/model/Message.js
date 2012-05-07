Ext.define('example8.model.Message', {
	
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'message', type: 'string' },
		{ name: 'posted', type: 'string' },
		{ name: 'username', type: 'string' },
		{ name: 'ts', type: 'int' },
		{ name: 'id', type: 'int' }
	]

});