Ext.define('example5.store.Usergrid', {
	
	extend: 'Ext.data.Store',

	model: 'example5.model.Users',

	autoLoad: true,

	proxy : {
		type: 'ajax',
		url: '/example/example5/format/json',
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success'
		}
	}

});