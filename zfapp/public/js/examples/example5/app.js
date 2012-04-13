Ext.application({
	name: 'example5',
	
	appFolder: '/js/examples/example5/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example5"');

		Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                	xtype : 'usergrid',
                	region: 'center'
                },
                {
                	xtype : 'helperbar',
                	region: 'south',
                	height: 40,
                	margin: 1
                }
            ]
        });
	}

});