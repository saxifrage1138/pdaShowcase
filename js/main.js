//PDA SHOWCASE MAP APP MAIN CONFIG
//June 2017
//Set up map projection, start extent, layers and basic functionality

//Includes
dojo.require("dijit.dijit");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.AccordionContainer");
dojo.require("dijit.layout.TabContainer");
dojo.require("dijit.form.DropDownButton");
dojo.require("dijit.Dialog");
dojo.require("esri.map");
dojo.require("esri.graphic");
dojo.require("esri.config");
dojo.require("esri.tasks.geometry");
dojo.require("dijit.form.Button");
dojo.require("esri.dijit.Scalebar");
dojo.require("esri.dijit.HomeButton");

//var map, loading, infoTemplate;
var map, infoTemplate;
var findTask, find, findParams, queryTask, query, pqueryTask, dqueryTask, pdaFindTask, pdaFindParams;
var pda, upda, pdaTitle, symbol;

function init() {
	//loading = dojo.byId("loadingImg");
	//esri.config.defaults.io.corsEnabledServers.push("gis5.abag.ca.gov");

	//Fallback to proxy for non-CORS capable browsers
	//esri.config.defaults.io.proxyUrl = "/PHP/proxy.php";
	//esri.config.defaults.io.alwaysUseProxy = true;

	//dijit.byId("splashScreenMessage").show();
	esri.bundle.widgets.legend.NLS_noLegend = '';

	var customExtentAndSR = new esri.geometry.Extent(453414.023, 4114578.220, 659260.268, 4271476.450, new esri.SpatialReference({"wkid": 26910}));

	var lods = [{"level": 0, "resolution": 396.87579375158754, "scale": 1500000},
				{"level": 1, "resolution": 264.5838625010584, "scale": 1000000},
				{"level": 2, "resolution": 132.2919312505292, "scale": 500000},
				{"level": 3, "resolution": 66.1459656252646, "scale": 250000},
				{"level": 4, "resolution": 33.0729828126323, "scale": 125000},
				{"level": 5, "resolution": 16.933367200067735, "scale": 64000},
				{"level": 6, "resolution": 8.466683600033868, "scale": 32000},
				{"level": 7, "resolution": 4.233341800016934, "scale": 16000}];

	var infoWindow = new esri.dijit.InfoWindow({}, dojo.create("div"));
	infoWindow.startup();

	map = new esri.Map("map", {
		extent: customExtentAndSR,
		wrapAround180: false,
		logo: false,
		lods: lods,
		navigationMode: "css-transforms",
		infoWindow: infoWindow
	});

	//dojo.connect(map, "onUpdateStart", showLoading);
	//dojo.connect(map, "onUpdateEnd", hideLoading);

	var scalebar = new esri.dijit.Scalebar({
		map: map,
		// "dual" displays both miles and kilometers
		// "english" is the default, which displays miles
		// use "metric" for kilometers
		scalebarUnit: "dual",
		attachTo: "bottom-left"
	});

	var homeButton = new esri.dijit.HomeButton({
		map: map,
		id: 'HomeButton'
	}, 'HomeButton');
	homeButton._homeNode.title = "Starting Extent";
	homeButton.startup();

	var basemap1 = new esri.layers.ArcGISTiledMapServiceLayer("http://gis.abag.ca.gov/arcgis/rest/services/admin/region_RegionAreas/MapServer");
	map.addLayer(basemap1);

	var basemap2 = new esri.layers.ArcGISTiledMapServiceLayer("http://gis5.abag.ca.gov/arcgis/rest/services/base/srv_Basemap2/MapServer");
	map.addLayer(basemap2);

	var basemap3 = new esri.layers.ArcGISTiledMapServiceLayer("http://gis5.abag.ca.gov/arcgis/rest/services/imagery/Imagery_NAIP2005/MapServer", {id: 'imagery'});
	map.addLayer(basemap3);
	basemap3.hide();

	var referenceLayer1 = new esri.layers.ArcGISTiledMapServiceLayer("http://gis.abag.ca.gov/arcgis/rest/services/ref/srv_referencemap1/MapServer", {id: 'reference'});
	map.addLayer(referenceLayer1);

	var referenceLayer2 = new esri.layers.ArcGISDynamicMapServiceLayer("http://gis.abag.ca.gov/arcgis/rest/services/admin/region_Labels/MapServer");
	map.addLayer(referenceLayer2);

	var operationalLayer = new esri.layers.ArcGISDynamicMapServiceLayer("http://gis.abag.ca.gov/arcgis/rest/services/plan/pln_PriorityDevelopmentArea_mapapp/MapServer", {"opacity": 0.6});
	map.addLayer(operationalLayer);

	//Create find task with url to map service
	findTask = new esri.tasks.FindTask("http://gis.abag.ca.gov/arcgis/rest/services/plan/pln_PriorityDevelopmentArea_mapapp/MapServer");
	pdaFindTask = new esri.tasks.FindTask("http://gis.abag.ca.gov/arcgis/rest/services/plan/pln_PriorityDevelopmentArea_mapapp/MapServer");

	//Create find parameters and define known values
	findParams = new esri.tasks.FindParameters();
		findParams.contains = false;
		findParams.returnGeometry = true;
		findParams.layerIds = [0];
		findParams.searchFields = ["joinkey"];
	pdaFindParams = new esri.tasks.FindParameters();
		pdaFindParams.contains = false;
		pdaFindParams.returnGeometry = true;
		pdaFindParams.layerIds = [0];
		pdaFindParams.searchFields = ["joinkey"];

	pdaFindParams.searchText = upda;
	pdaFindTask.execute(pdaFindParams, showResults);

	//Listen for click event on the map, when the user clicks on the map call executeQueryTask
	dojo.connect(map, "onClick", executeQueryTask);

	//Build query tasks
	queryTask = new esri.tasks.QueryTask("http://gis.abag.ca.gov/arcgis/rest/services/plan/pln_PriorityDevelopmentArea_mapapp/MapServer/0");
	pqueryTask = new esri.tasks.QueryTask("http://gis.abag.ca.gov/arcgis/rest/services/plan/pln_PriorityDevelopmentArea_mapapp/MapServer/1");
	dqueryTask = new esri.tasks.QueryTask("http://gis.abag.ca.gov/arcgis/rest/services/plan/pln_PriorityDevelopmentArea_mapapp/MapServer/2");

	//Build PDA query filter for Profile tab and Population/Households/Jobs tab
	query = new esri.tasks.Query();
		query.returnGeometry = true;
		query.outFields = ["joinkey", "name", "pop2010", "pop2040", "hh2010", "hh2040", "job2010", "job2040", "ag2010", "ag2040", "mfg2010", "mfg2040", "ret2010", "ret2040", "fin2010", "fin2040", "her2010", "her2040", "oth2010", "oth2040", "numsrc"];

	//Pass the URL parameter
	var urlObject = esri.urlToObject(document.location.href);
	if (urlObject.query.pda) {
		upda = urlObject.query.pda;
	}

	dojo.connect(map, 'onLoad', function(theMap) {
		//Resize the map when the browser resizes
		dojo.connect(dijit.byId('map'), 'resize', map,map.resize);
		});
	}

	//function showLoading() {
	//	esri.show(loading);
	//	map.disableMapNavigation();
	//}

	//function hideLoading(error) {
	//	esri.hide(loading);
	//	map.enableMapNavigation();
	//}

	//SELECT MENU SECTION
	function execute(searchText, id) {
		map.infoWindow.hide();
		map.graphics.clear();
		featureSet = null;

		//Set the search text to find parameters
		findParams.searchText = searchText;
		findTask.execute(findParams, showResults);
	}

	function showResults(results) {
		//Remove all graphics on the map's graphics layer open Profile tab
		map.graphics.clear();
		map.infoWindow.hide();

		dijit.byId('attAccordion').selectChild('profile');

		var polygonSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_NONE, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_DASHDOT, new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]));

		//Build an array of attribute information and add each found graphic to the map
		var result, attribs, srcNum;
		dojo.forEach(results, function(result) {
			var graphic = result.feature;
			attribs = result.feature.attributes;
			graphic.setSymbol(polygonSymbol);
			map.graphics.add(graphic);
		});

		//Get just the polygon results
		var poly = dojo.filter(results, function(r) {
			return r.feature.geometry.type === "polygon";
		});
		if ( poly.length > 0 ) {
			//Zoom to the first polygon
			map.setExtent(poly[0].feature.geometry.getExtent().expand(2));
		} else {
			alert("No polygon results...");
		}

		var pquery = new esri.tasks.Query();
			pquery.where = "pdakey = '" + attribs.joinkey + "'";
			pquery.returnGeometry = false;
			pquery.outFields = ["pdakey", "pda_name", "jurisdiction", "status",  "primary_contact_name", "primary_contact_phone", "primary_contact_email", "planning_lead", "primary_plan_name", "netacres", "placetype_planned", "transit_service_existing", "transit_service_planned"];

		//Redirect to alternative demographics content if PDA is either new or
		//has been updated to the extent that previous numbers are no longer valid
		if (attribs.numsrc == '01') {
			document.getElementById('nonPBAText').innerHTML = "";
			document.getElementById('nonPBAText').style.visibility = "hidden";
			document.getElementById('demPaneTabs').style.visibility = "visible";
			srcNum = "Plan Bay Area, July 2013";
		} else if (attribs.numsrc == '02') {
			document.getElementById('nonPBAText').innerHTML = "";
			document.getElementById('nonPBAText').style.visibility = "hidden";
			document.getElementById('demPaneTabs').style.visibility = "visible";
			srcNum = "Plan Bay Area forecast update, February 2015";
		} else {
			document.getElementById('nonPBAText').style.visibility = "visible";
			document.getElementById('nonPBAText').innerHTML = "<p>This Priority Development Area (PDA) is either a new PDA or an existing one that has had significant boundary changes made to it. In either case, there are no population, household, or job numbers to display.</p><p>Once this PDA has been run through the model, this application will be updated with the resulting demographic output.</p>";
			document.getElementById('demPaneTabs').style.visibility = "hidden";
		}

		pqueryTask.execute(pquery, pfeatureSet);

		//Calculate 2010 job sector percentages
		var ag10Pct = Math.round((attribs.ag2010 / attribs.job2010) * 100);
			mfg10Pct = Math.round((attribs.mfg2010 / attribs.job2010) * 100);
			ret10Pct = Math.round((attribs.ret2010 / attribs.job2010) * 100);
			fin10Pct = Math.round((attribs.fin2010 / attribs.job2010) * 100);
			her10Pct = Math.round((attribs.her2010 / attribs.job2010) * 100);
			oth10Pct = Math.round((attribs.oth2010 / attribs.job2010) * 100);

		//Calculate 2040 job sector percentages
		var ag40Pct = Math.round((attribs.ag2040 / attribs.job2040) * 100);
			mfg40Pct = Math.round((attribs.mfg2040 / attribs.job2040) * 100);
			ret40Pct = Math.round((attribs.ret2040 / attribs.job2040) * 100);
			fin40Pct = Math.round((attribs.fin2040 / attribs.job2040) * 100);
			her40Pct = Math.round((attribs.her2040 / attribs.job2040) * 100);
			oth40Pct = Math.round((attribs.oth2040 / attribs.job2040) * 100);

		//Attributes for Population/Housing/Jobs section - 2010 tab
		var ge = "<table id='getab'><tr><td><b>Population:</b> " + dojo.number.format(attribs.pop2010) + "</td></tr>"
			+ "<tr><td><b>Households:</b> " + dojo.number.format(attribs.hh2010) + "</td></tr>"
			+ "<tr><td><b>Jobs:</b> " + dojo.number.format(attribs.job2010) + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b><u>Job Sector Breakdown</u></b></td></tr>"
			+ "<tr><td><b>Agricultural & Natural Resources:</b> " + dojo.number.format(attribs.ag2010) + " (" + ag10Pct + "%)</td></tr>"
			+ "<tr><td><b>Manufacturing, Wholesale, & Transportation:</b> " + dojo.number.format(attribs.mfg2010) + " (" + mfg10Pct + "%)</td></tr>"
			+ "<tr><td><b>Retail:</b> " + dojo.number.format(attribs.ret2010) + " (" + ret10Pct + "%)</td></tr>"
			+ "<tr><td><b>Financial & Professional Services:</b> " + dojo.number.format(attribs.fin2010) + " (" + fin10Pct + "%)</td></tr>"
			+ "<tr><td><b>Health, Educational, & Recreational Services:</b> " + dojo.number.format(attribs.her2010) + " (" + her10Pct + "%)</td></tr>"
			+ "<tr><td><b>Other:</b> " + dojo.number.format(attribs.oth2010) + " (" + oth10Pct + "%)</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><font color='#0000CC'><b>Source:</b></font> " + srcNum + "</td></tr>";
		ge = ge + "</table>";

		//Attributes for Population/Housing/Jobs section - 2040 tab
		var gz = "<table id='gztab'><tr><td><b>Population:</b> " + dojo.number.format(attribs.pop2040) + "</td></tr>"
			+ "<tr><td><b>Households:</b> " + dojo.number.format(attribs.hh2040) + "</td></tr>"
			+ "<tr><td><b>Jobs:</b> " + dojo.number.format(attribs.job2040) + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b><u>Job Sector Breakdown</u></b></td></tr>"
			+ "<tr><td><b>Agricultural & Natural Resources:</b> " + dojo.number.format(attribs.ag2040) + " (" + ag40Pct + "%)</td></tr>"
			+ "<tr><td><b>Manufacturing, Wholesale, & Transportation:</b> " + dojo.number.format(attribs.mfg2040) + " (" + mfg40Pct + "%)</td></tr>"
			+ "<tr><td><b>Retail:</b> " + dojo.number.format(attribs.ret2040) + " (" + ret40Pct + "%)</td></tr>"
			+ "<tr><td><b>Financial & Professional Services:</b> " + dojo.number.format(attribs.fin2040) + " (" + fin40Pct + "%)</td></tr>"
			+ "<tr><td><b>Health, Educational, & Recreational Services:</b> " + dojo.number.format(attribs.her2040) + " (" + her40Pct + "%)</td></tr>"
			+ "<tr><td><b>Other:</b> " + dojo.number.format(attribs.oth2040) + " (" + oth40Pct + "%)</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><font color='#0000CC'><b>Source:</b></font> " + srcNum + "</td></tr>";
		gz = gz + "</table>";

		//Insert tables into appropriate panels and tabs
		document.getElementById('existing').innerHTML = ge;
		document.getElementById('projected').innerHTML = gz;

		pqueryTask.execute(pquery, pfeatureSet);
	}

	//MAP CLICK SECTION
	function executeQueryTask(evt) {
		map.infoWindow.hide();
		featureSet = null;

		//The click event returns the evt point where the user clicked on the map
		//This contains the mapPoint (esri.geometry.point) and the screenPoint (pixel xy) where the user clicked

		//Set query geometry = to evt.mapPoint geometry
		query.geometry = evt.mapPoint;

		//Execute task and call either showFeature or showFeatureSet on completion
		queryTask.execute(query, function(fset) {
			if (fset.features.length === 1) {
				map.graphics.clear();
				showFeature(fset.features[0],evt);
			}
			else if (fset.features.length !== 0) {
				showFeatureSet(fset,evt);
			}
		});
	}

	function showFeature(feature,evt) {
		//Remove all graphics on the map's graphics layer open Profile tab
		map.graphics.clear();
		map.infoWindow.hide();
		dijit.byId('attAccordion').selectChild('profile');

		//Set symbol
		var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_NONE, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_DASHDOT, new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]));
		feature.setSymbol(symbol);

		//Construct content for query.where statements
		var attr = feature.attributes;

		var pquery = new esri.tasks.Query();
			pquery.where = "pdakey = '" + attr.joinkey + "'";
			pquery.returnGeometry = false;
			pquery.outFields = ["pdakey", "pda_name", "jurisdiction", "status",  "primary_contact_name", "primary_contact_phone", "primary_contact_email", "primary_plan_name", "netacres", "placetype_planned", "transit_service_existing"];

		var srcNumM;
		//Redirect to alternative demographics content if PDA is either new or
		//has been updated to the extent that previous numbers are no longer valid
		if (attr.numsrc == '01') {
			document.getElementById('nonPBAText').innerHTML = "";
			document.getElementById('nonPBAText').style.visibility = "hidden";
			document.getElementById('demPaneTabs').style.visibility = "visible";
			srcNumM = "Plan Bay Area, July 2013";
		} else if (attr.numsrc == '02') {
			document.getElementById('nonPBAText').innerHTML = "";
			document.getElementById('nonPBAText').style.visibility = "hidden";
			document.getElementById('demPaneTabs').style.visibility = "visible";
			srcNumM = "Plan Bay Area forecast update, February 2015";
		} else {
			document.getElementById('nonPBAText').style.visibility = "visible";
			document.getElementById('nonPBAText').innerHTML = "<p>This Priority Development Area (PDA) is either a new PDA or an existing one that has had significant boundary changes made to it. In either case, there are no population, household, or job numbers to display.</p><p>Once this PDA has been run through the model, this application will be updated with the resulting demographic output.</p>";
			document.getElementById('demPaneTabs').style.visibility = "hidden";
		}

		map.graphics.add(feature);
		map.setExtent(feature.geometry.getExtent().expand(1.5));

		pqueryTask.execute(pquery, pfeatureSet);

		//Calculate 2010 job sector percentages
		var agm10Pct = Math.round((attr.ag2010 / attr.job2010) * 100);
			mfgm10Pct = Math.round((attr.mfg2010 / attr.job2010) * 100);
			retm10Pct = Math.round((attr.ret2010 / attr.job2010) * 100);
			finm10Pct = Math.round((attr.fin2010 / attr.job2010) * 100);
			herm10Pct = Math.round((attr.her2010 / attr.job2010) * 100);
			othm10Pct = Math.round((attr.oth2010 / attr.job2010) * 100);

		//Calculate 2040 job sector percentages
		var agm40Pct = Math.round((attr.ag2040 / attr.job2040) * 100);
			mfgm40Pct = Math.round((attr.mfg2040 / attr.job2040) * 100);
			retm40Pct = Math.round((attr.ret2040 / attr.job2040) * 100);
			finm40Pct = Math.round((attr.fin2040 / attr.job2040) * 100);
			herm40Pct = Math.round((attr.her2040 / attr.job2040) * 100);
			othm40Pct = Math.round((attr.oth2040 / attr.job2040) * 100);

		//Attributes for Population/Housing/Jobs section - 2010 tab
		var e = "<table id='getab'><tr><td><b>Population:</b> " + dojo.number.format(attr.pop2010) + "</td></tr>"
			+ "<tr><td><b>Households:</b> " + dojo.number.format(attr.hh2010) + "</td></tr>"
			+ "<tr><td><b>Jobs:</b> " + dojo.number.format(attr.job2010) + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b><u>Job Sector Breakdown</u></b></td></tr>"
			+ "<tr><td><b>Agricultural & Natural Resources:</b> " + dojo.number.format(attr.ag2010) + " (" + agm10Pct + "%)</td></tr>"
			+ "<tr><td><b>Manufacturing, Wholesale, & Transportation:</b> " + dojo.number.format(attr.mfg2010) + " (" + mfgm10Pct + "%)</td></tr>"
			+ "<tr><td><b>Retail:</b> " + dojo.number.format(attr.ret2010) + " (" + retm10Pct + "%)</td></tr>"
			+ "<tr><td><b>Financial & Professional Services:</b> " + dojo.number.format(attr.fin2010) + " (" + finm10Pct + "%)</td></tr>"
			+ "<tr><td><b>Health, Educational, & Recreational Services:</b> " + dojo.number.format(attr.her2010) + " (" + herm10Pct + "%)</td></tr>"
			+ "<tr><td><b>Other:</b> " + dojo.number.format(attr.oth2010) + " (" + othm10Pct + "%)</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><font color='#0000CC'><b>Source:</b></font> " + srcNumM + "</td></tr>";
		e = e + "</table>";

		//Attributes for Population/Housing/Jobs section - 2040 tab
		var z = "<table id='gztab'><tr><td><b>Population:</b> " + dojo.number.format(attr.pop2040) + "</td></tr>"
			+ "<tr><td><b>Households:</b> " + dojo.number.format(attr.hh2040) + "</td></tr>"
			+ "<tr><td><b>Jobs:</b> " + dojo.number.format(attr.job2040) + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b><u>Job Sector Breakdown</u></b></td></tr>"
			+ "<tr><td><b>Agricultural & Natural Resources:</b> " + dojo.number.format(attr.ag2040) + " (" + agm40Pct + "%)</td></tr>"
			+ "<tr><td><b>Manufacturing, Wholesale, & Transportation:</b> " + dojo.number.format(attr.mfg2040) + " (" + mfgm40Pct + "%)</td></tr>"
			+ "<tr><td><b>Retail:</b> " + dojo.number.format(attr.ret2040) + " (" + retm40Pct + "%)</td></tr>"
			+ "<tr><td><b>Financial & Professional Services:</b> " + dojo.number.format(attr.fin2040) + " (" + finm40Pct + "%)</td></tr>"
			+ "<tr><td><b>Health, Educational, & Recreational Services:</b> " + dojo.number.format(attr.her2040) + " (" + herm40Pct + "%)</td></tr>"
			+ "<tr><td><b>Other:</b> " + dojo.number.format(attr.oth2040) + " (" + othm40Pct + "%)</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><font color='#0000CC'><b>Source:</b></font> " + srcNumM + "</td></tr>";
		z = z + "</table>";

		map.graphics.add(feature);
		map.setExtent(feature.geometry.getExtent().expand(1.5));

		//Insert tables into appropriate tabs
		document.getElementById('existing').innerHTML = e;
		document.getElementById('projected').innerHTML = z;

		pqueryTask.execute(pquery, pfeatureSet);
	}

	//Fill Profile tab
	function pfeatureSet(pfset) {
		var presultFeatures = pfset.features;
		for (var p=0, pt=presultFeatures.length; p<pt; p++) {
			var pgraphic = presultFeatures[p];
			map.graphics.add(pgraphic);
		}
		var pattr = pgraphic.attributes;

		var dquery = new esri.tasks.Query();
			dquery.where = "pdakey = '" + pattr.pdakey + "'";
			dquery.returnGeometry = false;
			dquery.outFields = ["pdakey", "areaover", "cominvol"];

		//Attributes for Profile section
		var p = "<table id='profile'><tr><td><h2>" + pattr.pda_name + "<br/> (" + pattr.jurisdiction + ")</h2></td></tr>"
			+ "<tr><td><b>Plan Status:</b> " + pattr.status + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b>Primary Planning Document:</b> " + pattr.primary_plan_name + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b>Net acres:</b> " + dojo.number.format(pattr.netacres,{places:0}) + "</td></tr>"
			+ "<tr><td><b>Future Place Type:</b> " + pattr.placetype_planned + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b><u>PDA Transit</u></b></td></tr>"
			+ "<tr><td>" + pattr.transit_service_existing + "</td></tr>"
			+ "<tr><td><br/></td></tr>"
			+ "<tr><td><b><u>Contact Information</u></b></td></tr>"
			+ "<tr><td><b>Name:</b> " + pattr.primary_contact_name + "</td></tr>"
			+ "<tr><td><b>Phone:</b> " + pattr.primary_contact_phone + "</td></tr>"
			+ "<tr><td><b>E-mail:</b> <a href='mailto:{pattr.primary_contact_email}'>" + pattr.primary_contact_email + "</a></td></tr>";
		p = p + "</table>";

		pdaTitle = pattr.pda_name;
		var layoutTitle = [];
			layoutTitle.push(pdaTitle);

		//Insert table into profile tab
		document.getElementById('profile').innerHTML = p;

		dqueryTask.execute(dquery, dfeatureSet);
	}

	//Fill Description tabs
	function dfeatureSet(dfset) {
		var dresultFeatures = dfset.features;
		for (var d=0, dt=dresultFeatures.length; d<dt; d++) {
			var dgraphic = dresultFeatures[d];
			map.graphics.add(dgraphic);
		}
		var dattr = dgraphic.attributes;

		//Attributes for Area Overview section
		var ao = "<table id='aotab'><tr><td><h3>Area Overview</h3>"
			+ dattr.areaover + "</td></tr>";
		ao = ao + "</table>";

		//Attributes for Public Outreach section
		var ci = "<table id='citab'><tr><td><h3>Public Outreach</h3>"
			+ dattr.cominvol + "</td></tr>";
		ci = ci + "</table>";

		//Insert tables into description tabs
		document.getElementById('areaover').innerHTML = ao;
		document.getElementById('comminvolv').innerHTML = ci;
	}

	function showFeatureSet(fset,evt) {
		//Remove all graphics on the maps graphics layer
		map.graphics.clear();
		var screenPoint = evt.screenPoint;

		featureSet = fset;

		var numFeatures = featureSet.features.length;

		//QueryTask returns a featureSet.  Loop through features in the featureSet and add them to the infowindow.
		var title = "You have selected " + numFeatures + " PDAs.";
		var content = "Please select desired PDA from the choices below:<br /><br />";

		for (var i=0; i<numFeatures; i++) {
			var graphic = featureSet.features[i];
			content = content + graphic.attributes.name + "(<A href='#' onclick='showFeature(featureSet.features[" + i + "]);'>show</A>)<br /><br />";
		}

		map.infoWindow.setTitle(title);
		map.infoWindow.setContent(content);
		map.infoWindow.show(screenPoint,map.getInfoWindowAnchor(evt.screenPoint));
	}

	function clearGraphics() {
		//Remove all graphics on the map's graphics layer and revert tabs to default
		map.graphics.clear();
		pdaTitle = null;
		map.infoWindow.hide();
		document.getElementById('profile').innerHTML = "Click Priority Development Area on map, or select from PDA menu, for profile.";
		document.getElementById('areaover').innerHTML = "Click Priority Development Area on map, or select from PDA menu, for area overview description.";
		document.getElementById('comminvolv').innerHTML = "Click Priority Development Area on map, or select from PDA menu, for community involvement description.";
		document.getElementById('existing').innerHTML = "Click Priority Development Area on map, or select from PDA menu, for existing population, households, and jobs data.";
		document.getElementById('projected').innerHTML = "Click Priority Development Area on map, or select from PDA menu, for projected population, households, and jobs data.";
		dijit.byId('attAccordion').selectChild('profile');
	}

	//function openTerrainBL() {
	//	map.getLayer("reference").setVisibility(true);
	//	map.getLayer("imagery").setVisibility(false);
	//}

	//function openImageryBL() {
	//	map.getLayer("reference").setVisibility(false);
	//	map.getLayer("imagery").setVisibility(true);
	//}

	function openLayerInfo() {
		dijit.byId('layerInfo').show();
	}

	function closeLayerInfo() {
		dijit.byId('layerInfo').hide();
	}

	dojo.addOnLoad(init);
