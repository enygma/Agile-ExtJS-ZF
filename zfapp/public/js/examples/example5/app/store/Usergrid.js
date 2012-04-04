Ext.define('example5.store.Usergrid', {
	
	extend: 'Ext.data.Store',

	model: 'example5.model.Users',

	autoLoad: true,

	proxy : {
		type: 'ajax',
		api: {
			read 	: '/example/example5/format/json',
			update	: '/example/example5update/format/json'
		},
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success'
		}
	}

});