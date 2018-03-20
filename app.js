let context = new AudioContext;
let nowPlaying = false;
let hz, type, oscillator;

class Sound {
	constructor(context, type, freq) {
		this.oscillator = context.createOscillator();
		this.oscillator.type = type;
		this.oscillator.frequency.value = freq;
		this.oscillator.connect(context.destination);
	}

	play() {
		this.oscillator.start();
	}

	stop() {
		this.oscillator.stop();
	}
}

function press() {
	if (nowPlaying) {
		audioStart(0);
		document.getElementById("btn").value = "Play";
		document.getElementById("btn").style.backgroundColor = "#4CAF50";
	}
	else {
		audioStart(1);
		document.getElementById("btn").value = "Stop";
		document.getElementById("btn").style.backgroundColor = "#F44336";
	}
}

function audioStart(x) {
	if (x == 0) {
		oscillator.stop();
		nowPlaying = false;
	}
	else {
		hz = Number(document.getElementById("freq").value);
		type = document.getElementById("type").value;
		oscillator = new Sound(context, type, hz);
		oscillator.play();
		nowPlaying = true;
	}
}