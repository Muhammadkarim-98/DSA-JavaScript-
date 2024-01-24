// BISMILLAH
// from strivers
// PATTERN - 1
function stars(n) {
	let starBox = "";
	for (let i = 0; i < n; i++) {
		let star = "* ";
		for (let a = 0; a < n; a++) {
			starBox += star;
		}
		starBox += "\n";
	}
	return starBox;
}
console.log(stars(5));

// PATTERN - 2
function stars(n) {
	let startBox = "";
	let star = "* ";
	for (let i = 0; i < n; i++) {
		for (let a = 0; a <= i; a++) {
			startBox += star;
		}
		startBox += "\n";
	}
	return startBox;
}
console.log(stars(10));

// PATTERN - 3
function stars(n) {
	let starBox = "";
	for (let i = 0; i <= n; i++) {
		for (let a = 1; a <= i; a++) {
			starBox += a;
		}
		starBox += "\n";
	}
	return starBox;
}
console.log(stars(5));

// PATTERN - 4
function stars(n) {
	let starBox;
	for (let i = 0; i <= n; i++) {
		for (let a = 1; a <= i; a++) {
			starBox += i;
		}
		starBox += "\n";
	}
	return starBox;
}
console.log(stars(5));

// PATTERN - 5
function stars(n) {
	let star = "* ";
	let starBox = "";
	for (let i = 0; i <= n; i++) {
		for (let a = i; a < n; a++) {
			starBox += star;
		}
		starBox += "\n";
	}
	return starBox;
}
console.log(stars(10));

// PATTERN - 6
function stars(n) {
	let starBox = "";
	for (let i = 0; i < n; i++) {
		for (let a = 1; a <= n - i; a++) {
			starBox += a;
		}
		starBox += "\n";
	}
	return starBox;
}
console.log(stars(5));

// Patterns about Basic Math
//#1
function count(n) {
	let digits = [];
	for (let i = 1; i <= n; i++) {
		digits += i;
	}
	return digits;
}

//#2
function countDigits(n) {
	let digits = new String(n).split("").length;
	return digits;
}

// #3
function reverseNum(n) {
	let reversed = new String(n).split("").reverse().join("");
	return Number(reversed);
}

// #4 
function print(n) {
	let text = '';
	for (let i = 0; i < n; i++) {
		text += 'Repeated Text! '
	}
	return text;
};
