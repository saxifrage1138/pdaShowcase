//QUERYBOOKMARK WIDGET
//October 2014
//Click name from list and zoom to query polygon

//Include
dojo.require("esri.tasks.query");
dojo.require("esri.dijit.InfoWindow");

//OPEN findBOOKMARK DIVS
function openCountyList() { dijit.byId('countyList').show(); }
//Alameda County
function openALJurisPDAList() {
	dijit.byId('alJurisPDAList').show();
	document.getElementById('alJuris').style.display = "block";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openALAPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "block";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openALCPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "block";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openALBPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "block";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openBERPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "block";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openDUBPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "block";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openEMEPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "block";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openFREPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "block";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openHAYPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "block";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openLIVPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "block";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openNEWPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "block";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openOKDPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "block";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openPLEPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "block";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "none";
}
function openSLEPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "block";
	document.getElementById('uniPDA').style.display = "none";
}
function openUNIPDAList() {
	document.getElementById('alJuris').style.display = "none";
	document.getElementById('alaPDA').style.display = "none";
	document.getElementById('alcPDA').style.display = "none";
	document.getElementById('albPDA').style.display = "none";
	document.getElementById('berPDA').style.display = "none";
	document.getElementById('dubPDA').style.display = "none";
	document.getElementById('emePDA').style.display = "none";
	document.getElementById('frePDA').style.display = "none";
	document.getElementById('hayPDA').style.display = "none";
	document.getElementById('livPDA').style.display = "none";
	document.getElementById('newPDA').style.display = "none";
	document.getElementById('okdPDA').style.display = "none";
	document.getElementById('plePDA').style.display = "none";
	document.getElementById('slePDA').style.display = "none";
	document.getElementById('uniPDA').style.display = "block";
}

//Contra Costa County
function openCCJurisPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "block";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openANTPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "block";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openCONPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "block";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openCCCPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "block";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openDANPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "block";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openELCPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "block";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openHERPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "block";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openLAFPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "block";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openMARPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "block";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openMORPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "block";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openOAKPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "block";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openORIPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "block";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openPINPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "block";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openPITPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "block";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openPLHPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "block";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openRICPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "block";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openSARPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "block";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}
function openSPAPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "block";
	document.getElementById('walPDA').style.display = "none";
}
function openWALPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "block";
}
function openWCCPDAList() {
	dijit.byId('ccJurisPDAList').show();
	document.getElementById('ccJuris').style.display = "none";
	document.getElementById('antPDA').style.display = "none";
	document.getElementById('conPDA').style.display = "none";
	document.getElementById('cccPDA').style.display = "none";
	document.getElementById('danPDA').style.display = "none";
	document.getElementById('elcPDA').style.display = "none";
	document.getElementById('herPDA').style.display = "none";
	document.getElementById('lafPDA').style.display = "none";
	document.getElementById('marPDA').style.display = "none";
	document.getElementById('morPDA').style.display = "none";
	document.getElementById('oakPDA').style.display = "none";
	document.getElementById('oriPDA').style.display = "none";
	document.getElementById('pinPDA').style.display = "none";
	document.getElementById('pitPDA').style.display = "none";
	document.getElementById('plhPDA').style.display = "none";
	document.getElementById('ricPDA').style.display = "none";
	document.getElementById('sarPDA').style.display = "none";
	document.getElementById('spaPDA').style.display = "none";
	document.getElementById('walPDA').style.display = "none";
}

//Marin County
function openMAJurisPDAList() {
	dijit.byId('maJurisPDAList').show();
	document.getElementById('maJuris').style.display = "block";
	document.getElementById('mcoPDA').style.display = "none";
	document.getElementById('sraPDA').style.display = "none";
}
function openMCOPDAList() {
	dijit.byId('maJurisPDAList').show();
	document.getElementById('maJuris').style.display = "none";
	document.getElementById('mcoPDA').style.display = "block";
	document.getElementById('sraPDA').style.display = "none";
}
function openSRAPDAList() {
	dijit.byId('maJurisPDAList').show();
	document.getElementById('maJuris').style.display = "none";
	document.getElementById('mcoPDA').style.display = "none";
	document.getElementById('sraPDA').style.display = "block";
}

//Napa County
function openNAJurisPDAList() {
	dijit.byId('naJurisPDAList').show();
	document.getElementById('naJuris').style.display = "block";
	document.getElementById('acaPDA').style.display = "none";
	document.getElementById('napPDA').style.display = "none";
}
function openACAPDAList() {
	dijit.byId('naJurisPDAList').show();
	document.getElementById('naJuris').style.display = "none";
	document.getElementById('acaPDA').style.display = "block";
	document.getElementById('napPDA').style.display = "none";
}
function openNAPPDAList() {
	dijit.byId('naJurisPDAList').show();
	document.getElementById('naJuris').style.display = "none";
	document.getElementById('acaPDA').style.display = "none";
	document.getElementById('napPDA').style.display = "block";
}

//City and County of San Francisco
function openSFPDAList() { dijit.byId('sfPDAList').show(); }

//San Mateo County
function openSMJurisPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "block";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openBELPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "block";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openBRIPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "block";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openBURPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "block";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openCOLPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "block";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openDALPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "block";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openEPAPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "block";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openMENPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "block";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openMILPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "block";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openRWCPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "block";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openSBRPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "block";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openSCAPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "block";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openSMAPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "block";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "none";
}
function openSMCPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "block";
	document.getElementById('ssfPDA').style.display = "none";
}
function openSSFPDAList() {
	dijit.byId('smJurisPDAList').show();
	document.getElementById('smJuris').style.display = "none";
	document.getElementById('belPDA').style.display = "none";
	document.getElementById('briPDA').style.display = "none";
	document.getElementById('burPDA').style.display = "none";
	document.getElementById('colPDA').style.display = "none";
	document.getElementById('dalPDA').style.display = "none";
	document.getElementById('epaPDA').style.display = "none";
	document.getElementById('menPDA').style.display = "none";
	document.getElementById('milPDA').style.display = "none";
	document.getElementById('rwcPDA').style.display = "none";
	document.getElementById('sbrPDA').style.display = "none";
	document.getElementById('scaPDA').style.display = "none";
	document.getElementById('smaPDA').style.display = "none";
	document.getElementById('smcPDA').style.display = "none";
	document.getElementById('ssfPDA').style.display = "block";
}

//Santa Clara County
function openSCJurisPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "block";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openCAMPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "block";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openCUPPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "block";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openGILPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "block";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openLATPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "block";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openMPTPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "block";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openMOHPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "block";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openMVWPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "block";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openPALPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "block";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openSJOPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "block";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('vtaPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "none";
}
function openSCLPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "block";
	document.getElementById('sunPDA').style.display = "none";
}
function openSUNPDAList() {
	dijit.byId('scJurisPDAList').show();
	document.getElementById('scJuris').style.display = "none";
	document.getElementById('camPDA').style.display = "none";
	document.getElementById('cupPDA').style.display = "none";
	document.getElementById('gilPDA').style.display = "none";
	document.getElementById('latPDA').style.display = "none";
	document.getElementById('mptPDA').style.display = "none";
	document.getElementById('mohPDA').style.display = "none";
	document.getElementById('mvwPDA').style.display = "none";
	document.getElementById('palPDA').style.display = "none";
	document.getElementById('sjoPDA').style.display = "none";
	document.getElementById('sclPDA').style.display = "none";
	document.getElementById('sunPDA').style.display = "block";
}

//Solano County
function openSLJurisPDAList() {
	dijit.byId('slJurisPDAList').show();
	document.getElementById('slJuris').style.display = "block";
	document.getElementById('benPDA').style.display = "none";
	document.getElementById('dixPDA').style.display = "none";
	document.getElementById('faiPDA').style.display = "none";
	document.getElementById('suiPDA').style.display = "none";
	document.getElementById('vacPDA').style.display = "none";
	document.getElementById('valPDA').style.display = "none";
}
function openBENPDAList() {
	dijit.byId('slJurisPDAList').show();
	document.getElementById('slJuris').style.display = "none";
	document.getElementById('benPDA').style.display = "block";
	document.getElementById('dixPDA').style.display = "none";
	document.getElementById('faiPDA').style.display = "none";
	document.getElementById('suiPDA').style.display = "none";
	document.getElementById('vacPDA').style.display = "none";
	document.getElementById('valPDA').style.display = "none";
}
function openDIXPDAList() {
	dijit.byId('slJurisPDAList').show();
	document.getElementById('slJuris').style.display = "none";
	document.getElementById('benPDA').style.display = "none";
	document.getElementById('dixPDA').style.display = "block";
	document.getElementById('faiPDA').style.display = "none";
	document.getElementById('suiPDA').style.display = "none";
	document.getElementById('vacPDA').style.display = "none";
	document.getElementById('valPDA').style.display = "none";
}
function openFAIPDAList() {
	dijit.byId('slJurisPDAList').show();
	document.getElementById('slJuris').style.display = "none";
	document.getElementById('benPDA').style.display = "none";
	document.getElementById('dixPDA').style.display = "none";
	document.getElementById('faiPDA').style.display = "block";
	document.getElementById('suiPDA').style.display = "none";
	document.getElementById('vacPDA').style.display = "none";
	document.getElementById('valPDA').style.display = "none";
}
function openSUIPDAList() {
	dijit.byId('slJurisPDAList').show();
	document.getElementById('slJuris').style.display = "none";
	document.getElementById('benPDA').style.display = "none";
	document.getElementById('dixPDA').style.display = "none";
	document.getElementById('faiPDA').style.display = "none";
	document.getElementById('suiPDA').style.display = "block";
	document.getElementById('vacPDA').style.display = "none";
	document.getElementById('valPDA').style.display = "none";
}
function openVACPDAList() {
	dijit.byId('slJurisPDAList').show();
	document.getElementById('slJuris').style.display = "none";
	document.getElementById('benPDA').style.display = "none";
	document.getElementById('dixPDA').style.display = "none";
	document.getElementById('faiPDA').style.display = "none";
	document.getElementById('suiPDA').style.display = "none";
	document.getElementById('vacPDA').style.display = "block";
	document.getElementById('valPDA').style.display = "none";
}
function openVALPDAList() {
	dijit.byId('slJurisPDAList').show();
	document.getElementById('slJuris').style.display = "none";
	document.getElementById('benPDA').style.display = "none";
	document.getElementById('dixPDA').style.display = "none";
	document.getElementById('faiPDA').style.display = "none";
	document.getElementById('suiPDA').style.display = "none";
	document.getElementById('vacPDA').style.display = "none";
	document.getElementById('valPDA').style.display = "block";
}

//Sonoma County
function openSNJurisPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "block";
	document.getElementById('cloPDA').style.display = "none";
	document.getElementById('cotPDA').style.display = "none";
	document.getElementById('petPDA').style.display = "none";
	document.getElementById('rohPDA').style.display = "none";
	document.getElementById('sebPDA').style.display = "none";
	document.getElementById('sroPDA').style.display = "none";
	document.getElementById('winPDA').style.display = "none";
}
function openCLOPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "none";
	document.getElementById('cloPDA').style.display = "block";
	document.getElementById('cotPDA').style.display = "none";
	document.getElementById('petPDA').style.display = "none";
	document.getElementById('rohPDA').style.display = "none";
	document.getElementById('sebPDA').style.display = "none";
	document.getElementById('sroPDA').style.display = "none";
	document.getElementById('winPDA').style.display = "none";
}
function openCOTPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "none";
	document.getElementById('cloPDA').style.display = "none";
	document.getElementById('cotPDA').style.display = "block";
	document.getElementById('petPDA').style.display = "none";
	document.getElementById('rohPDA').style.display = "none";
	document.getElementById('sebPDA').style.display = "none";
	document.getElementById('sroPDA').style.display = "none";
	document.getElementById('winPDA').style.display = "none";
}
function openPETPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "none";
	document.getElementById('cloPDA').style.display = "none";
	document.getElementById('cotPDA').style.display = "none";
	document.getElementById('petPDA').style.display = "block";
	document.getElementById('rohPDA').style.display = "none";
	document.getElementById('sebPDA').style.display = "none";
	document.getElementById('sroPDA').style.display = "none";
	document.getElementById('winPDA').style.display = "none";
}
function openROHPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "none";
	document.getElementById('cloPDA').style.display = "none";
	document.getElementById('cotPDA').style.display = "none";
	document.getElementById('petPDA').style.display = "none";
	document.getElementById('rohPDA').style.display = "block";
	document.getElementById('sebPDA').style.display = "none";
	document.getElementById('sroPDA').style.display = "none";
	document.getElementById('winPDA').style.display = "none";
}
function openSEBPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "none";
	document.getElementById('cloPDA').style.display = "none";
	document.getElementById('cotPDA').style.display = "none";
	document.getElementById('petPDA').style.display = "none";
	document.getElementById('rohPDA').style.display = "none";
	document.getElementById('sebPDA').style.display = "block";
	document.getElementById('sroPDA').style.display = "none";
	document.getElementById('winPDA').style.display = "none";
}
function openSROPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "none";
	document.getElementById('cloPDA').style.display = "none";
	document.getElementById('cotPDA').style.display = "none";
	document.getElementById('petPDA').style.display = "none";
	document.getElementById('rohPDA').style.display = "none";
	document.getElementById('sebPDA').style.display = "none";
	document.getElementById('sroPDA').style.display = "block";
	document.getElementById('winPDA').style.display = "none";
}
function openWINPDAList() {
	dijit.byId('snJurisPDAList').show();
	document.getElementById('snJuris').style.display = "none";
	document.getElementById('cloPDA').style.display = "none";
	document.getElementById('cotPDA').style.display = "none";
	document.getElementById('petPDA').style.display = "none";
	document.getElementById('rohPDA').style.display = "none";
	document.getElementById('sebPDA').style.display = "none";
	document.getElementById('sroPDA').style.display = "none";
	document.getElementById('winPDA').style.display = "block";
}

//FUNCTIONS FOR COUNTY QUERY
function queryCounty(searchText) {
	map.infoWindow.hide();

	//Create query task
	var countyQueryTask = new esri.tasks.QueryTask("http://gis.abag.ca.gov/arcgis/rest/services/admin/abag_County/MapServer/0");

	//Build county query filter
	var coQuery = new esri.tasks.Query();
	coQuery.where = "county_fip = " + searchText;
	coQuery.outFields = ["name"];
	coQuery.returnGeometry = true;

	countyQueryTask.execute(coQuery, coShowResults);
}

function coShowResults(featureSet) {
	//Convert feature set to graphic
	var coFeature = featureSet.features;
	var coGraphic = coFeature[0];

	//map.graphics.add(coGraphic);
	map.setExtent(coGraphic.geometry.getExtent().expand(1.5));
}
