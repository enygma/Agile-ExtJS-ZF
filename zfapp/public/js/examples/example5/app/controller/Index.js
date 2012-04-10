Ext.define('example5.controller.Index', {
	
	extend: 'Ext.app.Controller',

	views:  [
		'index.Grid',
		'user.Edit'
	],
	models: [
		'Users'
	],
	stores: [
		'Usergrid'
	],

	init: function() {
		console.log('Index controller');

		this.control({
			'usergrid': {
				itemdblclick: this.editUser
			},
			'useredit button[action=save]': {
				click: this.updateUser
			}
		});
	},

	editUser: function(grid,record) {
		var widget = Ext.widget('useredit');
		widget.down('form').loadRecord(record);
	},

	updateUser: function(button) {
		// only fires if there's a change to the value!

		var currentWin = button.up('window'),
			form 	   = currentWin.down('form'),
			record 	   = form.getRecord(),
			values 	   = form.getValues();

		record.set(values);
		currentWin.close();
		this.getUsergridStore().sync();

	}
});