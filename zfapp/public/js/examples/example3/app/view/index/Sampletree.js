Ext.define('example3.view.index.Sampletree', {

	extend: 'Ext.tree.Panel',
		
	title  : 'Sample Tree Panel',

	alias  : 'widget.sampletree',

	width  : 400,
	height : 400,

	// show the root node or not
	//rootVisible: false,

	// show the lines connecting the parent/child
	//lines: true,

	store: Ext.create('Ext.data.TreeStore', {
	    root: {
	        text: 'Root',
	        expanded: true,
	        children: [
	            {
	                text: 'Child 1',
	                children: [
	                	{
	                		text: 'Child 1-1',
	                		leaf: true
	                	}
	                ]
	            },
	            {
	                text: 'Child 2',
	                leaf: true
	            }
	        ]
	    }
	})
});