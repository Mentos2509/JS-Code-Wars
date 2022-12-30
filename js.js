// 1. Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  const a = str.split(" ");
  const reverseWords = a.map((element) => element.split("").reverse().join(""));
  return reverseWords.join(" ");
}

// console.log(reverseWords("The quick brown fox jumps over the lazy dog"));

// 2. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

// console.log(isIsogram("ola"));
// console.log(isIsogram("mama"));

// 3. Given an array of integers your solution should find the smallest integer.

function smallestIntegerFinder(array) {
  let a = array.sort((a, b) => {
    return a - b;
  });
  //   return a[0];
  return a;
}

// console.log(smallestIntegerFinder([5, 6, 1, 2, 3, 4, 10, 100, 11, 20, 30]));

// 4. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?"

function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

// console.log(greet('Patryk'))

//5 Return the number (count) of vowels in the given string.

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  str.split("").filter((str) => {
    if (vowels.includes(str)) {
      counter += 1;
    }
  });
  return counter;
}

// console.log(getCount('tata'))

//6  Complete the function to return his total number of goals in all three leagues.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// console.log(goals(2,3,4))

// 7 Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  let a = ending.length;
  const newString = str.slice(str.length - a, str.length);
  if (newString !== ending || newString === "") {
    return false;
  } else {
    return true;
  }
}

// console.log(solution("toaleta", "ta"));
// console.log(solution("toaleta", ""));
// console.log(solution("toaleta", "to"));

//8 Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  const regex = /[aeiou]/gi;
  return str.replace(regex, "");
}

// console.log(disemvowel('My name is Patryk and I am not a troll but nevertheless'))

//9 In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let nums = numbers.split(" ");
  const highestNumber = Math.max(...nums);
  const lowestNumber = Math.min(...nums);
  return highestNumber + " " + lowestNumber;
}

// console.log(highAndLow("1 3 2 33 11 4 5 10"));

// 10 return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let length = s.length;
  if (length % 2 === 0) {
    return s[length / 2 - 1] + s[length / 2];
  } else {
    return s[Math.floor(length / 2)];
  }
}

// console.log(getMiddle("qwe"));
// console.log(getMiddle("qwes"));

// 11  make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// console.log(descendingOrder(1234));

// 12 Create repetitions of the function

function accum(s) {
  let numberOfRepetitions = "";
  for (let i = 0; i < s.length; i++) {
    numberOfRepetitions += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      numberOfRepetitions += s[i].toLowerCase();
    }
    if (i < s.length - 1) {
      numberOfRepetitions += "-";
    }
  }
  return numberOfRepetitions;
}

// console.log(accum("abcd"));

//13 Given an integral number, determine if it's a square number

var isSquare = function (n) {
  const a = Math.sqrt(n, 2);
  return Number.isInteger(a);
};
// console.log(isSquare(25))
// console.log(isSquare(23))

//14 create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter((element) => typeof element === "number");
}

// console.log(filter_list([1,2,'a','b']))

//15 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let amountOfX = 0;
  let amountOfO = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((element) => {
      if (element === "x") {
        amountOfX += 1;
      }
      if (element === "o") {
        amountOfO += 1;
      }
    });
  return amountOfX === amountOfO ? true : false;
}

// console.log(XO("OoXx"));
// console.log(XO("Xooxx"));

//16 given a string of words, return the length of the shortest word(s)

function findShort(s) {
  const words = s.split(" ");
  console.log(words);
  let minLength = Number.MAX_VALUE;
  for (const word of words) {
    const wordLength = word.length;
    if (wordLength < minLength) {
      minLength = wordLength;
    }
  }
  return minLength;
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("a aa aaa"));

// 17 write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  return cc.replace(/\w(?![\w]{0,3}$)/g, "#");
}

// console.log(maskify('4556364607935616'))
// console.log(maskify('1'))
// console.log(maskify('11111'))

// 18 Capitalize 1st letter of string

function toJadenCase(string) {
  let a = string.split(" ");
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);
  }
  return a.join(" ");
}

// console.log(toJadenCase("how can mirrors be real if our eyes aren't real"));

// 19 Make a program that filters a list of strings and returns a list with only your friends name in it max 4 characters
function friend(friends) {
  return friends.filter((element) => element.length === 4);
}

// console.log(
//   friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// );

// 20 If the function is passed a valid PIN string, return true, else return false 4 or 6 digits

function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6){
    const regex = /\D/;
    if (!regex.test(pin)){
      return true;
    }
  }
  return false
}

// console.log(validatePIN("1232"))