/**
 * Create the view for the "Helper bar" in the example
 */
Ext.define('example5.view.index.Helperbar', {
	
	/** Extend the default panel */
	extend: 'Ext.panel.Panel',

	/** Give it an alias */
	alias: 'widget.helperbar',

	/** Use the "hbox" horizontal layout */
	layout: 'hbox',

	/** Set some defaults for all child items */
	defaults: {
		margin: 2
	},

	/** Define the child items */
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