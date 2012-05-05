Ext.application({
	name: 'example8',
	
	appFolder: '/js/examples/example8/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example8"');

		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                	xtype  : 'userwin'
                }
            ]
        });
	}

});