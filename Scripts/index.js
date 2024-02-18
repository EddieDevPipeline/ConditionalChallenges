//Task 1
const firstObject = {
  id: 1,
  name: "ryan",
};

const secondObject = {
  address: "123 fake st",
  phone: "555-555-5555",
};

const thirdObject = { ...firstObject, ...secondObject };

console.log("First Object:", firstObject);
console.log("Second Object:", secondObject);
console.log("Third Object (merged with spread syntax):", thirdObject);

const fourthObject = Object.assign({}, firstObject, secondObject);

console.log("Fourth Object (merged with Object.assign()):", fourthObject);

//Task 2
function largestNum(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is larger.`);
    return num1;
  } else {
    console.log(`${num2} is larger.`);
    return num2;
  }
}

console.log("Largest Number:", largestNum(9, 12));

//Task 3
function makeTitleCase(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  let titleCaseSentence = words.join(" ");
  return titleCaseSentence;
}

let mySentence = "I am a sentence";
let newSentence = makeTitleCase(mySentence);
console.log(newSentence);

//Task 4
function sortLetters(str) {
  return str.replace(/\s/g, "").toLowerCase().split("").sort().join("");
}

const inputString = "Hi there";
const sortedString = sortLetters(inputString);
console.log(sortedString);
