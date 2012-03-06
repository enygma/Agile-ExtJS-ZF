/**
 * Define the view containing our sidebar set of buttons
 * to switch out which store should be used to populate the grid
 */
Ext.define('example2.view.utility.Buttons',{
	
	/** Extend the default panel (generic) */
	extend: 'Ext.Panel',

	/** Alias the view to "buttonspanel" */
	alias: 'widget.buttonspanel',

	/** Use the "vbox" layout & set margin to 4px */
	layout: 'vbox',
	margin: 4,

	/** Define the objects inside the Panel container */
	items: [
		{
			/** 
			 * Clicking on this button loads the hard-coded 
			 * values below
			 */
			xtype: 'button',
			text: 'Use hard-coded values',
			handler: function() {

				var grid = Ext.getCmp('main-grid');
				//console.log(grid);

				// change the grid's data
				grid.getStore().loadData([
                    {item_name:'Soft Kitty Pillow',item_type:'Toy',amount:'$29.99 USD'},
				 	{item_name:'Portal 2 Companion Cube Plush Keychain',item_type:'Toy',amount:'$12.99 USD'}
                ]);
			}
		},
		{
			/**
			 * Clicking on this button loads the data from a 
			 * local XML file, products.xml, and parses it via the XML reader
			 */
			xtype: 'button',
			text: 'Load from XML (file)',
			handler: function() {
				
				var grid = Ext.getCmp('main-grid');

				// change the grid's data
				var grid_store = grid.getStore();

				grid_store.setProxy({
					type: 'ajax',
					url: '/js/examples/example2/products.xml',
					reader: {
						type: 'xml',
						root: 'productData',
						record: 'product'
					},
					autoLoad: true
				});
				grid_store.load();
			}
		},
		{
			/**
			 * Clicking on this button loads the data from an
			 * ajax request back to the Zend Framework instance
			 */
			xtype: 'button',
			text: 'Load from ZF (JSON)',
			handler: function() {
				// from source: /example/example2/format/json

				console.log('load from Zend Framework json');

				var grid = Ext.getCmp('main-grid');

				// change the grid's data
				var grid_store = grid.getStore();

				grid_store.setProxy({
					type: 'ajax',
					url: '/example/example2/format/json',
					reader: {
						type: 'json',
						root: 'products'
					},
					autoLoad: true
				});
				grid_store.load();
			}
		}
	]

});