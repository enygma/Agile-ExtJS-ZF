Ext.define('example5.view.user.Add', {
	
	extend: 'Ext.window.Window',
	alias: 'widget.adduser',
	layout: 'fit',
	title: 'Add New User',

	autoShow: true,

	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype      : 'textfield',
						name       : 'name',
						fieldLabel : 'Name',
						allowBlank : false,
						validator  : function(value) {
							if (Ext.getCmp('createUserBtn')) {
								if (value.length > 0) {
									Ext.getCmp('createUserBtn').enable(true);
								} else {
									Ext.getCmp('createUserBtn').disable(true);
								}
							}
							return true;
						}
					},
					{
						xtype      : 'hiddenfield',
						name       : 'ID',
						value      : 0
					}
				],
				bodyPadding: 5
			}
		];

		this.buttons = [
			{
				text     : 'Create User',
				action   : 'create',
				disabled : true,
				id       : 'createUserBtn'
			},
			{
				text     : 'Cancel',
				scope    : this,
				handler  : this.close
			}
		];

		this.callParent(arguments);
	}

});