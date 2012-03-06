Ext.define('example1.controller.Index', {

	extend: 'Ext.app.Controller',

	views: [
		'index.Index',
		'index.Utility'
	],

	init: function() {
		console.log('init Index');

		this.control({
			//nothing to see...move along
		});
	}
});