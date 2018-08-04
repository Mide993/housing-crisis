let totalStress;

let totalNeed;

d3.csv("static/data/housingdata.csv", function(data) {
    // array for storing Housing_Stress > 30 values
    arrayStress = [];

    // array for storing Housing_Stress > 150 values
    arrayNeed = [];
    
    // reduce method used for summing Housing_Stress > 30
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    // loop through Housing_Stress > 30 csv values
    for (let i = 0; i < data.length; i++) {
        data[i].Housing_Stress_gtr_30 = +data[i].Housing_Stress_gtr_30
        // store in Array
        arrayStress.push(data[i].Housing_Stress_gtr_30)
    }
    
    // store summed array value in total variable 
    totalStress = arrayStress.reduce(reducer)

    // loop through Housing_Stress > 150 csv values
    for (let i = 0; i < data.length; i++) {
        data[i].Critical_Need_gtr_150 = +data[i].Critical_Need_gtr_150
        // store in Array
        arrayNeed.push(data[i].Critical_Need_gtr_150)
    }
    
    // store summed array value in total variable 
    totalNeed = arrayNeed.reduce(reducer)
    }); 

/*TEST FUNCTION*/
function multiplication(numOne, numTwo) {
    return numOne * numTwo;
}




