$(document).ready(function() {

	// wait for the data to be fetched & formatted before executing makeGraphs function
	queue()
		.defer(d3.csv, "static/data/housingdata.csv")
		.await(makeGraphs);
	
	function makeGraphs(error, housingData) {
		// create the variable for the crossfilter instance of housingData
		var ndx = crossfilter(housingData);

		// execute the functions to compose the charts
		show_allocations_by_area(ndx);

		// render all of the composed charts
		dc.renderAll();
	}
	
	/*Row chart*/
	function show_allocations_by_area(ndx) {
		var area_dim = ndx.dimension(dc.pluck('Parliamentary Constituency'));
		var allocations_by_area = area_dim.group().reduceSum(dc.pluck('Allocations'));

		dc.rowChart("#area_allocations")
			.width(350)
			.height(300)
			.margins({ top: 10, right: 20, bottom: 40, left: 10 })
			.transitionDuration(1500)
			.dimension(area_dim)
			.group(allocations_by_area)
			.ordinalColors(["#00491E", "#306E12", "#7AB85C", "#ABDD93"])
			.xAxis().ticks(4);	
	}
});