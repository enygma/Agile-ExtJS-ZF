/**
 * Define the Panel that contains the form field and button
 *     for entering new chat messages
 */
Ext.define('example8.view.index.Chatinput',{
	
	/** Extend the default Panel */
	extend: 'Ext.panel.Panel',

	/** Give the panel an alias */
	alias: 'widget.chatinput',

	/** Turn off the panel's border */
	border: false,

	/** Give the panel a height and ID */
	height: 30,
	id: 'chatpanel',

	/** Initialize the component, creating the chat form */
	initComponent: function() {

		/** Get the current user */
		this.currentUser = this.getCurrentUser();

		/** Define the panel's items (form) */
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
						/** Display a link for the current username */
						html: this.renderUserLink(this.currentUser),
						border: false,
						bodyStyle: 'padding:4px',
						id: 'postingastxt'
					},
					{
						/** Hidden field to contain the chat user's ID */
						xtype: 'hiddenfield',
						name: 'chatUser',
						id: 'chatUser',
						required: true,
						value: indexController.currentUser.id
					},
					{
						/** Define the textfield for the message */
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

	/**
	 * Get the current user from the Index controller
	 */
	getCurrentUser: function() {
		var user = indexController.currentUser.name;
		return user;
	},

	/** Renderer for the username link */
	renderUserLink: function(username) {
		var link = 'posting as: <a href="#" onClick="indexController.loadUserWin()">'
			+'<b>'+username+'</b></a>';
		return link;
	}

});
