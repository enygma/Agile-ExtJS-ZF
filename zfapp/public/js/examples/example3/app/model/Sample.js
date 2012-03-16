/**
 * Set up a sample model to use with our Samplegrid
 */
Ext.define('example3.model.Sample', {
	
	/** Extend the default "Model" */
	extend: 'Ext.data.Model',

	/** Define the model's fields */
	fields: ['character_name','home_planet','favorite_drink']

});