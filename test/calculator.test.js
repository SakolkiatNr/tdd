import { calculator } from "../code/calculator.js";

describe('Calculator', () => {
	describe('Check function', () => {

		test('Add', () => {
			expect(calculator(3, 3).add()).toBe(6);
			expect(calculator(-3, 3).add()).toBe(0);
			expect(calculator(0.3, 0.3).add()).toBe(0.6);
			expect(calculator(Number.MAX_SAFE_INTEGER, 1).add()).toBe(Number.MAX_SAFE_INTEGER + 1);

		});

		test('Subtract', () => {
			expect(calculator(3, 3).subtract()).toBe(0);
			expect(calculator(-3, 3).subtract()).toBe(-6);
		});

		test('Divide', () => {
			expect(calculator(3, 3).divide()).toBe(1);
			expect(calculator(3, 0.3).divide()).toBe(10);
			expect(calculator(3, 0).divide()).toBe(Infinity);
		});

		test('Multiply', () => {
			expect(calculator(3, 3).multiply()).toBe(9);
			expect(calculator(3, 3, 4).multiply()).toBe(9);
		});
	});

	describe('Check valid input', () => {
		test('Input missing', () => {
			expect(() => calculator(3,).add()).toThrow(TypeError);
			expect(() => calculator().add()).toThrow(TypeError);
			expect(() => calculator(123).add()).toThrow(TypeError);
		});

		test('Weird input', () => {
			expect(() => calculator('1', '2').add()).toThrow(TypeError);
			expect(() => calculator(true, null).add()).toThrow(TypeError);
			expect(() => calculator(undefined, false).add()).toThrow(TypeError);
			expect(() => calculator('haha', 'not numbrr').add()).toThrow(TypeError);
			expect(() => calculator().add()).toThrow(TypeError);
		});

	});

})
