//sample store
Ext.define('example3.store.Sample', {

	extend	: 'Ext.data.Store',

	model 	: 'example3.model.Sample',

	data	: [
		{
			character_name	: 'Arthur Dent',
			home_planet		: 'Earth',
			favorite_drink	: 'Tea'
		},
		{
			character_name 	: 'Tricia McMillan',
			home_planet 	: 'Earth',
			favorite_drink 	: '?'
		},
		{
			character_name 	: 'Ford Prefect',
			home_planet 	: 'In the vicinity of Betelgeuse',
			favorite_drink	: '6 pints of bitter (before the world ends)'
		},
		{
			character_name 	: 'Zaphod Beeblebrox',
			home_planet 	: 'In the vicinity of Betelgeuse',
			favorite_drink 	: 'Pan-Galactic Gargle Blaster'
		}
	]

});