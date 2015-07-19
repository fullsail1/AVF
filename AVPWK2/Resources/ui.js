var popUI = function(obj) {
	console.log(obj);
	var win = Ti.UI.createWindow({
		//layout : "vertical",
		backgroundColor : "yellow"
		//backgroundImage: obj.icon_url
	});

	var urlimage = Ti.UI.createImageView({
		image : obj.icon_url,
		ANIMATION_CURVE_EASE_IN_OUT : 4,
		top : 150,
		center: "left",
		height: 100,
		width: 50
	});
	var tempcondition = Ti.UI.createLabel({
		color : "green",
		text : obj.icon,
		top : 350,
		right : 30
		
	});
	var city = Ti.UI.createLabel({
		color : "green",
		text : obj.city,
		top : 100,
		left : 30
	});
	var state = Ti.UI.createLabel({
		color : "green",
		text : obj.state,
		top : 100,
		right : 30,
		textid : "State"
	});
	var temp = Ti.UI.createLabel({
	color: "red",
	borderColor: "orange",
	text: obj.temp_f,
	top: 250,
	center: 0,
	left: 125,
	font: {
		fontSize : 80,
		fontFamily : "arial",
	}
});
var title = Ti.UI.createLabel({
	color: "green",
	//text: obj.temp_f,
	top: 30,
	//center: 0,
	text: "DA weather APP",
	font: {
		fontSize : 30,
		fontFamily : "arial",
	}
});
var wind = Ti.UI.createLabel({
	color: "green",
	text : obj.wind_dir,
	top : 350,
	left: 30
});

win.add(title);
win.add(wind);
win.add(temp);
win.add(state);
win.add(city);
win.add(urlimage);
win.add(tempcondition);
win.open();

};
exports.popUI = popUI;

