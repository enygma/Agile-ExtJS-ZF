Ext.define('example5.view.user.Edit', {
	
	extend	 : 'Ext.window.Window',
	title	 : 'Edit User',
	alias	 : 'widget.useredit',
	layout	 : 'fit',
	autoShow : true,

	initComponent: function()
	{
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype	  : 'textfield',
						name 	  : 'name',
						fieldLabel: 'Name'
					},
					{
						xtype     : 'hiddenfield',
						name      : 'id'
					},
					{
						xtype	  : 'hiddenfield',
						name      : 'action_type',
						value     : 'edit'
					}
				],
				bodyPadding: 5
			}
		];

		this.buttons = [
			{
				text 	: 'Save User',
				action	: 'save'
			},
			{
				text 	: 'Cancel',
				scope	: this,
				handler	: this.close
			}
		];

		this.callParent(arguments);
	}

});