/**
 * Define a simple user list
 */
Ext.define('example7.store.Userlist', {
	
	/** Extend the default Store */
	extend: 'Ext.data.Store',

	/** Link to the Userlist model */
	model: 'example7.model.Userlist',

	/** Set up the store's data source */
	proxy: {
		type: 'ajax',
		url: '/example/example8users/format/json',
		reader: {
			type: 'json',
			root: 'users'
		}
	},

	/** Autoload and autosync the store */
	autoLoad: true,
	autoSync: true
});