Ext.define('example2.view.utility.Win', {
	
	extend	: 'Ext.window.Window',
	alias	: 'widget.defaultwin',
	title	: 'Window of win!',
	layout	: 'fit',

	items: [
		{
			xtype: 'button',
			renderTo: Ext.getBody(),
			text: 'Action',
			handler: function() {
				console.log('button clicked');
			}
		}
	],

	initComponent: function(type) {
		console.log('init default window');
		console.log(type);
	}

});