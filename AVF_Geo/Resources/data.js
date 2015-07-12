// test that the information cam to the page

var getData = function(lat, lon) {

	// now pass , extract, capture other info

	var url = "http://api.wunderground.com/api/41a5a98190c0ff98/geolookup/conditions/q/" + lat + "," + lon + ".json";
	var client = Titanium.Network.createHTTPClient({
		onload : function(e) {
			var json = JSON.parse(this.responseText);
			var obj = {
				temp_f : Math.floor(json.current_observation.temp_f),
				localtime : json.current_observation.local_time_rfc82,
				 uv: json.current_observation.uv,
				city : json.location.city,
				state : json.location.state,
				wind_dir : json.current_observation.wind_dir,
				icon : json.current_observation.icon,
				icon_url: json.current_observation.icon_url
			};
			var UI = require("ui");
			UI.buildUi(obj);
			// console.log(obj);
		}
	});
	client.open("GET", url);
	client.send();
	console.log(url);

};
exports.getData = getData;
