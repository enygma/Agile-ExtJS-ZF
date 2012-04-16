Ext.define('example5.view.index.Helperbar', {
	
	extend: 'Ext.panel.Panel',
	alias: 'widget.helperbar',
	layout: 'hbox',
	defaults: {
		margin: 2
	},

	items: [
		{
			xtype: 'button',
			text: 'Add User',
			handler: function() {
				console.log('add user!');
				Ext.create('example5.view.user.Add');
			}
		},
		{
			xtype: 'button',
			text: 'Remove selected',
			handler: function() {
				console.log('delete user!');
				Ext.create('example5.view.user.Delete');
			}
		}
	]
	
});