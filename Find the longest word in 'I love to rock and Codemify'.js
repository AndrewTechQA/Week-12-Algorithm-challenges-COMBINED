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



//! Daria Philippova

function findLongestWord2(str) {
  let strSplit = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length; 
    }
  }
  return longestWord;
}
console.log(findLongestWord2("I love to rock and Codemify"));



//!  Gunay Miri

//* Version 1 - using FOR LOOP

let findTheLongestWord = (str) => {
  let string = str.split(" ");
  let longest = 0;
  let longestWord = null;

  for (let i = 0; i < string.length; i++) {
    if (longest < string[i].length) {
      longestWord = string[i];
    }
  }
  return longestWord;
};
console.log(findTheLongestWord("I love to rock and Codemify"));


//* Version 2 - using REDUCE method

function findLongestWord3(str) {
  const string = str.split(" ");
  const longestWord = string.reduce(function (longest, currentWord) {
    if (currentWord.length > longest.length) return currentWord;
    else return longest;
  }, "");
  return longestWord;
}
console.log(findLongestWord3("I love to rock and Codemify"));


