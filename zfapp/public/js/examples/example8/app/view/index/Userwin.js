/**
 * Define the Userwin view (allows the change of the current username)
 */
Ext.define('example8.view.index.Userwin', {
	
	/** Extend the default Window */
	extend: 'Ext.window.Window',

	/** Give it an alias */
	alias: 'widget.userwin',

	/** Define a window title */
	title: 'Please enter a username',

	/** Show the window when it's loaded */
	autoShow : true,

	/** Use the "anchor" layout */
	layout: 'anchor',

	/** Give the object an ID */
	id: 'userwin',

	/** Set the window width */
	width: 300,

	/** Define items to put inside the window */
	items: [
		{
			/** A Form with one field - username */
			xtype     : 'form',
			url       : '/example/example8read/format/json',
			id        : 'userform',
			bodyStyle : 'padding: 5px',
			items: [
				{
					xtype      : 'textfield',
					name       : 'username',
					fieldLabel : 'Username',
					allowBlank : false,
					minLength  : 5
				}
			]
		}
	],

	/** Add an "Enter" button to the window */
	buttons: [
		{
			text : 'Enter',
			id   : 'userwinsubmit'
		}
	]
});