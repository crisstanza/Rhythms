	(function() {

	function draw() {
		var myPre = document.getElementById('my-pre');
		var rDec = Math.floor((Math.random() * 15) + 1);
		var rBin = rDec.toString(2);
		var sb = [];
		sb.push('x -' + spaceIt(padLeft(rBin, 4, 0)) + '-\n');
		sb.push('x -' + spaceIt(padLeft('', 4, ' ')) + '-\n');
		sb.push('x -' + spaceIt(padLeft('', 4, ' ')) + '-\n');
		sb.push('x -' + spaceIt(padLeft('', 4, ' ')) + '-\n');
		sb.reverse();
		myPre.innerHTML = sb.join('');
	}

	function padLeft(str, n, pad){
		return Array(n - String(str).length + 1).join(pad||'0') + str;
	}

	function spaceIt(str) {
		return str.split('').join('-');
	}

	function noZeroes(str) {
		return str.replace(/0/g, ' ');
	}

	function init() {
		draw();
	}

	window.addEventListener('load', init, false);

	})();
