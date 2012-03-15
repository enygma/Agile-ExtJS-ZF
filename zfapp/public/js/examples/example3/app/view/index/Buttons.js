/**
 * Define the "buttons" panel to activate the widget examples
 */
Ext.define('example3.view.index.Buttons', {
	
	/** Extend the default Ext Panel */
	extend	: 'Ext.Panel',

	/** Set up an alias to the widget & add some padding */
	alias	: 'widget.buttonpanel',
	margin	: 4,

	clearPanel: function() {
		var f;
		var panel = Ext.getCmp('content_area');

		while(f = panel.items.first()){
			panel.remove(f, true);
		}
	},

	/** Add in our button elements */
	items	: [
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load Grid',
			handler: function() {
				console.log('load Sample grid');

				//clear out the panel...
				while(f = Ext.getCmp('content_area').items.first()){
					Ext.getCmp('content_area').remove(f, true);
				}

				var grid = Ext.create('example3.view.index.Samplegrid');
				Ext.getCmp('content_area').add(grid);
			}
		},
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load Tabs',
			handler: function() {
				console.log('load tabs');

				//clear out the panel...
				while(f = Ext.getCmp('content_area').items.first()){
					Ext.getCmp('content_area').remove(f, true);
				}

				var grid = Ext.create('example3.view.index.Sampletabs');
				Ext.getCmp('content_area').add(grid);
			}
		},
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load Drag & Drop',
			handler: function() {
				console.log('load DnD');

				//clear out the panel...
				while(f = Ext.getCmp('content_area').items.first()){
					Ext.getCmp('content_area').remove(f, true);
				}
			}
		},
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load Tree',
			handler: function() {
				console.log('load tree');

				//clear out the panel...
				while(f = Ext.getCmp('content_area').items.first()){
					Ext.getCmp('content_area').remove(f, true);
				}
			}
		}
	]
});