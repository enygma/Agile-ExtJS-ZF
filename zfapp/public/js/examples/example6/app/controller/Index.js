/**
 * Default index controller
 */
Ext.define('example6.controller.Index', {
	
	/** Extend the default controller */
	extend: 'Ext.app.Controller',

	/** Autloaod views, models and stores */
	views:  [
		'index.Login'
	],
	models: [
	],
	stores: [
	],

	/** Initialize the controller */
	init: function() {
		console.log('Index controller');
	}
});