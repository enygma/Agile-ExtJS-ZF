Ext.define('example8.view.index.Chatinput',{
	
	extend: 'Ext.panel.Panel',
	alias: 'widget.chatinput',
	border: false,
	height: 30,
	items: [
		{
			xtype: 'form',
			id: 'chatForm',
			url: '/example/example8submit/format/json',
			layout: 'column',
			border: false,
			bodyStyle: 'padding: 3px',
			items: [
				{
					xtype: 'textfield',
					name: 'chatMessage',
					id: 'chatMessage',
					columnWidth: .90,
					required: true
				},
				{
					xtype: 'button',
					text: 'Send'
				}
			]
		}
	]
});
