// var db = Ti.Database.Open;
// db.execute("CREATE TABLE IF NOT EXISTS dbtable1(id INTEGER PRIMARY KEY, title TEXT, genre TEXT, username TEXT, avatar TEXT )");
// db.execute("INSERT INTO asdTbl (name, desc) VALUES (?, ?)", variable1, variable2);
// db.close();

	var r = function() {
	//read data
	alert("r");
	var localDB = Ti.Database.open("dbtable1");
	var localDBRows = localDB.execute("SELECT title, genre, username, avatar from dbtable");
	var localDBArray =[];
	while (rows.isValidRow()){
		var scmusic = {
			title: localDBRows.fieldByName("title"),
			genre: localDBRows.fieldByName("genre"),
			username: localDBRows.fieldByName("username"),
			avatar: localDBRows.fieldByName("avatar")
		};
		localDBArray.push(scmusic);
		rows.next();
		
	localDBRows.close();
	localDB.close();
	
	// var ui = require("ui");
	// ui.buildUi();
};
var s = function(apiData) {
	var b = Ti.Database.open("dbtable1");
	b.execute("CREATE TABLE IF NOT EXISTS dbtable1(id INTEGER PRIMARY KEY, title TEXT, genre TEXT, username TEXT, avatar TEXT)");
	for ( i = 0; i < json.length; i++) {
		//save info
		b.execute("INSERT INTO dbtable1(title, genre, username, avatar), VALUES (?,?,?,?)", apidata[i].title, apidata[i].genre, apidata[i].username, apidata[i].avatar);
	}
	b.close();
	r();


};
};
exports.r = r;
exports.s = s;
