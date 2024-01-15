// BISMILLAH
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
