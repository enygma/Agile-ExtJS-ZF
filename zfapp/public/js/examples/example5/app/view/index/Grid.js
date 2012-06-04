/**
 * Define the Grid view for the user list
 */
Ext.define('example5.view.index.Grid', {
	
	/** Extend the default Grid panel */
	extend: 'Ext.grid.Panel',

	/** Give it an alias and ID */
	alias: 'widget.usergrid',
	id: 'usergrid',

	/** Link it to a store */
	store: 'Usergrid',

	/** Give the grid a title */
	title: 'User List',

	/** Initialize the grid component */
	initComponent: function() {
		console.log('launching grid');

		/** Column definition for the grid */
		this.columns = [
			{header:'Name',dataIndex:'name',flex:1}
		];

		this.callParent(arguments);
	}

});