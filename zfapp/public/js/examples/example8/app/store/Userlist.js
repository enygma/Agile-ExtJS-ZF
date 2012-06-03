/**
 * Define a store for the current Users list
 */
Ext.define('example8.store.Userlist', {
	
	/** Extend the default Store */
	extend: 'Ext.data.Store',

	/** Link to a model for structure */
	model: 'example8.model.Userlist',

	/** Define the store's source */
	proxy: {
		type: 'ajax',
		url: '/example/example8users/format/json',
		reader: {
			type: 'json',
			root: 'users'
		}
	},

	/** Set the store to autoload and autosync */
	autoLoad: true,
	autoSync: true
});