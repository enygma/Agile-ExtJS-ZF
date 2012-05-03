Ext.define('example3.view.index.Sampletree', {

	extend: 'Ext.panel.Panel',

	alias  : 'widget.sampletree',
	
	items  : [
		Ext.create('Ext.tree.Panel', {
			
			title  : 'Sample Tree Panel',

			width  : 400,
			height : 400,

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
		})
	]
});