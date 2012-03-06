Ext.define('example2.controller.Index', {
	
	extend: 'Ext.app.Controller',

	views: [
		'index.Index',
		'utility.Win',
		'utility.Buttons',
		'utility.Productgrid'
	],

	models: [
		'Product'
	],

	stores: [
		'Products'
	],

	init: function() {
		console.log('Init Index controller');


	}

});