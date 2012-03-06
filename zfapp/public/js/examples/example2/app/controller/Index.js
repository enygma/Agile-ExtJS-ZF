/**
 * Define the example2 Index controller
 */
Ext.define('example2.controller.Index', {
	
	/** Extend the default Ext controller */
	extend: 'Ext.app.Controller',

	/** Define the controller's views */
	views: [
		'utility.Buttons',
		'utility.Productgrid'
	],

	/** Define the controller models */
	models: [
		'Product'
	],

	/** define the controller stores */
	stores: [
		'Products'
	],

	/** Initialize the controller */
	init: function() {
		console.log('Init Index controller');
	}

});