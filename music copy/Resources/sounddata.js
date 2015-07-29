//get soundcloud access
//build a basic object
//push to audio player
var play = require("soundcloud");

var getData = function() {

	// now pass , extract, capture other info
	//https://soundcloud.com/drdollaz/02-throw-sum-more-rae

	//var url = "http://api.wunderground.com/api/41a5a98190c0ff98/geolookup/conditions/q/" + lat + "," + lon + ".json";
	//https://api.soundcloud.com/tracks/78125063/stream"
	//var url = "https://api.soundcloud.com/tracks?client_id=eaf53198e1fd67d5da68d95cc7603837&ids=78125063";
	//var url = "https://api.soundcloud.com/tracks/78125063/streams?client
	//_id=eaf53198e1fd67d5da68d95cc7603837&ids=78125063";
	var url = "https://api.soundcloud.com/tracks/?client_id=eaf53198e1fd67d5da68d95cc7603837";
	var client = Titanium.Network.createHTTPClient({
	onload : function(e) {
	var json = JSON.parse(this.responseText);
	//console.log(this.responseText);
	var tracks = [];
	for ( i = 0; i < json.length; i++) {
	var track = {
	id : json[i].id,
	title : json[i].title,
	genre : json[i].genre,
	username : json[i].user.username,
	avatar : json[i].user.avatar_url

				};
				tracks.push(track);
			}

				var sendtocloud = require("musicapi");
				sendtocloud.savetocloud(tracks);
				loadlocal.s(tracks);
				//console.log(stream);

			
			// play.streamplay(stream);
			play.tracklist(tracks);
		//	console.log(tracks);
		}
	});
	client.open("GET", url);
	client.send();
	//console.log(url);
	//console.log(getData());

};

var tracIO = function(x, y) {
	console.log("x", x);
	var url1 = "https://api.soundcloud.com/tracks/" + x + "/streams?client_id=eaf53198e1fd67d5da68d95cc7603837";
	
	var client1 = Titanium.Network.createHTTPClient({
		onload : function(e) {
			var json1 = JSON.parse(this.responseText);
			//console.log(this.responseText);
			var audio = json1.http_mp3_128_url;
			//console.log(audio);
			play.streamplay(audio, y);

		}
		
		// play.streamplay(stream);
		// play.tracklist(tracks);
		// console.log(traks);
		
		

	});
	
	client1.open("GET", url1);
	client1.send();
	console.log(url1);
	//console.log(getData());

};

exports.tracIO = tracIO;

exports.getData = getData;
