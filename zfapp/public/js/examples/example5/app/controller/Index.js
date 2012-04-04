Ext.define('example5.controller.Index', {
	
	extend: 'Ext.app.Controller',

	views:  [
		'index.Grid'
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
				itemdblckick: function(record) {
					console.log(record);
				}
			}
		});
	}

});