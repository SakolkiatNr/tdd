export function caesarCipher(text, key) {
	if (typeof text !== 'string') {
		throw new TypeError('Message input must be string!');
	}

	if (typeof key !== 'number') {
		throw new TypeError('Key input must be number!')
	}

	return encrypt(text, key);
}

function shiftChar(key) {
	return key % 26;
}

function encrypt(text, key) {
	let string = text.split('');
	let encryptText = '';

	for (let char in string) {
		// char code
		// a -> 97 ... z -> 122
		// A -> 65 ... Z -> 90
		let ch = text.charCodeAt(char);

		// shift alphabet only
		// Shift lowercase
		if (ch >= 97 && ch <= 122) {
			ch += shiftChar(key);
			if (ch > 122) ch -= 26;
		}

		// Shift uppercase
		else if (ch >= 65 && ch <= 90) {
			ch += shiftChar(key);
			if (ch > 90) ch -= 26;
		}

		encryptText += String.fromCharCode(ch);
	}
	return encryptText;
}
