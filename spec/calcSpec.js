/*Sample Test*/
describe("Calculator", function() {
    describe("Multiply function", function() {
        it("should give the product of two numbers", function() {
            expect(multiplication(2, 3)).toBe(6);
        });
    });
});