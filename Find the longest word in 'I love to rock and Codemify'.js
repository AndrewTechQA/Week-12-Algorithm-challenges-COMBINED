//!  Andrew

function longest(a, b) {
  return a.length > b.length ? a : b;
}

function longestWord(str) {
  const words = str.split(" ");
  return words.reduce(longest);
}

console.log(longestWord("I love to rock and Codemify"), '- is the longers word');



//!  Youriy Dzedzina

function findLongestWord(line) {
  const lineSplit = line.split(" ");
  const longestWord = lineSplit.reduce((result, word) =>
    result.length >= word.length ? result : word
  );
  console.log(longestWord);
}
findLongestWord("I love to rock and Codemify");



// 