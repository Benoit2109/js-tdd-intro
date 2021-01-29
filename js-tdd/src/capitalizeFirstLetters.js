import react from 'react';
const assert = require('assert');



assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
assert.strictEqual(capitalizeFirstLetters('j'), 'J');
assert.strictEqual(capitalizeFirstLetters('javaScript est un langage de programation'), 'JavaScript Est Un Langage De Programation');
assert.strictEqual(capitalizeFirstLetters(''), '');