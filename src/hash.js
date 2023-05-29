export function hash(text) {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const textArray = text.split("");
  const encryptedArray = textArray.map((letter) => {
    const index = alphabetArray.indexOf(letter);
    if (index === -1) return letter;
    const newIndex = (index + 13) % 26;
    return alphabetArray[newIndex];
  });
  return encryptedArray.join("");
}

export default hash;
