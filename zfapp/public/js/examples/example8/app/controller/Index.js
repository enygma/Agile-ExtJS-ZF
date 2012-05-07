Ext.define('example8.controller.Index', {
	
	extend: 'Ext.app.Controller',

	models: [
		'User',
		'Userlist',
		'Message'
	],
	views: [
		'index.Userwin',
		'index.Userlist',
		'index.Chatwin',
		'index.Messagelist',
		'index.Chatinput'
	],
	stores: [
		'Currentuser',
		'Userlist',
		'Messagelist'
	],

	init: function() {
		console.log('init Index controller');

		indexController = this;

		this.control({
			'textfield': {
				specialkey: function(field,e) {
					if(e.getKey() == e.ENTER) {
						this.updateMessages();
					}
				}
			}
		});
	},

	updateMessages: function() {
		var formValues = Ext.getCmp('chatForm').getValues();
		var messageStore = indexController.getStore('Messagelist');

		messageStore.add({
			message: formValues.chatMessage,
			ts: Math.round((new Date()).getTime()/1000)
		});
		messageStore.sort('ts','DESC');

		Ext.getCmp('chatMessage').setValue('');
	}

});