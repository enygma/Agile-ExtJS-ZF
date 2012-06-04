/**
 * Define Index controller
 */
Ext.define('example5.controller.Index', {
	
	/** Extend default Controller */
	extend: 'Ext.app.Controller',

	/** Autoload views, models & stores */
	views:  [
		'index.Grid',
		'index.Helperbar',
		'user.Edit'
	],
	models: [
		'Users'
	],
	stores: [
		'Usergrid'
	],

	/** Define a default "current user" */
	currentUser: {
		name: 'enygma',
		id: 1
	},

	/** Initialize the controller */
	init: function() {
		console.log('Index controller');

		this.control({
			'usergrid': {
				itemdblclick: this.editUser
			},
			'useredit button[action=save]': {
				click: this.updateUser
			},
			'helperbar button[action=add]': {
				click: this.addUser
			},
			'adduser button[action=create]': {
				click: this.createUser
			},
			'deleteuser button[action=delete]': {
				click: this.deleteUser
			}
		});
	},

	/** Handles the editing of a user record in the grid */
	editUser: function(grid,record) {
		var widget = Ext.widget('useredit');
		widget.down('form').loadRecord(record);
	},

	/** Handles the update of a user in the grid */
	updateUser: function(button) {
		// only fires if there's a change to the value!

		var currentWin = button.up('window'),
			form 	   = currentWin.down('form'),
			record 	   = form.getRecord(),
			values 	   = form.getValues();

		record.set(values);
		currentWin.close();
	},

	/** Fired when a new user is added to the grid */
	addUser: function() {
		var widget = Ext.widget('useradd');
	},

	/** Handles teh creation of a new user */
	createUser: function(button) {
		console.log('create user!');

		var currentWin = button.up('window'),
			values 	   = currentWin.down('form').getValues();

		this.getUsergridStore().add(values);
		currentWin.close();
		//this.getUsergridStore().sync();
	},

	/** Handles the deletion of a user */
	deleteUser: function(button) {
		console.log('deleting user!');

		var selectedRecord = Ext.getCmp('usergrid').getSelectionModel().getSelection();
		var currentWin     = button.up('window');

		this.getUsergridStore().remove(selectedRecord[0]);
		currentWin.close();
	}
});
