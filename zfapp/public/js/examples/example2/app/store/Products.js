Ext.define('example2.store.Products',{
	
	extend	: 'Ext.data.Store',

	// we can hard-code the fields
	//fields	: ['item_name','item_type','amount'],

	// or use a model!
	model	: 'example2.model.Product'


	// You can define default data here too!
	// data 	: [
	// 	{item_name:'Buckyballs Magnetic Building Spheres',item_type:'Toy',amount:'$24.99 USD'},
	// 	{item_name:'The Bag of Holding Messenger Bag',item_type:'Luggage',amount:'$49.99 USD'}
	// ]

});