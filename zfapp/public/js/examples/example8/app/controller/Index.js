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
		indexController.messageParams = {};
		indexController.currentUser = {
			name: 'enygma',
			id: 1
		};

		this.control({
			'#chatMessage': {
				specialkey: function(field,e) {
					if(e.getKey() == e.ENTER && field.getValue().length > 0) {
						this.updateMessages();
					} else if (e.getKey() == e.ENTER && field.getValue().length > 0) {
						Ext.Msg.alert('Alert!','You must enter a message to submit!');
					}
				}
			},
			'userlistgrid': {
				itemclick: function(element,record,item,index,evt) {
					// filter our grid based on the username
					var filterUser   = record.data.id;
					var messageStore = Ext.getCmp('messagelist').getStore();

					indexController.messageParams = {filterBy: filterUser}
					messageStore.load({
						params: indexController.messageParams
					});
				}
			},
			'#userwinsubmit': {
				click: function(el) {
					var form = Ext.getCmp('userform').getForm();
					var cp   = Ext.getCmp('chatpanel');

					if (form.isValid()) {
						form.submit({
							success: function(form,action) {

								var formValues = form.getValues();

								indexController.currentUser = {
									name: formValues.username,
									id: action.result.insertUserId
								}

								// set the username in the form
								Ext.getCmp('chatUser').setValue(action.result.insertUserId);

								Ext.get('postingastxt').update(
									cp.renderUserLink(formValues.username)
								);

								Ext.getCmp('userlistgrid').getStore().load();

								Ext.getCmp('userwin').close();
							},

							failure: function(form,action) {
								console.log('You fail!');
							}
						});
					}
				}
			}
		});

		var task = Ext.TaskManager.start({
		  run: function(){
		    Ext.getCmp('messagelist').getStore().load({params: indexController.messageParams});
		  },
		  interval: 3000
		});
	},

	loadUserWin: function() {
		Ext.create('example8.view.index.Userwin');
	},

	updateMessages: function() {

		var formValues = Ext.getCmp('chatForm').getValues();
		if (formValues.chatMessage.length > 0) {
			
			var messageStore = indexController.getStore('Messagelist');

			messageStore.add({
				message: formValues.chatMessage,
				chatUser: formValues.chatUser,
				ts: Math.round((new Date()).getTime()/1000)
			});
			messageStore.sort('ts','DESC');

			Ext.getCmp('chatMessage').setValue('');
		} else {
			Ext.Msg.alert('Alert!','You must enter a message to submit!');
		}
	}

});