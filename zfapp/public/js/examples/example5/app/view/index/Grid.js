Ext.define('example5.view.index.Grid', {
	
	extend: 'Ext.grid.Panel',
	alias: 'widget.usergrid',

	store: 'Usergrid',

	title: 'User List',

	initComponent: function() {
		console.log('launching grid');

		// column definition for the grid
		this.columns = [
			{header:'Name',dataIndex:'name',flex:1}
		];

		this.callParent(arguments);
	}

});