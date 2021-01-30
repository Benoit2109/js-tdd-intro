const assert = require("assert");
const capitalizeFirstLetters = require("./capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("is a function", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
  });
  it("transform javaScript correctly", () => {
    assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
  });
  it("works for a 1-character string", () => {
    assert.strictEqual(capitalizeFirstLetters("j"), "J");
  });
  it("works for a N-word string", () => {
    assert.strictEqual(
      capitalizeFirstLetters("javaScript est un langage de programation"),
      "JavaScript Est Un Langage De Programation"
    );
  });
  it("works for an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
