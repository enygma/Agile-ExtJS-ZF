/**
 * Define the store for the current message list
 */
Ext.define('example8.store.Messagelist', {
	
	/** Extend the default Store */
	extend: 'Ext.data.Store',

	/** Link to a model for structure */
	model: 'example8.model.Message',

	/** Set the store's data source */
	proxy: {
		type: 'ajax',
		url: '/example/example8read/format/json',
		reader: {
			type: 'json',
			root: 'messages'
		}
	},

	/** Set the store to autload and autosync */
	autoLoad: true,
	autoSync: true

});