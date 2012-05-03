/**
 * Define the example3 Index controller
 */
Ext.define('example3.controller.Index', {
	
	/** extend the default Ext controller */
	extend	: 'Ext.app.Controller',

	/** set up views, models, stores used in this controller */
	views	: [
		'index.Buttons',
		'index.Samplegrid',
		'index.Samplednd',
		'index.Sampletabs',
		'index.Sampletree',
		'index.Multicoltree'
	],
	models	: ['Sample'],
	stores	: ['Sample'],

	/** initialize the controller object */
	init: function()
	{
		//nothing here yet
	}

});