describe("Index", function() {
	
	var store = null,
		ctlr  = null;

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

	it("should have usernames", function() {
		store.on('load', function() {
			expect(store.getCount()).toBeGreaterThan(1);
		})
		
	});

});