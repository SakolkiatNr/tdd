export function capitalize(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Input must be string');
	}

	let firstChar = string.charAt(0).toUpperCase();
	return firstChar + string.slice(1).toLowerCase();
}




