/** Include the default Application file */
Ext.require('Ext.app.Application');

var Application = null;

/** When the page is loaded, create the Application instance */
Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'example7',

        appFolder: '/js/examples/example7/app',

        controllers: [
            'Index'
        ],

        launch: function() {
            /** Include the tests in the test.html head */
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});