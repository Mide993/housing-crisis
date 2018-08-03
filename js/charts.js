$(document).ready(function() {

	// wait for the data to be fetched & formatted before executing makeGraphs function
	queue()
		.defer(d3.csv, "static/data/housingdata.csv")
		.await(makeGraphs);
	
	function makeGraphs(error, housingData) {
		// create the variable for the crossfilter instance of housingData
		var ndx = crossfilter(housingData);
		
	
		// execute the functions to compose the charts
		show_area_selector(ndx)
		show_allocations_by_area(ndx);
		show_new_builds_by_year(ndx);
		show_waiting_list_by_area(ndx);
		show_severe_waiting_list(ndx);
		
		// functions for percentages
		show_percentages()
		
		// render all of the composed charts
		dc.renderAll();
	}
	
	// Area Selector Dropdown
	function show_area_selector(ndx) {
		dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		group = dim.group()
		
		dc.selectMenu("#area-selector")
		.dimension(dim)
		.group(group);
	}
	
	function show_percentages() {
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
	}
		function totalIsReady() {
		    console.log(total)
		}
	
	
	/*Allocations row chart*/
	function show_allocations_by_area(ndx) {
		var area_dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		var allocations_by_area = area_dim.group().reduceSum(dc.pluck('Allocations'));

		dc.rowChart("#area_allocations")
			.width(300)
			.height(300)
			.margins({ top: 10, right: 20, bottom: 40, left: 10 })
			.transitionDuration(1500)
			.dimension(area_dim)
			.group(allocations_by_area)
			.ordinalColors(["#00491E", "#306E12", "#7AB85C", "#ABDD93"])
			.elasticX(true)
			.xAxis().ticks(4)
	}
	
	/*New Builds row chart*/
	function show_new_builds_by_year(ndx) {
		var area_dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		var new_builds_by_year = area_dim.group().reduceSum(dc.pluck('New_Housing_2010_15'));
		/*Check what FilterDimension is*/
		// var FilterDimension = ndx.dimension(function (d) {
		// 	return d.key;
		// 	});

		dc.rowChart("#builds_by_year")
			.width(300)
			.height(300)
			.margins({ top: 10, right: 20, bottom: 40, left: 10 })
			.transitionDuration(1500)
			.dimension(area_dim)
			.group(new_builds_by_year)
			.ordinalColors(["#051C38", "#143153", "#4B688B", "#748BA7"])
			.elasticX(true)
			.xAxis().ticks(10)
			// FilterDimension.filter("B");
	}


	// Waiting List figures by area (pie chart)
	function show_waiting_list_by_area(ndx) {
		const area_dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const waiting_list_by_area = area_dim.group().reduceSum(dc.pluck('Housing_Stress_gtr_30'));
		

			dc.pieChart("#area_waiting_list")
				.height(300)
				.radius(200)
				.innerRadius(30)
				.transitionDuration(1000)
				.dimension(area_dim)
				.group(waiting_list_by_area)
				.ordinalColors(["#805600", "#AB7200", "#FDAF13", "#FFC34A"])
				.label(function(d) {
					return ("(" + d.key + ')') + " " + (d.value);
				})
				// .label(function(d) {
				//     console.log(JSON.stringify(d));
				// })	
	}

	// Severe Waiting List by area (pie chart)
	function show_severe_waiting_list(ndx) {
		var area_dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		var severe_waiting_list = area_dim.group().reduceSum(dc.pluck('Critical_Need_gtr_150'));

		dc.pieChart('#severe_waiting_list')
			.height(300)
			.radius(200)
			.innerRadius(30)
			.transitionDuration(1000)
			.dimension(area_dim)
			.group(severe_waiting_list)
			.ordinalColors(["#550800", "#801F15", "#D4746A", "#FFB2AA"])
			.label(function(d) {
				return ("(" + d.key + ')') + " " + (d.value);
			})
	}
});