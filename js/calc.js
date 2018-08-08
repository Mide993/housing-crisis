/*
function to calculate the sum of the selected csv data parsed 
into objects by d3. The values will be added to an array, summed and 
stored in the variables totalStress and totalNeed to be used in the 
makeGraphs function in charts.js
*/
function getTotalStress(obj) {
    let arrayStress = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let i = 0; i < obj.length; i++) {
        obj[i].Stress = +obj[i].Stress;
        arrayStress.push(obj[i].Stress);
    }
    return stressTotal = arrayStress.reduce(reducer);
}


// use function in callback function for d3.csv() method
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

// use d3.csv() method
d3.csv("static/data/housingdata.csv", getStressTotal);
d3.csv("static/data/housingdata.csv", getNeedTotal);


// Testing
// let myObj = [{PC: "West", Stress: 30}, {PC: "East", Stress: 60}]





