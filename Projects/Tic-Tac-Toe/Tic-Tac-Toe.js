let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let button = document.querySelector("button");
let player = "X";
let winner = false;
let count = 0;
let h4 = document.querySelector("h4");
h4.innerHTML = "Player " + player + " turn";

function checkWinner() {
	if (
		(one.innerHTML === player &&
			two.innerHTML === player &&
			three.innerHTML === player) ||
		(four.innerHTML === player &&
			five.innerHTML === player &&
			six.innerHTML === player) ||
		(seven.innerHTML === player &&
			eight.innerHTML === player &&
			nine.innerHTML === player) ||
		(one.innerHTML === player &&
			four.innerHTML === player &&
			seven.innerHTML === player) ||
		(two.innerHTML === player &&
			five.innerHTML === player &&
			eight.innerHTML === player) ||
		(three.innerHTML === player &&
			six.innerHTML === player &&
			nine.innerHTML === player) ||
		(one.innerHTML === player &&
			five.innerHTML === player &&
			nine.innerHTML === player) ||
		(three.innerHTML === player &&
			five.innerHTML === player &&
			seven.innerHTML === player)
	) {
		winner = true;
		alert("Player " + player + " wins!");
	}
}

function changePlayer() {
	if (player === "X") {
		player = "O";
	} else {
		player = "X";
	}
}

function checkDraw() {
	if (count === 9 && winner === false) {
		alert("Draw!");
	}
}

function reset() {
	one.innerHTML = "";
	two.innerHTML = "";
	three.innerHTML = "";
	four.innerHTML = "";
	five.innerHTML = "";
	six.innerHTML = "";
	seven.innerHTML = "";
	eight.innerHTML = "";
	nine.innerHTML = "";
	player = "X";
	winner = false;
	count = 0;
}

one.addEventListener("click", function() {
	if (one.innerHTML === "") {
		one.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

two.addEventListener("click", function() {
	if (two.innerHTML === "") {
		two.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

three.addEventListener("click", function() {
	if (three.innerHTML === "") {
		three.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

four.addEventListener("click", function() {
	if (four.innerHTML === "") {
		four.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

five.addEventListener("click", function() {
	if (five.innerHTML === "") {
		five.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

six.addEventListener("click", function() {
	if (six.innerHTML === "") {
		six.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

seven.addEventListener("click", function() {
	if (seven.innerHTML === "") {
		seven.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

eight.addEventListener("click", function() {
	if (eight.innerHTML === "") {
		eight.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

nine.addEventListener("click", function() {
	if (nine.innerHTML === "") {
		nine.innerHTML = player;
		count++;
		checkWinner();
		changePlayer();
		h4.innerHTML = "Player " + player + " turn";
		checkDraw();
	}
});

button.addEventListener("click", function() {
	h4.innerHTML = "Player " + player + " turn";
	reset();
});
