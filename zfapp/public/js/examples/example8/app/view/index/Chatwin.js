Ext.define('example8.view.index.Chatwin', {
	
	extend: 'Ext.panel.Panel',
	alias: 'widget.chatwin',
	title: 'Latest Chat Messages',
	layout: 'border',
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