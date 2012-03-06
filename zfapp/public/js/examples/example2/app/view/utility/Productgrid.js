/**
 * Define the default grid view to use in listing our products
 */
Ext.define('example2.view.utility.Productgrid',{
	
	/** Extend the default grid (panel) */
	extend: 'Ext.grid.Panel',

	/** Set an alias for the grid */
	alias: 'widget.productgrid',

	/** Define the grid title */
	title: 'Current Products',

	/** Assign a store to load into the grid */
	store: 'Products',

	/**
	 * Intiialize the view component
	 * Sets up the column definition of the grid
	 *
	 * @method
	 */
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