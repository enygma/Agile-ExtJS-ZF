Ext.application({
	name: 'example2',

	appFolder: '/js/examples/example2/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example2"');

		Ext.create('Ext.container.Viewport', {
            layout: 'border',
            renderTo: Ext.getBody(),
            items: [
                {
                    xtype: 'productgrid',
                    id: 'main-grid',
                    store: Ext.create('example2.store.Products', {

                        // some sample data to start with
                        data: [
                            {item_name:'Buckyballs Magnetic Building Spheres',item_type:'Toy',amount:'$24.99 USD'},
                            {item_name:'The Bag of Holding Messenger Bag',item_type:'Luggage',amount:'$49.99 USD'}
                        ]
                    }),
                    margin: 4,
                    region: 'center'
                },
                {
                    region: 'west',
                    xtype: 'buttonspanel'
                }
            ]
        });
	}

});