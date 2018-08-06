/*
function to calculate the totals of the data fetched by d3. 
This function(s) will place the values in arrays, sum and 
store the total in the variables totalStress and totalNeed to be called
in the makeGraphs function in charts.py.
*/ 
const getStressTotal = (data) => {
    let arrayStress = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let i = 0; i < data.length; i++) {
        data[i].Housing_Stress_gtr_30 = +data[i].Housing_Stress_gtr_30;
        arrayStress.push(data[i].Housing_Stress_gtr_30);
    }
    return totalStress = arrayStress.reduce(reducer);
}



const getNeedTotal = (data) => {
    let arrayNeed = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let i = 0; i < data.length; i++) {
        data[i].Critical_Need_gtr_150 = +data[i].Critical_Need_gtr_150;
        arrayNeed.push(data[i].Critical_Need_gtr_150);
    }
    return totalNeed = arrayNeed.reduce(reducer);
 
}


/*
callback functions on data fetched. These are deferred for the makeGraphs
function in charts.py
*/


d3.csv("static/data/housingdata.csv", getStressTotal);
d3.csv("static/data/housingdata.csv", getNeedTotal);


    
/*TEST FUNCTION*/
function multiplication(numOne, numTwo) {
    return numOne * numTwo;
}




