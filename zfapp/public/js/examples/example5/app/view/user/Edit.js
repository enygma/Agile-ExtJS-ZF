/**
 * Create the "edit user" form
 */
Ext.define('example5.view.user.Edit', {
	
	/** Extend default Window */
	extend	 : 'Ext.window.Window',

	/** Give window a title, alias, layout and tell it to show on create */
	title	 : 'Edit User',
	alias	 : 'widget.useredit',
	layout	 : 'fit',
	autoShow : true,

	/** Initialize the component */
	initComponent: function()
	{
		this.items = [
			{
				/** Define the form */
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

		/** Set up window buttons */
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