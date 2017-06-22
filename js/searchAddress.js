//SEARCH AND ZOOM TO ADDRESS WIDGET
//October 2014
//Enter street name and zip code and zoom to location

//Include
dojo.require("esri.tasks.locator");
dojo.require("esri.dijit.InfoWindow");

//Open address search form
function openAddressSearch() {
	dijit.byId('addressSearch').show();
}

//Begin address search
function locate() {
	//Define address locator
	var locator = new esri.tasks.Locator("http://gis.abag.ca.gov/arcgis/rest/services/sde_AddressLocator/GeocodeServer");
	dojo.connect(locator, "onAddressToLocationsComplete", showAddResults);
	
	map.infoWindow.resize(200,125);
	
	//Search parameters
	var street = document.getElementById("strNumberName").value;
	var zip = document.getElementById("zipCode").value;

	//Check that both street address and zip code are entered
	if(street == "" && zip == "") {
		document.getElementById("addressSearchError").innerHTML = "<p>**Both Street Address and Zip Code are required**</p>";
	}
	else if(street == "") {
		document.getElementById("addressSearchError").innerHTML = "<p>**Street Address needs to be added**</p>";
	}
	else if(zip == "") {
		document.getElementById("addressSearchError").innerHTML = "<p>**Zip Code needs to be added**</p>";
	}
	else {
		//Reset error text if currently contains value
		document.getElementById("addressSearchError").innerHTML = "";
	
		var address = {"Street":street, "ZIP":zip};
		locator.outSpatialReference = map.spatialReference;
	}
	locator.addressToLocations(address);
}

function showAddResults(candidates) {
	var candidate;
	var addSymbol = new esri.symbol.PictureMarkerSymbol({
		angle:0,
		xoffset:0,
		yoffset:0,
		type:"esriPMS",
		url:"http://gis.abag.ca.gov/website/Hazards/img/icon_crosshair.png",
		contentType:"image/png",
		width:26,
		height:22
	});
	var infoTemplate = new esri.InfoTemplate("Address: ${address}<br />Score: ${score}");
	
	var geom;
	
	dojo.every(candidates,function(candidate) {
		console.log(candidate.score);
		if (candidate.score > 80) {
			console.log(candidate.location);
			var attributes = { address: candidate.address, score: candidate.score };
			geom = candidate.location;
			var graphic = new esri.Graphic(geom, addSymbol, attributes, infoTemplate);
			//Add location graphic to map
			map.graphics.add(graphic);
			//Add address text to the map naming the matched location
			var displayText = candidate.address;
			var font = new esri.symbol.Font("14pt", esri.symbol.Font.STYLE_NORMAL, esri.symbol.Font.VARIANT_NORMAL, esri.symbol.Font.WEIGHT_BOLD, "Helvetica, Arial");
			
			var textSymbol = new esri.symbol.TextSymbol(displayText, font, new dojo.Color("#000000"));
			textSymbol.setOffset(0,15);
			map.graphics.add(new esri.Graphic(geom, textSymbol));
			return false; //Break out of loop after one candidate with score greater than 80 is found
		}
	});
	if(geom !== undefined) {
		map.centerAndZoom(geom,5);
	}
}

//Clear input fields on form
function clearAddress() {
	//Set input fields to blank
	document.getElementById("strNumberName").value = "";
	document.getElementById("zipCode").value = "";
	//Clear any existing address graphic
	map.graphics.clear();
}

function closeAddressSearch() {
	dijit.byId('addressSearch').hide();
	//Reset error text if currently contains value
	document.getElementById("addressSearchError").innerHTML = "";
	//Set input fields to blank
	document.getElementById("strNumberName").value = "";
	document.getElementById("zipCode").value = "";
}
