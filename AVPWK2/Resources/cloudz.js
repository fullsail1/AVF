var Cloud = require("ti.cloud");
Cloud.debug = true;

var cloudslogin = function() {
	Cloud.Users.login({
		login : "morningstar",
		password : "1234"
	}, function(e) {
		// console.log(e);
		if (e.success) {
			m.getData();
			// console.log("cloud login successful");
		} else {
			alert("cloud login unsuccessful");
		}
	});
};

var savetocloud = function(tracks) {
	// console.log("tracks:::::" + tracks);
	for ( i = 0; i < tracks.length; i++) {
		Cloud.Objects.create({
			classname : "sounds",
			fields : {
				title : tracks[i].title,
				genre : tracks[i].genre,
				username : tracks[i].username,
				avatar : tracks[i].avatar
			}
		}, function(e) {
			if (e.success) {
				// console.log("cloud data success");
			} else {
				alert("cloud data not saved");
			}
		});
	} //loop
};
//savetocloud

exports.cloudslogin = cloudslogin;
exports.savetocloud = savetocloud;
