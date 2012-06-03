/**
 * Define tests for the Index controller
 */
describe("Index", function() {
	
	var store = null,
		ctlr  = null;

	/** Before each of the tests are run (like setUp) */
	beforeEach(function() {
		if (!ctlr) {
			ctlr = Application.getController('Index');
		}
		if (!store) {
			store = ctlr.getStore('Userlist');
		}

		expect(store).toBeTruthy();

		waitsFor(
			function() { return !store.isLoading(); },
			"Store load not completed",
			4000
		);
	});

	/** Check that, when the store is loaded, there's usernames in it */
	it("should have usernames", function() {
		store.on('load', function() {
			expect(store.getCount()).toBeGreaterThan(1);
		})
		
	});

});