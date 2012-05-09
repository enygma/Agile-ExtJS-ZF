Ext.define('example8.view.index.Chatinput',{
	
	extend: 'Ext.panel.Panel',
	alias: 'widget.chatinput',
	border: false,
	height: 30,
	id: 'chatpanel',

	initComponent: function() {
		this.currentUser = this.getCurrentUser();

		this.items = [
			{
				xtype: 'form',
				id: 'chatForm',
				url: '/example/example8submit/format/json',
				layout: 'column',
				border: false,
				bodyStyle: 'padding: 3px',
				items: [
					{
						html: this.renderUserLink(this.currentUser),
						border: false,
						bodyStyle: 'padding:4px',
						id: 'postingastxt'
					},
					{
						xtype: 'hiddenfield',
						name: 'chatUser',
						id: 'chatUser',
						required: true,
						value: indexController.currentUser.id
					},
					{
						xtype: 'textfield',
						name: 'chatMessage',
						id: 'chatMessage',
						columnWidth: .90,
						required: true
					}
				]
			}
		];

		this.callParent(arguments);
	},

	getCurrentUser: function() {
		//var user = indexController.getStore('Currentuser').getAt(0).data.name;
		console.log(indexController.currentUser);

		var user = indexController.currentUser.name;
		return user;
	},

	renderUserLink: function(username) {
		var link = 'posting as: <a href="#" onClick="indexController.loadUserWin()">'
			+'<b>'+username+'</b></a>';
		return link;
	}

});
