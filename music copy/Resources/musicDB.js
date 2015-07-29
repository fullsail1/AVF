//var ui = require("musicapi");

if (Ti.Network.online){
	m.getData();
	//cloudslogin();
} else {
	alert("CONNECTION NO DEY");
	//LOAD from local
	var loadlocal = require("localstorage");
	loadlocal.r();
}
