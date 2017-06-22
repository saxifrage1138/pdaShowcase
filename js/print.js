//PRINT WIDGET
//September 2014
//Designate templates and print map to PDF

//Include printing dijit
dojo.require("esri.dijit.Print");
dojo.require("esri.tasks.PrintTemplate");
dojo.require("esri.arcgis.utils");

function exportMap() {
	dojo.empty("btnPrint");
	var t = buildTemplates();

	//Build the printer widget
	var printer = new esri.dijit.Print({
		"map": map,
		"url": "http://gis.abag.ca.gov/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
		"templates": t
	}, dojo.byId("btnPrint"));
	printer.startup();
	dijit.byId('printForm').show();
}

function buildTemplates() {
	var templates = [];

	var landscapeLet = new esri.tasks.PrintTemplate();
		landscapeLet.label = "Landscape Letter (PDF)";
		landscapeLet.layout = "pda_Letter_Landscape";
		landscapeLet.layoutOptions = {
			"authorText": "ABAG GIS",
			"titleText": pdaTitle + " PDA",
			"dpi": "200"
		};
		landscapeLet.format = "PDF";
		landscapeLet.preserveScale = false;

	var portraitLet = new esri.tasks.PrintTemplate();
		portraitLet.label = "Portrait Letter (PDF)";
		portraitLet.layout = "pda_Letter_Portrait";
		portraitLet.layoutOptions = {
			"authorText": "ABAG GIS",
			"titleText": pdaTitle + " PDA",
			"dpi": "200"
		};
		portraitLet.format = "PDF";
		portraitLet.preserveScale = false;
	
	var landscapeTab = new esri.tasks.PrintTemplate();
		landscapeTab.label = "Landscape 11x17 (PDF)";
		landscapeTab.layout = "pda_Tabloid_Landscape";
		landscapeTab.layoutOptions = {
			"authorText": "ABAG GIS",
			"titleText": pdaTitle + " PDA",
			"dpi": "200"
		};
		landscapeTab.format = "PDF";
		landscapeTab.preserveScale = true;

	var portraitTab = new esri.tasks.PrintTemplate();
		portraitTab.label = "Portrait 11x17 (PDF)";
		portraitTab.layout = "pda_Tabloid_Portrait";
		portraitTab.layoutOptions = {
			"authorText": "ABAG GIS",
			"titleText": pdaTitle + " PDA",
			"dpi": "200"
		};
		portraitTab.format = "PDF";
		portraitTab.preserveScale = true;

	var mapOnlyLand = new esri.tasks.PrintTemplate();
		mapOnlyLand.label = "Map Only (Landscape Image)";
		mapOnlyLand.layout = "MAP_ONLY";
		mapOnlyLand.exportOptions = {
			width: 1046,
			height: 762,
			dpi: 96
		};
		mapOnlyLand.format = "PNG32";

	var mapOnlyPort = new esri.tasks.PrintTemplate();
		mapOnlyPort.label = "Map Only (Portrait Image)";
		mapOnlyPort.layout = "MAP_ONLY";
		mapOnlyPort.exportOptions = {
			width: 762,
			height: 1046,
			dpi: 96
		};
		mapOnlyPort.format = "PNG32";
	
	templates.push(landscapeLet);
	templates.push(portraitLet);
	templates.push(landscapeTab);
	templates.push(portraitTab);
	templates.push(mapOnlyLand);
	templates.push(mapOnlyPort);
	
	return templates;
}

function closePrintForm() {
	dijit.byId('printForm').hide();
}
