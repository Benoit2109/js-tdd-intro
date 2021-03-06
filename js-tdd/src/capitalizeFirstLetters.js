const assert = require("assert");

const capitalizeFirstLetters = (input) =>
  input.length > 0
    ? input
        .split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" ")
    : "";
    
assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
assert.strictEqual(capitalizeFirstLetters("j"), "J");
assert.strictEqual(
  capitalizeFirstLetters("javaScript est un langage de programation"),
  "JavaScript Est Un Langage De Programation"
);
assert.strictEqual(capitalizeFirstLetters(""), "");
