Ext.define('example9.store.Userlist', {
	
	extend: 'Ext.data.Store',
	model: 'example9.model.Userlist',

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