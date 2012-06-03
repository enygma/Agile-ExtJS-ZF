/**
 * Define the Index (main) controller
 */
Ext.define('example8.controller.Index', {
	
	/** Extend the default Controller */
	extend: 'Ext.app.Controller',

	/** Autolod these models */
	models: [
		'User',
		'Userlist',
		'Message'
	],
	/** Autolod these views */
	views: [
		'index.Userwin',
		'index.Userlist',
		'index.Chatwin',
		'index.Messagelist',
		'index.Chatinput'
	],
	/** Autoload these stores */
	stores: [
		'Currentuser',
		'Userlist',
		'Messagelist'
	],

	/** Initialize the controller */
	init: function() {
		console.log('init Index controller');

		/** Set up some defaults */
		indexController = this;
		indexController.messageParams = {};
		indexController.currentUser = {
			name: 'enygma',
			id: 1
		};

		/** Define the interactions for the controller and view components */
		this.control({
			/** Submit the message field on Enter */
			'#chatMessage': {
				specialkey: function(field,e) {
					if(e.getKey() == e.ENTER && field.getValue().length > 0) {
						this.updateMessages();
					} else if (e.getKey() == e.ENTER && field.getValue().length > 0) {
						Ext.Msg.alert('Alert!','You must enter a message to submit!');
					}
				}
			},
			/** 
			 * When the item on the Current User list is clicked,
			 *     the current messages will be filtered by that username
			 */
			'userlistgrid': {
				itemclick: function(element,record,item,index,evt) {
					var filterUser   = record.data.id;
					var messageStore = Ext.getCmp('messagelist').getStore();

					indexController.messageParams = {filterBy: filterUser}
					messageStore.load({
						params: indexController.messageParams
					});
				}
			},
			/** Submit the "change username" form, complete with validation */
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

								/** 
								 * Reload the store (refreshes the Current User list view) 
								 *     and close the window
								 */
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
	
		/** Define a task to execute periodically - this updates the Message List store */
		var task = Ext.TaskManager.start({
		  run: function(){
		    Ext.getCmp('messagelist').getStore().load({params: indexController.messageParams});
		  },
		  interval: 3000
		});
	},

	/** Create the "change username" window */
	loadUserWin: function() {
		Ext.create('example8.view.index.Userwin');
	},

	/** Update the "Current Messages" */
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