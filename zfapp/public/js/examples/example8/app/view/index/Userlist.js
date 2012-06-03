/**
 * Define a Grid for the current users list
 */
Ext.define('example8.view.index.Userlist', {
	
	/** Extend the default grid */
	extend	: 'Ext.grid.Panel',

	/** Assign an alias to the widget */
	alias	: 'widget.userlistgrid',

	/** Give the grid a title */
	title	: 'Current Users',

	/** The store to pull data from */
	store	: 'Userlist',

	/** Give the grid an ID */
	id: 'userlistgrid',

	/** Hide the column headers */
	hideHeaders: true,

	/** Initialize the grid */
	initComponent: function() {
		console.log('init sample grid');

		/** Column definition for the grid */
		this.columns = [
			{header:'Username',dataIndex:'username',flex:1}
		];

		this.callParent(arguments);
	}

});