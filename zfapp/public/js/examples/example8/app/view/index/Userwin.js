Ext.define('example8.view.index.Userwin', {
	
	extend: 'Ext.window.Window',
	alias: 'widget.userwin',
	title: 'Please enter a username',
	autoShow : true,
	layout: 'anchor',
	id: 'userwin',
	width: 300,

	items: [
		{
			xtype: 'form',
			url: '/example/example8read/format/json',
			id: 'userform',
			bodyStyle: 'padding: 5px',
			items: [
				{
					xtype      : 'textfield',
					name       : 'username',
					fieldLabel : 'Username',
					allowBlank : false,
					minLength  : 5
				}
			]
		}
	],

	buttons: [
		{
			text    : 'Enter',
			id: 'userwinsubmit',
			handler : function() {
				//Ext.getCmp('userwin').submitForm();
			}
		}
	],

	// submitForm: function() {
	// 	var form 		= Ext.getCmp('userform').getForm();
	// 	var currentWin  = Ext.getCmp('userwin');

	// 	if (form.isValid()) {
	// 		form.submit({
	// 			success: function(form,action) {
	// 				console.log('Form submit success! Response: '+action.result.message);

	// 				var formValues = form.getValues();
	// 				console.log(formValues);

	// 				// set the user information into our currentuser store
	// 				var cuser = indexController.getStore('Currentuser');
	// 				console.log(cuser);
	// 				cuser.add({
	// 					name: formValues.username,
	// 					id: 0
	// 				});
	// 			},
	// 			failure: function(form,action) {
	// 				console.log('Form submit failure! Response: '+action.result.message);
	// 			}
	// 		});
	// 	}
	// }
});