Ext.define('example6.view.index.Login', {
	
	extend   : 'Ext.window.Window',
	alias    : 'widget.loginwin',
	autoShow : true,
	title    : 'Login',
	layout   : 'fit',
	id       : 'loginWin',

	items: [
		{
			xtype   : 'form',
			url     : '/example/example6submit/format/json',
			id      : 'loginForm',
			padding : 5,
			style   : 'background-color: #FFFFFF',
			border  : false,
			items: [
				{
					xtype      : 'textfield',
					name       : 'username',
					fieldLabel : 'Username',
				},
				{
					xtype      : 'textfield',
					inputType  : 'password',
					name       : 'password',
					fieldLabel : 'Password',
				},
				{
					xtype      : 'container',
					dock       : 'top',
					id         : 'msg',
					height     : 0,
					border	   : false,
				}
			]
		}
	],

	buttons: [
		{
			text    : 'Login',
			handler : function() {

				var btn = this;

				//var form = this.up('form').getForm();
				var form = Ext.getCmp('loginForm').getForm();
				console.log(form);

				if (form.isValid()) {
					form.submit({
						success: function(form,action) {

							console.log('Form submit success! Response: '+action.result.message);
							var msg 		= Ext.getCmp('msg');
							msg.update(action.result.message);
							
						},
						failure: function(form,action) {
							console.log('Form submit failure! Response: '+action.result.message);

							var currentWin  = btn.up().up();
							var msg 		= Ext.getCmp('msg');

							msg.update(action.result.message);
							msg.setSize(Ext.getCmp('msg').getWidth(),40);
							Ext.getCmp('msg').addClass('showmsg');

							currentWin.setSize(
								currentWin.getWidth(),
								currentWin.getHeight()+40
							);
						}
					});
				}
			}
		},
		// {
		// 	text    : 'Cancel',
		// 	scope   : this,
		// 	handler : this.close
		// }
	]

});