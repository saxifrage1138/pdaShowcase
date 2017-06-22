//SEARCH AND ZOOM TO CITY WIDGET
//October 2014
//Enter jurisdiction name and zoom to selected

//Include
dojo.require("esri.tasks.find");

function openCitySearch() {
	pdfTitle = null;
	dijit.byId('citySearch').show();
}

//Begin city search
function searchCity() {
	map.infoWindow.hide();
	
	//Create find task
	var cityFindTask = new esri.tasks.FindTask("http://gis.abag.ca.gov/arcgis/rest/services/admin/abag_City/MapServer");
	
	//Search parameters
	var city = document.getElementById("cityName").value;

	//Check that at least one parameter has been filled in
	if(city == "") {
		document.getElementById("citySearchError").innerHTML = "<br />**Please enter city name**";
	}
	else {
		//Reset error text if currently contains value
		document.getElementById("citySearchError").innerHTML = "";
	}
	
	//Build city filter
	var cityParams = new esri.tasks.FindParameters();
	cityParams.returnGeometry = true;
	cityParams.layerIds = [0];
	cityParams.searchFields = ["name"];
	
	//Set search text and find county
	cityParams.searchText = city;
	cityFindTask.execute(cityParams, cityShowResults);
}

function cityShowResults(results) {
	dojo.forEach(results, function (result) {
		var cityGraphic = result.feature;
	});

	var poly = dojo.filter(results, function(r) {
		return r.feature.geometry.type === "polygon";
	});
	if ( poly.length > 0 ) {
		map.setExtent(poly[0].feature.geometry.getExtent().expand(1.5));
	} else {
		//alert("No polygon results...");
		document.getElementById("citySearchError").innerHTML = "**City not found<br />Check spelling and try again.**";
	}
}

//Clear input field on form
function clearCity() {
	//Set input field to blank
	document.getElementById("cityName").value = "";
}

function closeCitySearch() {
	dijit.byId('citySearch').hide();
	document.getElementById("cityName").value = "";
	document.getElementById("citySearchError").innerHTML = "";
}
