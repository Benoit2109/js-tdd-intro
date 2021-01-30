
const capitalizeFirstLetters = (input) =>
  input.length > 0
    ? input
        .split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" ")
    : "";

    module.exports = capitalizeFirstLetters;

