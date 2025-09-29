export function analyzeArray(array) {
	validateArray(array);

	const getAvg = () => {
		let sum = array.reduce((previous, current) => {
			return previous + current;
		}, 0);
		return sum / array.length;
	}

	const getMin = () => { return Math.min(...array) };
	const getMax = () => { return Math.max(...array) };
	const getLength = () => { return array.length };

	return { average: getAvg(), min: getMin(), max: getMax(), length: getLength() };
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
