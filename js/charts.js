$(document).ready(function() {

	// wait for the data to be fetched & formatted before executing makeGraphs function
	queue()
		.defer(d3.csv, "static/data/housingdata.csv")
		.await(makeGraphs);
	
	function makeGraphs(error, housingData) {
		// create the variable for the crossfilter instance of housingData
		const ndx = crossfilter(housingData);
		
	
		// execute the functions to compose the charts
		show_area_selector(ndx)
		show_allocations_by_area(ndx);
		show_new_builds_by_year(ndx);
		show_waiting_list_by_area(ndx);
		show_severe_waiting_list(ndx);

		// render all of the composed charts
		dc.renderAll();
	}
	
	// Area Selector Dropdown
	function show_area_selector(ndx) {
		dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		group = dim.group()
		
		dc.selectMenu("#area-selector")
		.dimension(dim)
		.group(group)
	}
	
	/*Allocations row chart*/
	function show_allocations_by_area(ndx) {
		const area_dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const allocations_by_area = area_dim.group().reduceSum(dc.pluck('Allocations'));

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
		const area_dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const new_builds_by_year = area_dim.group().reduceSum(dc.pluck('New_Housing_2010_15'));

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
					return ("(" + d.key + ')') + " " + ((d.value / totalStress * 100).toFixed(0) + "%");
				})	
	}
	
	// Severe Waiting List by area (pie chart)
	function show_severe_waiting_list(ndx) {
		const area_dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const severe_waiting_list = area_dim.group().reduceSum(dc.pluck('Critical_Need_gtr_150'));

		dc.pieChart('#severe_waiting_list')
			.height(300)
			.radius(200)
			.innerRadius(30)
			.transitionDuration(1000)
			.dimension(area_dim)
			.group(severe_waiting_list)
			.ordinalColors(["#550800", "#801F15", "#D4746A", "#FFB2AA"])
			.label(function(d) {
				return ("(" + d.key + ')') + " " + ((d.value / totalNeed * 100).toFixed(0) + "%");
			})	
	}
});