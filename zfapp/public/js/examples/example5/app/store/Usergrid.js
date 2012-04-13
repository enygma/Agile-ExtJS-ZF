Ext.define('example5.store.Usergrid', {
	
	extend: 'Ext.data.Store',

	model: 'example5.model.Users',

	autoLoad: true,
	autoSync: true,

	proxy : {
		type: 'ajax',
		url : '/example/example5update/format/json',
		api: {
			read 	: '/example/example5/format/json',
			// update	: '/example/example5update/format/json',
			// create	: '/example/example5update/format/json',
			// destroy	: '/example/example5update/format/json',
		},
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success'
		}
	}

});