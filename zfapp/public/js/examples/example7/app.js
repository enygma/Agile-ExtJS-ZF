/**
 * Define our Application instance
 */
Ext.application({

	/** Name the application */
	name: 'example7',
	
	/** Give it a default folder */
	appFolder: '/js/examples/example7/app',

	/** Autoload these controllers */
	controllers: [
		'Index'
	],

	/** Launch the application */
	launch: function() {
		console.log('Launch application "example7"');

		Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    html: 'Testing is cool!'
                }
            ]
        });
	}

});