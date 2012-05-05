Ext.define('example8.controller.Index', {
	
	extend: 'Ext.app.Controller',

	models: [
		'User'
	],
	views: [
		'index.Userwin'
	],
	stores: [
		'Currentuser'
	],

	init: function() {
		console.log('init Index controller');

		indexController = this;
	}

});