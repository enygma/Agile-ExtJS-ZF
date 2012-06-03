/**
 * Define a grid for the current message list
 */
Ext.define('example8.view.index.Messagelist', {
	
	/** Extend the default Grid */
	extend: 'Ext.grid.Panel',

	/** Give it an alias */
	alias: 'widget.messagelist',

	/** Link it to a store */
	store	: 'Messagelist',

	/** Give the grid an ID */
	id: 'messagelist',

	/** Hide the grid's headers */
	hideHeaders: true,

	/** Configure the view - in this case, turn off the "loading" mask */
	viewConfig: {
		loadMask: false
	},

	/** Initialize the grid */
	initComponent: function() {

		/** Column definition for the grid */
		this.columns = [
			{header:'Date',dataIndex:'posted',width:100},
			{header:'User',dataIndex:'username',width:90},
			{header:'Message',dataIndex:'message',flex:1}
		];

		this.callParent(arguments);
	}

});