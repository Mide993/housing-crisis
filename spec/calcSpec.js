/*
Test getTotalStress which is used as a callback function (getStressTotal,
getNeedTotal) in the d3.csv()method (calc.js)
*/

describe("Calculate totals", function() {
    describe("get data", function() {
        // simulating the d3 parsed object 
        it("should sum the values of data returned by d3", function() {
            // array of objects mimicking the returned d3.csv() parsed data
            let myObj = [
                { PC: "West", Stress: "30" },
                { PC: "East", Stress: "60" },
                { PC: "South", Stress: "45" }
            ];
            expect(getTotalStress(myObj)).toBe(135);
        });
    });
});