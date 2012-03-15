Ext.define('example3.view.index.Sampletabs', {
	
	extend: 'Ext.tab.Panel',

	alias: 'widget.sampletabs',

	items: [
		{
			title: 'One',
			html: 'This is tab one<br/><img src="/img/dont-always-test.jpg"/>',
			padding: 10,
			height: 500
		},
		{
			title: 'Two',
			html: 'This is tab two<br/><img src="/img/internet-serious-business-cat.jpg"/>',
			padding: 10,
			height: 500
		}
	]

})