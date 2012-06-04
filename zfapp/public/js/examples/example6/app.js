/**
 * Create the application instance
 */
Ext.application({
	/** Give the app a name */
	name: 'example6',
	
	/** Set the default root path */
	appFolder: '/js/examples/example6/app',

	/** Autoload these controllers */
	controllers: [
		'Index'
	],

	/** Launch the application */
	launch: function() {
		console.log('Launch application "example6"');

		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                	/** Reference to example6.view.index.Login view */
                	xtype  : 'loginwin'
                }
            ]
        });
	}

});