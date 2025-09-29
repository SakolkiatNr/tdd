// const capitalize = require('./capitalize.js');
import { capitalize } from './stringMethods.js';


describe('String methods', () => {
	describe('capitalize', () => {

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
});

