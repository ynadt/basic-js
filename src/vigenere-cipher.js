const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(encryptedMessage, key, 'decrypt');
  }

  process(text, key, mode) {
    const keyUpper = key.toUpperCase();
    const textUpper = text.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < textUpper.length; i++) {
      const char = textUpper[i];
      if (char >= 'A' && char <= 'Z') {
        const textCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = keyUpper[keyIndex % keyUpper.length].charCodeAt(0) - 'A'.charCodeAt(0);

        if (mode === 'encrypt') {
          result += String.fromCharCode(((textCharCode + keyCharCode) % 26) + 'A'.charCodeAt(0));
        } else {
          result += String.fromCharCode(((textCharCode - keyCharCode + 26) % 26) + 'A'.charCodeAt(0));
        }

        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
