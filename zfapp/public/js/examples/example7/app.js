Ext.application({
	name: 'example7',
	
	appFolder: '/js/examples/example7/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example7"');

		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                //nothing yet...
            ]
        });
	}

});