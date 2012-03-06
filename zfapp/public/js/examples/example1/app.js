Ext.application({
	name: 'example1',

	appFolder: '/js/examples/example1/app',

	controllers: [
		'Index'
	],

	launch: function() {
		console.log('Launch application "example1"');

		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
            	{
                	xtype: 'defaultwin'
                },
                {
                	xtype: 'utilitybar'
                }
            ]
        });
	}

});