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
					allowBlank : false,
					minLength  : 5
				},
				{
					xtype      : 'textfield',
					inputType  : 'password',
					name       : 'password',
					fieldLabel : 'Password',
					allowBlank : false,
					regex      : new RegExp('[a-z0-9A-Z]')
				},
				{
					xtype      : 'container',
					id         : 'msg',
					border	   : false,
					style      : 'width:270'
				}
			],
			region: 'center'
		}
	],

	keys: [
        { 
        	key: [Ext.EventObject.ENTER], handler: function(keyCode, evt) {

                //Ext.Msg.alert("Alert","Enter Key Event !");

                //console.log(Ext.getCmp('loginForm'));
                //Ext.getCmp(evt.getTarget().id).down('form').submit();

                //Ext.getCmp('loginForm').submit();
                Ext.getCmp('loginWin').submitForm();
            }
        }
    ],

	buttons: [
		{
			text    : 'Login',
			handler : function() {
				Ext.getCmp('loginWin').submitForm();
			}
		}
	],

	submitForm: function() {

		var form 		= Ext.getCmp('loginForm').getForm();
		var currentWin  = Ext.getCmp('loginWin');

		if (form.isValid()) {
			form.submit({
				success: function(form,action) {
					console.log('Form submit success! Response: '+action.result.message);

					//var currentWin  = btn.up().up();
					currentWin.resizeWinow(
						'successmsg',
						action.result.message+'<br/><br/><img src="/img/babywin.jpg" width="180">');
				},
				failure: function(form,action) {
					console.log('Form submit failure! Response: '+action.result.message);

					//var currentWin  = btn.up().up();
					currentWin.resizeWinow(
						'errmsg',
						action.result.message+'<br/><br/><img src="/img/catcheese.jpg" width="180">');
				}
			});
		}
	},

	resizeWinow: function(className,message) {

		var msg = Ext.getCmp('msg');

		msg.setSize(Ext.getCmp('msg').getWidth(),200);
		Ext.getCmp('msg').addClass(className);

		this.setSize(this.getWidth(),320);
		msg.update(message);
	}

});