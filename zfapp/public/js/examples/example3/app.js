Ext.application({
	name: 'example3',

	appFolder: '/js/examples/example3/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example3"');

		Ext.create('Ext.container.Viewport', {
            layout: 'border',
            renderTo: Ext.getBody(),
            items: [
                {
                	region	: 'south',
                	xtype	: 'panel'
                },
                {
                	region	: 'center',
                	xtype	: 'panel'
                },
                {
                	region	: 'north',
                	xtype	: 'buttonpanel'
                }
            ]
        });
	}

});