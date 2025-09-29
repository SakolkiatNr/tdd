import { types } from "@babel/core";

export function calculator(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new TypeError("Input must be number");
	}

	const add = () => { return a + b };
	const subtract = () => { return a - b };
	const divide = () => { return a / b };
	const multiply = () => { return a * b };

	return { add, subtract, divide, multiply };
}
