Ext.define('example8.view.index.Userlist', {
	
	/** Extend the default grid */
	extend	: 'Ext.grid.Panel',

	/** Assign an alias to the widget */
	alias	: 'widget.userlistgrid',

	/** Give the grid a title */
	title	: 'Current Users',

	/** The store to pull data from */
	store	: 'Userlist',

	id: 'userlistgrid',

	hideHeaders: true,

	/** Initialize the grid */
	initComponent: function() {
		console.log('init sample grid');

		// column definition for the grid
		this.columns = [
			{header:'Username',dataIndex:'username',flex:1}
		];

		this.callParent(arguments);
	}

});