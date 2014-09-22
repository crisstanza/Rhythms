(function() {

	var MAX_NOTES = 16;
	var BEATS_D = [' ', '1', 'x'];
	var BEATS_E = [' ', '0', 'x'];

	function draw() {
		var allStrings = document.getElementById('all-strings');
		var strings = allStrings.querySelectorAll('div[id^=string-]');
		var timeBeat = document.getElementById('time-beat');
		drawTimeBeat(timeBeat);
		var note;
		for (var i = 0 ; i < MAX_NOTES ; i++) {
			note = nextNote();
			drawNotes(strings, note);
		}
		drawEnd(strings);
	}

	function nextNote() {
		var note = ['', '', '', ''];
		note[3] = nextBeatE();
		note[2] = ' ';
		note[1] = ' ';
		note[0] = ' ';
		if (note[3] == ' ') {
			note[1] = nextBeatD();
			if (note[1] == ' ') {
				note[3] = '`';
			}
		}
		return note;
	}

	function nextRandom(inf, sup) {
		return Math.floor((Math.random()*sup) + inf);
	}

	function nextBeatE() {
		return BEATS_E[nextRandom(0, BEATS_E.length)];
	}

	function nextBeatD() {
		return BEATS_D[nextRandom(0, BEATS_D.length)];
	}

	function drawTimeBeat(timeBeat) {
		var maxBeats = MAX_NOTES / 2 - 1;
		var template = timeBeat.innerHTML;
		for (var i = 0 ; i < maxBeats ; i++) {
			timeBeat.innerHTML += template;
		}
	}

	function drawNotes(strings, note) {
		var length = strings.length;
		for (var i = 0 ; i < length ; i++ ) {
			var string = strings[i];
			if (note[i] != 'x') {
				string.innerHTML += ('<b>'+note[i]+'</b>'+'-');
			} else {
				string.innerHTML += (''+note[i]+''+'-');
			}
		}
	}

	function drawEnd(strings) {
		var length = strings.length;
		for (var i = 0 ; i < length ; i++ ) {
			var string = strings[i];
			string.innerHTML += '|';
		}
	}

	function init() {
		draw();
	}

	window.addEventListener('load', init, false);

})();
