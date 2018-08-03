let total;

let total_2;

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


    // array for storing Housing_Stress > 150 values
    array_2 = [];

    // loop through Housing_Stress > 150 csv values
    for (let i = 0; i < data.length; i++) {
        data[i].Critical_Need_gtr_150 = +data[i].Critical_Need_gtr_150
        // store in Array
        array_2.push(data[i].Critical_Need_gtr_150)
    }
    
    // store summed array value in total variable 
    total_2 = array_2.reduce(reducer)
    }); 




