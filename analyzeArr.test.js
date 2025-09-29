import { analyzeArray } from "./analyzeArr.js";

describe('Analyze array', () => {
	let array = [1, 2, 3, 100];

	describe('Function', () => {
		test('Average', () => {
			expect(analyzeArray(array).average()).toBe(26.5);
		});

		test('Min value', () => {
			expect(analyzeArray(array).min()).toBe(1);
		});

		test('Max value', () => {
			expect(analyzeArray(array).max()).toBe(100);
		});

		test('Array length', () => {
			expect(analyzeArray(array).length()).toBe(4);
		});
	});

	describe('Error Handling', () => {
		test('Empty array', () => {
			expect(analyzeArray([]).length()).toBe(0);
		});

		test('Not array', () => {
			expect(() => { analyzeArray('nah') }).toThrow(TypeError);
		});

		test('Not number in array', () => {
			expect(() => { analyzeArray(['1', '2']) }).toThrow(TypeError);
		});

		test('Not number in array', () => {
			expect(() => { analyzeArray([1, '2']) }).toThrow(TypeError);
		});

	});
});
