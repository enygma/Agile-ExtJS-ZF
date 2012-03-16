/**
 * Define a view showing how the tabs look
 */
Ext.define('example3.view.index.Sampletabs', {
	
	/** Extend the default "Tab" panel */
	extend: 'Ext.tab.Panel',

	/** Give the widget an alias */
	alias: 'widget.sampletabs',

	/** Define the contents of our tabs */
	items: [
		{
			/** Image #1 */
			title: 'One',
			html: 'This is tab one<br/><img src="/img/dont-always-test.jpg"/>',
			padding: 10,
			height: 500
		},
		{
			/* Image #2 */
			title: 'Two',
			html: 'This is tab two<br/><img src="/img/internet-serious-business-cat.jpg"/>',
			padding: 10,
			height: 500
		},
		{
			/* We can put other views in here too! */
			title: 'Three',
			layout: 'fit',
			padding: 10,
			items: Ext.create('example3.view.index.Samplegrid')
		}
	]

})