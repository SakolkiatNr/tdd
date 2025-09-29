import { capitalize, reverseString } from './stringMethods.js';

describe('String methods', () => {
	describe('Capitalize', () => {

		test('Lowercase word', () => {
			expect(capitalize('string')).toBe('String');
		});

		test('Uppercase word', () => {
			expect(capitalize('STRING')).toBe('String');
		});

		test('Already Capitalized', () => {
			expect(capitalize('String')).toBe('String');
		});

		test('Non-string input should throw', () => {
			expect(() => capitalize(123)).toThrow(TypeError);
			expect(() => capitalize(true)).toThrow(TypeError);
			expect(() => capitalize(null)).toThrow(TypeError);
			expect(() => capitalize(undefined)).toThrow(TypeError);
		});
	});

	describe('Reverse string', () => {
		test('reverse', () => {
			expect(reverseString('lmao')).toBe('oaml');
		});

		test('Non-string input should throw', () => {
			expect(() => reverseString(123)).toThrow(TypeError);
			expect(() => reverseString(true)).toThrow(TypeError);
			expect(() => reverseString(null)).toThrow(TypeError);
			expect(() => reverseString(undefined)).toThrow(TypeError);
		});

	});
});

