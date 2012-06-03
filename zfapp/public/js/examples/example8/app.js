/**
 * Define the main application index
 */
Ext.application({

    /** Name the example */
	name: 'example8',
	
    /** Set up the base folder for the app */
	appFolder: '/js/examples/example8/app',

    /** Autload these controllers */
	controllers: [
		'Index'
	],

    /** Launch the application and define the default Viewport */
	launch: function() {
		console.log('Launch application "example8"');

		Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                	xtype  : 'userlistgrid',
                	region : 'west',
                	width  : 150
                },
                {
                	xtype  : 'chatwin',
                	region : 'center'
                }
            ]
        });
	}

});