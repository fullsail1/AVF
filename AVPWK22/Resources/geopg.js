// var data = require("data");

var getGeo = function() {
	console.log("geo");
	if (Ti.Geolocation.AUTHORIZATION_AUTHORIZED) {
		Ti.Geolocation.getCurrentPosition(function(e) {
			var data = require("data");

			if (Ti.Platform.osname === "android") {
				var lat = 37.78583526611328;
				var lon = -122.4064178466797;
				data.getData(lat, lon);
			} else {
				var lat = e.coords.latitude;
				var lon = e.coords.longitude;
				data.getData(lat, lon);

			}

		});
	} else {
		alert('not authorized');
	}
};
exports.getGeo = getGeo;
