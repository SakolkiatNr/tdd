import { analyzeArray } from "./analyzeArr.js";

describe('Analyze array', () => {
	let array = [1, 2, 3, 4];

	describe('Function', () => {
		test('Average', () => {
			expect(analyzeArray(array))
				.toMatchObject(
					{
						average: 2.5,
						min: 1,
						max: 4,
						length: 4
					});
		});

	});

	describe('Error Handling', () => {
		test('Empty array', () => {
			expect(analyzeArray([]).length).toBe(0);
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
