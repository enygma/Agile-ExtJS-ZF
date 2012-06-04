/**
 * Create the "delete user" view
 */
Ext.define('example5.view.user.Delete', {
	
	/** Extend the default Window */
	extend   : 'Ext.window.Window',

	/** Give the widget an alias, tell it to autoshow and set the width */
	alias    : 'widget.deleteuser',
	autoShow : true,
	width    : 300,

	/** Define the child items */
	items: [
		{
			html: 'Are you sure you wish to delete user <foo>?'
		}
	],

	/** Initialize the component */
	initComponent: function() {

		this.buttons = [
			{
				text     : "I'm sure!",
				action   : 'delete',
				id       : 'deleteUserBtn'
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