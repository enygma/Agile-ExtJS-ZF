Ext.define('example3.view.index.Samplegrid', {
	
	extend	: 'Ext.grid.Panel',

	alias	: 'widget.samplegrid',

	title	: 'Sample Grid',

	store	: 'Sample',

	//renderTo: Ext.get('content_area'),

	initComponent: function() {
		// init
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