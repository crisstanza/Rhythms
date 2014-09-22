(function() {

	function draw() {
		var allStrings = document.getElementById('all-strings');
		var strings = allStrings.querySelectorAll('div[id^=string-]');
		var note = nextNote();
		drawNotes(strings, note);
		drawEnd(strings);
	}

	function nextNote() {
		return ['a', 'b', 'c', 'd'];
	}

	function drawNotes(strings, note) {
		var length = strings.length;
		for (var i = 0 ; i < length ; i++ ) {
			var string = strings[i];
			string.innerHTML += (note[i] + '-');
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
