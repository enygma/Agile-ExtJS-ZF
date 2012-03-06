Ext.define('example1.view.index.Utility', {
	
	extend: 'Ext.window.Window',
	alias: 'widget.utilitybar',

	layout: 'fit',

	items: [
		{
			xtype: 'button',
			renderTo: Ext.getBody(),
			text: 'Reopen',
			handler: function() {
				
				//check to see if our window exists
				var win = Ext.getCmp('defaultwin');
				if (win == undefined) {

					console.log('Clicked & not found - repopening!');
					Ext.create('example1.view.index.Index');
					
				}
			}
		}
	],

	initComponent: function() {
		console.log('loading button');

		this.callParent(arguments);
	}

});