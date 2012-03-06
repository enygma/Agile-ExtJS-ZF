Ext.define('example2.view.utility.Buttons',{
	
	extend: 'Ext.Panel',
	alias: 'widget.buttonspanel',

	layout: 'vbox',
	margin: 4,
	items: [
		{
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