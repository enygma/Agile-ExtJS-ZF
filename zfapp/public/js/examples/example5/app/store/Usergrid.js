/**
 * Define the store for the user list grid
 */
Ext.define('example5.store.Usergrid', {
	
	/** Extend the default Store */
	extend: 'Ext.data.Store',

	/** Link to a model for structure */
	model: 'example5.model.Users',

	/** Set store to autoload & autsync */
	autoLoad: true,
	autoSync: true,

	/** 
	 * Set up the store's data source
	 *     NOTE: The different URLs for CRUD
	 */
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