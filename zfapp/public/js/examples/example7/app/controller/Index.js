/**
 * Define a simple controller for testing
 */
Ext.define('example7.controller.Index', {
	
	/** Extend the default controller */
	extend : 'Ext.app.Controller',

	/** Autoload models, views and stores */
	models : [],
	views  : [],
	stores : [],

	/** Initialize the controller */
	init: function() {
		console.log('Init Index controller!');

		this.callParent(arguments);
	}

});