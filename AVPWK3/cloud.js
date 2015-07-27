var cloud = require(ti.cloud);
cloud.debug = true;

var cloudlogin = function(){
	cloud.users.login({
		login:"adam",
		password: 1234
	}; function(e){
		console.log(e);
	if (e.success){
		console.log("cloud login successful");
	}else {
		alert("cloud login unsuccessful");
	}
	}
	)};
	

