/**
 * Create the "add user" view (window)
 */
Ext.define('example5.view.user.Add', {
	
	/** Extend the default Window object */
	extend   : 'Ext.window.Window',

	/** Give it an alias, layout and title */
	alias    : 'widget.adduser',
	layout   : 'fit',
	title    : 'Add New User',

	/** Tell it to show as soon as created */
	autoShow : true,

	/** Initialize the component */
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

						/** Real-time validation on the object */
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

		/** Create buttons for the window */
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