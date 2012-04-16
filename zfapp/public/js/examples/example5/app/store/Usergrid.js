Ext.define('example5.store.Usergrid', {
	
	extend: 'Ext.data.Store',

	model: 'example5.model.Users',

	autoLoad: true,
	autoSync: true,

	proxy : {
		type: 'ajax',
		// default URL
		//url : '/example/example5update/format/json',
		api: {
			read 	: '/example/example5/format/json',
			update	: '/example/example5update/format/json?method=update',
			create	: '/example/example5update/format/json?method=create',
			destroy	: '/example/example5update/format/json?method=delete',
		},
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success'
		}
	}

});