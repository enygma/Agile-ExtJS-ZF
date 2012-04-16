Ext.application({
	name: 'example6',
	
	appFolder: '/js/examples/example6/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example6"');

		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                	xtype  : 'loginwin'
                }
            ]
        });
	}

});