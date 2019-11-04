function reverseStringBruteForce(text) {
  let reversed = "";
  let position = text.length - 1;
  while (position > -1) {
    reversed += text[position];
    position--;
  }
  return reversed;
}

function reverseString(text) {
  return text
    .split("")
    .reverse()
    .join("");
}

module.exports = { reverseString, reverseStringBruteForce };
