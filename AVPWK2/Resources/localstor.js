var r = function() {
	//read data
	// alert("r");
	var localDB = Ti.Database.open("db");
	var localDBRows = localDB.execute("SELECT trackid, title, genre, username, avatar FROM dbtable1");
	var localDBArray = [];
	while (localDBRows.isValidRow()) {
		var scmusic = {
			trackid : Math.floor(localDBRows.fieldByName("trackid")),
			title : localDBRows.fieldByName("title"),
			genre : localDBRows.fieldByName("genre"),
			username : localDBRows.fieldByName("username"),
			avatar : localDBRows.fieldByName("avatar")
		};
		localDBArray.push(scmusic);
		localDBRows.next();
	console.log(scmusic);
	}
	localDBRows.close();
	localDB.close();

	play.tracklist(localDBArray);
	// // var ui = require("ui");
	// // ui.buildUi();
};
var s = function(v) {
	console.log("v::::::::::" + JSON.stringify(v));
	var b = Ti.Database.open("db");
	b.execute("CREATE TABLE IF NOT EXISTS dbtable1 (id INTEGER PRIMARY KEY, trackid TEXT,title TEXT, genre TEXT, username TEXT, avatar TEXT)");
	for ( i = 0; i < v.length; i++) {
		//save info
		b.execute("INSERT INTO dbtable1(trackid, title, genre, username, avatar) VALUES (?,?,?,?,?)", v[i].id, v[i].title, v[i].genre, v[i].username, v[i].avatar);
	}
	b.close();
	r();

};

exports.r = r;
exports.s = s;
