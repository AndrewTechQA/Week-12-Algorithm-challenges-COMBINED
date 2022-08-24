function reverseWords(string) {
  let result = string.split(" ").reverse().join(" ");
  return result;
}
console.log(reverseWords("i like coding"));
