Ext.define('example8.view.index.Messagelist', {
	
	extend: 'Ext.grid.Panel',
	alias: 'widget.messagelist',

	//title	: 'Sample Grid',
	store	: 'Messagelist',
	id: 'messagelist',
	hideHeaders: true,

	viewConfig: {
		loadMask: false
	},

	initComponent: function() {

		// column definition for the grid
		this.columns = [
			{header:'Date',dataIndex:'posted',width:100},
			{header:'User',dataIndex:'username',width:90},
			{header:'Message',dataIndex:'message',flex:1}
		];

		this.callParent(arguments);
	}

});