Ext.define('example1.view.index.Index', {

	extend	: 'Ext.window.Window',
	alias	: 'widget.defaultwin',
	id 		: 'defaultwin',

	title	: 'Window of win!',
	layout	: 'fit',
	autoShow: true,
	
	initComponent: function() {
		console.log('init view Index');

		this.items = [
			{
				xtype: 'panel',
				html: '<img src="/img/success-kid-victory.jpg"/>',
				bodyPadding: 5,
				height: 215,
				width: 310
			}
		];

		this.callParent(arguments);
	}
});