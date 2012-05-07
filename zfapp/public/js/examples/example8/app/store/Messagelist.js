Ext.define('example8.store.Messagelist', {
	
	extend: 'Ext.data.Store',
	model: 'example8.model.Message',

	proxy: {
		type: 'ajax',
		url: '/example/example8read/format/json',
		reader: {
			type: 'json',
			root: 'messages'
		}
	},
	autoLoad: true,
	autoSync: true

});