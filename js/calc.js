// d3.csv("static/data/housingdata.csv", function(data) {
//     let total = 0
//     data.forEach(function(d) {
//         d.Housing_Stress_gtr_30 = +d.Housing_Stress_gtr_30;
//         d.Singles_Housing_Stress_gtr_30 = +d.Singles_Housing_Stress_gtr_30;
//         d.Housing_Stress_gtr_30 = +d.Housing_Stress_gtr_30;
//         d.New_Housing_2010_15 = +d.New_Housing_2010_15;
//         d.Singles_Stress_gtr_30 = +d.Singles_Stress_gtr_30;
//         d.Critical_Need_gtr_150 = +d.Critical_Need_gtr_150;
//         d.Private_Landlord_Public_Payments = +d.Private_Landlord_Public_Payments

//         total += d.Housing_Stress_gtr_30
//         return total
//     });
// });


// Getting total - now need to store this in a variable, import into charts and divide value by total = percentage. Then test


// variable for total Housing_Stress > 30

let num = 33;

let total;


d3.csv("static/data/housingdata.csv", function(data) {
    // array for storing Housing_Stress > 30 values
    array = [];
    // reduce method used for summing Housing_Stress > 30
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    // loop through Housing_Stress > 30 csv values
    for (let i = 0; i < data.length; i++) {
        data[i].Housing_Stress_gtr_30 = +data[i].Housing_Stress_gtr_30
        // store in Array
        array.push(data[i].Housing_Stress_gtr_30)
    }
    // store summed array value in total variable 
    total = array.reduce(reducer)
    //  return the total
    totalIsReady()
    }); 


function totalIsReady() {
    console.log(total - num)
}

// Set timeout for asynchronous
// setTimeout(function() {
//     console.log(total)
// }, 200)





