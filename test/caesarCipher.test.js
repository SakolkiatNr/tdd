import { caesarCipher } from "../code/caesarCipher.js";

describe('Caesar Cipher', () => {
	describe('Check function', () => {
		test('no shift', () => {
			expect(caesarCipher('hello, world!', 0)).toBe("hello, world!");
		});

		test('shift 1', () => {
			expect(caesarCipher('abc xyz', 1)).toBe('bcd yza');
		});

		test('shift 27', () => {
			expect(caesarCipher('abc xyz', 1)).toBe('bcd yza');
		});
	})

	describe('Check error handling', () => {
		test('no input', () => {
			expect(() => { caesarCipher() }).toThrow(TypeError);
		});

		test('no message', () => {
			expect(() => { caesarCipher('') }).toThrow(Error);
		});

		test('key is not a number', () => {
			expect(() => { caesarCipher('lmao', 'NaN') }).toThrow(TypeError);
		});

		test('key is empty', () => {
			expect(() => { caesarCipher('lmfao',) }).toThrow(TypeError);
		});

		test('message is empty, but have a key', () => {
			expect(() => { caesarCipher(9999) }).toThrow(TypeError);
		});

	})

});
