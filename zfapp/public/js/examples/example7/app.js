Ext.application({
	name: 'example9',
	
	appFolder: '/js/examples/example9/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example9"');

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