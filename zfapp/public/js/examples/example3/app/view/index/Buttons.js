/**
 * Define the "buttons" panel to activate the widget examples
 */
Ext.define('example3.view.index.Buttons', {
	
	/** Extend the default Ext Panel */
	extend	: 'Ext.Panel',

	/** Set up an alias to the widget & add some padding */
	alias	: 'widget.buttonpanel',
	margin	: 4,

	/** Add in our button elements */
	items	: [
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load Grid'
		},
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load Tabs'
		},
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load DnD'
		},
		{
			margin: 4,
			xtype	: 'button',
			text	: 'Load Tree'
		}
	]
});