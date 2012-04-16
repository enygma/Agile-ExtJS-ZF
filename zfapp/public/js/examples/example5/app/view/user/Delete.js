Ext.define('example5.view.user.Delete', {
	
	extend   : 'Ext.window.Window',
	alias    : 'widget.deleteuser',

	autoShow : true,
	width    : 300,

	items: [
		{
			html: 'Are you sure you wish to delete user <foo>?'
		}
	],

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