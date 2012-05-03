Ext.define('example3.view.index.Samplednd', {
	
	extend: 'Ext.panel.Panel',

	alias: 'widget.samplednd',

	height: 150,
	width: 437,

	layout: {
		type: 'hbox',
		align: 'stretch',
		padding: 5
	},

	items: [
		Ext.create('Ext.panel.Panel', {
			html: 'test1',
			width: 210,
			layout: {
				type: 'hbox',
				align: 'stretch',
				padding: 10
			}
		}),
		{
			xtype: 'splitter'
		},
		Ext.create('Ext.panel.Panel', {
			html: 'test2',
			width: 210
		})
	]

});