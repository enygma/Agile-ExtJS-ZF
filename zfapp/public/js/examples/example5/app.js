/**
 * Define default application
 */
Ext.application({

    /** Give the app a name */
	name: 'example5',
	
    /** Define the base folder */
	appFolder: '/js/examples/example5/app',

    /** Autoload these controllers */
	controllers: [
		'Index'
	],

    /** Launch the application */
	launch: function() {
		console.log('Launch application "example5"');

		Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    /** Reference to example5.view.index.Grid */
                	xtype : 'usergrid',
                	region: 'center'
                },
                {
                    /** Reference to example5.view.index.Helperbar */
                	xtype : 'helperbar',
                	region: 'north',
                	height: 30,
                	margin: 1
                }
            ]
        });
	}

});