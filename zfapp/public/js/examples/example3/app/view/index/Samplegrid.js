/**
 * Define a sample grid view
 */
Ext.define('example3.view.index.Samplegrid', {
	
	/** Extend the default grid */
	extend	: 'Ext.grid.Panel',

	/** Assign an alias to the widget */
	alias	: 'widget.samplegrid',

	/** Give the grid a title */
	title	: 'Sample Grid',

	/** The store to pull data from */
	store	: 'Sample',

	/** Initialize the grid */
	initComponent: function() {
		console.log('init sample grid');

		// column definition for the grid
		this.columns = [
			{header:'Charater Name',dataIndex:'character_name',flex:1},
			{header:'Home Planet',dataIndex:'home_planet',flex:1},
			{header:'Favorite Drink',dataIndex:'favorite_drink',flex:1}
		];

		this.callParent(arguments);
	}

});