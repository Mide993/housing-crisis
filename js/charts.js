$(document).ready(function() {

	// wait for the data to be parsed before makeGraphs function
	queue()
		.defer(d3.csv, "static/data/housingdata.csv")
		.await(makeGraphs);
		
	function makeGraphs(error, housingData) {
		// create the variable for the crossfilter instance of housingData
		const ndx = crossfilter(housingData);

		// functions to constuct the charts
		showAreaSelector(ndx)
		showAllocationsByArea(ndx);
		showNewBuildsByYear(ndx);
		showWaitingListByArea(ndx);
		showSevereWaitingList(ndx);
		
		// render all of the charts
		dc.renderAll();
	}
	
	// Area Selector Dropdown
	function showAreaSelector(ndx) {
		dim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		group = dim.group()
		
		dc.selectMenu("#area-selector")
		.dimension(dim)
		.group(group)
	}
	
	/*Allocations row chart*/
	function showAllocationsByArea(ndx) {
		const areaDim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const allocationsByArea = areaDim.group().reduceSum(dc.pluck('Allocations'));

		dc.rowChart("#area_allocations")
			.width(300)
			.height(300)
			.margins({ top: 10, right: 20, bottom: 40, left: 10 })
			.transitionDuration(1500)
			.dimension(areaDim)
			.group(allocationsByArea)
			.ordinalColors(["#00491E", "#306E12", "#7AB85C", "#ABDD93"])
			.elasticX(true)
			.xAxis().ticks(4)
	}
	
	/*New Builds row chart*/
	function showNewBuildsByYear(ndx) {
		const areaDim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const newBuildsByYear = areaDim.group().reduceSum(dc.pluck('New_Housing_2010_15'));

		dc.rowChart("#builds_by_year")
			.width(300)
			.height(300)
			.margins({ top: 10, right: 20, bottom: 40, left: 10 })
			.transitionDuration(1500)
			.dimension(areaDim)
			.group(newBuildsByYear)
			.ordinalColors(["#051C38", "#143153", "#4B688B", "#748BA7"])
			.elasticX(true)
			.xAxis().ticks(10)
	}
	
	// Waiting List figures by area (pie chart)
	function showWaitingListByArea(ndx) {
		const areaDim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const waitingListByArea = areaDim.group().reduceSum(dc.pluck('Housing_Stress_gtr_30'));
			
		dc.pieChart("#area_waiting_list")
			.height(300)
			.width(285)
			.radius(200)
			.innerRadius(30)
			.transitionDuration(1000)
			.dimension(areaDim)
			.group(waitingListByArea)
			.ordinalColors(["#805600", "#AB7200", "#FDAF13", "#FFC34A"])
			/*use totalStress variable to calculate percentages*/
			.label(function(d) {
				return ("(" + d.key + ')') + " " + ((d.value / totalStress * 100).toFixed(0) + "%");
		})	
	}
	
	// Severe Waiting List by area (pie chart)
	function showSevereWaitingList(ndx) {
		const areaDim = ndx.dimension(dc.pluck('Parliamentary_Constituency'));
		const severeWaitingList = areaDim.group().reduceSum(dc.pluck('Critical_Need_gtr_150'));
		
		dc.pieChart('#severe_waiting_list')
			.height(300)
			.width(285)
			.radius(200)
			.innerRadius(30)
			.transitionDuration(1000)
			.dimension(areaDim)
			.group(severeWaitingList)
			.ordinalColors(["#550800", "#801F15", "#D4746A", "#FFB2AA"])
			/*use totalNeed variable to calculate percentages*/
			.label(function(d) {
				return ("(" + d.key + ')') + " " + ((d.value / totalNeed * 100).toFixed(0) + "%");
		})	
	}
});