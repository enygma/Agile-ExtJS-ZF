Ext.define('example6.view.index.Login', {
	
	extend   : 'Ext.window.Window',
	alias    : 'widget.loginwin',
	autoShow : true,
	title    : 'Login',
	layout   : 'fit',

	items: [
		{
			xtype   : 'form',
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
				}
			]
		}
	],

	initComponent: function() {
		this.buttons = [
			{
				text    : 'Login'
			},
			{
				text    : 'Cancel',
				scope   : this,
				handler : this.close
			}
		]

		this.callParent(arguments);
	}

});