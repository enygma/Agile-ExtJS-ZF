/**
 * Define the Window container for the current message list
 *     and the form to add a new message
 */
Ext.define('example8.view.index.Chatwin', {
	
	/** Extend the default Panel */
	extend: 'Ext.panel.Panel',

	/** Give it an alias */
	alias: 'widget.chatwin',

	/** Give the window a title */
	title: 'Latest Chat Messages',

	/** Use the border (region) layout */
	layout: 'border',

	/** Items inside the panel */
	items: [
		{
			xtype: 'messagelist',
			region: 'center'
		},
		{
			xtype: 'chatinput',
			region: 'south'
		}
	]

});