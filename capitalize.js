function capitalize(string) {
	let first = string.charAt(0).toUpperCase();
	return first + string.slice(1).toLowerCase();
}

module.exports = capitalize;

