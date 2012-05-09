Ext.define('example8.store.Userlist', {
	
	extend: 'Ext.data.Store',
	model: 'example8.model.Userlist',

	proxy: {
		type: 'ajax',
		url: '/example/example8users/format/json',
		reader: {
			type: 'json',
			root: 'users'
		}
	},
	autoLoad: true,
	autoSync: true
});