Ext.define('example2.view.utility.Productgrid',{
	
	extend: 'Ext.grid.Panel',
	alias: 'widget.productgrid',

	title: 'Current Products',

	store: 'Products',

	initComponent: function() {
		console.log('launching grid');

		// hard-coded store!
		// this.store = {
		// 	fields	: ['item_name','item_type','amount'],
		// 	data 	: [
		// 		{item_name:'Buckyballs Magnetic Building Spheres',item_type:'Toy',amount:'$24.99 USD'}
		// 	]
		// },

		// column definition for the grid
		this.columns = [
			{header:'Item Name',dataIndex:'item_name',flex:1},
			{header:'Item Type',dataIndex:'item_type',flex:1},
			{header:'Amount',dataIndex:'amount',flex:1}
		];

		this.callParent(arguments);
	}

});