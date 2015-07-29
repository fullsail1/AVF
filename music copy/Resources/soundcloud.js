//log in to soundcloud
//console the results
// send the data
var trackwin = Titanium.UI.createWindow({
	title : 'Audio Test',
	backgroundColor : '#fff',
	layout : 'vertical'
});
var scrollView = Ti.UI.createScrollView({
	layout : "vertical"
});

var tracklist = function(t) {
	for ( i = 0; i < t.length; i++) {
		//catching all the tracks
		// var scrollableView = Ti.UI.createScrollView({
		// views : tlview
		// //showPagingControl : true
		// });

		var tlview = Ti.UI.createView({
			top : 25,
			height : 100,
			backgroundColor : 'orange',
			//layout : 'vertical',
			trackID : t[i].id,
			trackinfo : t[i]
		});

		var title = Ti.UI.createLabel({
			top : 2,
			right : 5,
			text : t[i].title,
			font : {
				fontSize : 12,
				fontFamily : "Arial"
			},
			trackID : t[i].id,
			trackinfo : t[i]

		});
		var genre = Ti.UI.createLabel({
			top : 15,
			right : 5,
			text : t[i].genre,
			font : {
				fontSize : 12,
				fontFamily : "Arial"
			},
			trackID : t[i].id,
			trackinfo : t[i]
		});
		var username = Ti.UI.createLabel({
			top : 30,
			right : 5,
			text : t[i].username,
			font : {
				fontSize : 12,
				fontFamily : "Arial"
			},
			trackID : t[i].id,
			trackinfo : t[i]
		});
		var avatarPic = Ti.UI.createImageView({
			top : 2,
			left : 5,
			height : 90,
			width : 90,
			text : "avatarPic" + t[i].username,
			trackID : t[i].id,
			image : t[i].avatar,
			trackinfo : t[i]
		});
		tlview.add(avatarPic);
		tlview.add(username);
		tlview.add(title);
		tlview.add(genre);

		scrollView.add(tlview);

		tlview.addEventListener('click', function(e) {
			// //
			console.log(JSON.stringify(e.source));
			m.tracIO(e.source.trackID, e.source.trackinfo);

		});

	}
	trackwin.add(scrollView);
};

exports.tracklist = tracklist;

var streamplay = function(trackurl, y) {
	var p = Ti.UI.createWindow({
		title : 'Audio Test',
		backgroundColor : 'black',
		//layout : 'vertical'
	});
	var svview = Ti.UI.createView({
		top : 25,
		height : 100,
		backgroundColor : 'white',
		//layout : 'horizontal',
		trackID : y.id,
		trackinfo : y[i]
	});

	var title = Ti.UI.createLabel({
		top : 2,
		right : 5,
		text : y.title,
		font : {
			fontSize : 12,
			fontFamily : "Arial"
		},
		textAlign:Titanium.UI.TEXT_ALIGNMENT_RIGHT,
		wordWrap:true,
		trackID : y.id,
		trackinfo : y[i]

	});
	var genre = Ti.UI.createLabel({
		top : 15,
		right : 5,
		text : y.genre,
		font : {
			fontSize : 12,
			fontFamily : "Arial"
		},
		trackID : y.id,
		trackinfo : y[i]
	});
	var username = Ti.UI.createLabel({
		top : 30,
		right : 5,
		text : y.username,
		font : {
			fontSize : 12,
			fontFamily : "Arial"
		},
		trackID : y.id,
		trackinfo : y[i]
	});
	var avatarPic = Ti.UI.createImageView({
		top : 2,
		left : 5,
		height : 90,
		width : 90,
		text : y.username,
		trackID : y.id,
		image : y.avatar,
		//trackinfo: t[i]
	});
	svview.add(avatarPic);
	svview.add(username);
	svview.add(title);
	svview.add(genre);

	var startStopButton = Titanium.UI.createButton({
		title : 'Start/Stop Streaming',
		top : 130,
		width : 200,
		height : 40
	});

	var pauseResumeButton = Titanium.UI.createButton({
		title : 'Pause/Resume Streaming',
		top : 150,
		width : 200,
		height : 40,
		enabled : false
	});
	var backtolist = Titanium.UI.createButton({
		title : 'Back To List',
		top : 180,
		width : 200,
		height : 40
	});
	var audioPlayer = Ti.Media.createAudioPlayer({
		// url : "https://api.soundcloud.com/tracks/78125063/stream", //'Blocka.mp3',
		url : trackurl,
		allowBackground : true
	});
	startStopButton.addEventListener('click', function() {
		// When paused, playing returns false.
		// If both are false, playback is stopped.
		if (audioPlayer.playing || audioPlayer.paused) {
			audioPlayer.stop();
			pauseResumeButton.enabled = false;
			if (Ti.Platform.name === 'android') {
				audioPlayer.release();
			}
		} else {
			audioPlayer.start();
			pauseResumeButton.enabled = true;
		}
	});

	pauseResumeButton.addEventListener('click', function() {
		if (audioPlayer.paused) {
			audioPlayer.start();
		} else {
			audioPlayer.pause();
		}
	});

	audioPlayer.addEventListener('progress', function(e) {
		Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
	});

	audioPlayer.addEventListener('change', function(e) {
		Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
	});

	p.addEventListener('close', function() {
		audioPlayer.stop();
		if (Ti.Platform.osname === 'android') {
			audioPlayer.release();
		}
	});

	backtolist.addEventListener('click', function() {
		p.close();
	});

	p.add(startStopButton);
	p.add(pauseResumeButton);
	p.add(backtolist);
	//console.log("JSON", JSON.stringify(e));
	p.add(svview);
	p.open();
};
trackwin.open();
exports.streamplay = streamplay;
