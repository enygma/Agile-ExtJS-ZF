Ext.define('example6.controller.Index', {
	
	extend: 'Ext.app.Controller',

	views:  [
		'index.Login'
	],
	models: [
	],
	stores: [
	],

	init: function() {
		console.log('Index controller');
	}
});