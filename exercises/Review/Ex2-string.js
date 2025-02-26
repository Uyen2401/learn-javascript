
/**
 * **
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 The program need to allow user to input a sentence, not hard code 
 Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
 */

const readline = require("readline-sync");
let givenStr = readline.question("Please input a sentence: ").trim();

if(!givenStr){
    console.log('No input provided');
    process.exit(1);
}

let individualWords = givenStr.replace(/[^a-zA-ZÀ-ỹ0-9\s]/g, "").toLowerCase().split(/\s+/);

function groupWord(individualWords) {
  const groupWords = {};
  for (let i = 0; i < individualWords.length; i++) {
    const word = individualWords[i];
    if (groupWords[word]) {
      groupWords[word] += 1;
    } else {
      groupWords[word] = 1;
    }
  }
  return groupWords;
}

const groupWords = groupWord(individualWords);
console.log(groupWords);
