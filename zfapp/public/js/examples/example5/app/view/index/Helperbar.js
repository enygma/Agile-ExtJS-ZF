Ext.define('example5.view.index.Helperbar', {
	
	extend: 'Ext.panel.Panel',
	alias: 'widget.helperbar',
	layout: 'vbox',

	items: [
		{
			xtype: 'button',
			text: 'Add User',
			handler: function() {
				console.log('add user!');

				Ext.create('example5.view.user.Add');
			}
		}
	],

	initComponent: function() {



		this.callParent(arguments);
	}

});