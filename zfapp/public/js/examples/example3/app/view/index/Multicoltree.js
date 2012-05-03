// Examples: http://www.sencha.com/learn/ext-js-trees/

Ext.define('example3.view.index.Multicoltree', {

	extend : 'Ext.tree.Panel',

	alias  : 'widget.multicoltree',
	
	title  : 'Sample Double Tree Panel',

	width  : 400,
	height : 400,

	// show the root node or not
	//rootVisible: false,

	// show the lines connecting the parent/child
	//lines: true,

	columns: [
		{
			xtype: 'treecolumn',
			text: 'Name 1',
			dataIndex: 'name',
			width: 150
		},
		{
			xtype: 'treecolumn',
			text: 'Name 2',
			dataIndex: 'description',
			width: 150
		}
	],

	fields: [
		'name',
		'description'
	],

	store: Ext.create('Ext.data.TreeStore', {
	    root: {
	        name: 'Root',
	        description: 'Root description',
	        expanded: true,
	        children: [
	            {
	                name: 'Child 1',
	                description: 'Child, just 1',
	                expanded: true,
	                children: [
	                	{
	                		name: 'Child 1-1',
	                		description: 'Child 1 of 1',
	                		leaf: true
	                	}
	                ]
	            },
	            {
	                name: 'Child 2',
	                description: 'Child, just 2',
	                leaf: true
	            }
	        ]
	    }
	})
});