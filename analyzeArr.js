export function analyzeArray(array) {
	validateArray(array);

	const average = () => {
		let sum = array.reduce((previous, current) => {
			return previous + current;
		}, 0);
		return sum / array.length;
	}

	const min = () => { return Math.min(...array) };
	const max = () => { return Math.max(...array) };
	const length = () => { return array.length };

	return { average, min, max, length };
}

function validateArray(array) {
	if (!Array.isArray(array)) {
		throw new TypeError("Input must be an array");
	}

	const isNumber = (currentValue) => typeof currentValue === 'number';
	if (!array.every(isNumber)) {
		throw new TypeError("Every item type must be number!");
	}
}
