describe("Suite to test Billing Validation", () => {
    biller  = null;
    beforeEach(() => {
		let date = new Date(2010, 10, 10);
        biller = new biller("Anubhav Reddy S", "anubhavreddy.s.2@gmail.com", "9964247999", date, 5000);
    });

    afterEach(() => {
        biller  = null;
    
    });

    it("should validate name", () => {
        expect( biller.Name()).toBeTruthy();
	});

	it("should validate email", () => {
        expect( biller.Email()).toBeTruthy();
	});

	it("should validate phone", () => {
        expect( biller.Phone()).toBeTruthy();
	});

	it("should validate bill date", () => {
        expect( biller.BillDate()).toBeTruthy();
	});

	it("should validate bill amount", () => {
        expect( biller.BillAmount()).toBeTruthy();
	});
});
