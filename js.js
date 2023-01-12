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

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    const regex = /\D/;
    if (!regex.test(pin)) {
      return true;
    }
  }
  return false;
}

// console.log(validatePIN("1232"))

// 21 Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map((element) => element * -1);
}

// console.log(invert([1,2,3,4,5]))

// 22 Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

// console.log(repeatStr(3, "*"));

// 23 takes a String and returns an Array/list with the length of each word added to each element.
function addLength(str) {
  return str.split(" ").map((element) => element + " " + element.length);
}

// console.log(addLength("apple ban"));

// 24 Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
  let a = ["a", "e", "i", "o", "u"];
  return string
    .split("")
    .filter((element) => a.indexOf(element) === -1)
    .join("");
}

// console.log(shortcut(('how are you today?')));

// 25 Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  let counter = 0;
  for (i = 0; i <= num; i++) {
    counter += i;
  }
  return counter;
};

// console.log(summation(8));

// 26 Price of hot-dogs

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}

// console.log(saleHotdogs(30))

// 27 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// 28 odd or even 3 integers
function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  }
  let a = array.reduce((accumulator, value) => accumulator + value);
  if (a % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// console.log(oddOrEven([]));
// console.log(oddOrEven([1,2,3,3]));

// 29 Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
// console.log(sortByLength(["Beg", "Life", "I", "To"]))

// 30 Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
var capitals = function (word) {
  let result = [];
  word.split("").forEach((element, index) => {
    if (/[A-Z]/.test(element)) {
      result.push(index);
    }
  });
  return result;
};

// console.log(capitals('CodEWaRs'))

// 31 Sum all the numbers of a given array except the highest and the lowest element ( by value, not by index! ).
function sumArray(array) {
  if (array == null || array.length <= 1 || array == undefined) {
    return 0;
  } else {
    return array
      .sort((a, b) => a - b)
      .slice(1, array.length - 1)
      .reduce((accumulator, value) => accumulator + value);
  }
}

// console.log(sumArray([-6, -20, -1, -10, -12]));
// console.log(sumArray([1]))

// 32 Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let b = s1 + s2;
  b = b
    .split("")
    .sort()
    .filter((element, index, array) => {
      return array.indexOf(element) === index;
    })
    .join("");

  return b;
}

// 32b

function longest(s1, s2) {
  const everyLetters = s1.split("").concat(s2.split(""));
  const array = [];
  for (const letter of everyLetters) {
    if (array.indexOf(letter) === -1) {
      array.push(letter);
    }
  }
  return array.sort().join("");
}

// console.log(longest("aretheyhere", "yestheyarehere"));
// console.log(longest("aabbccdd", "aabbccddeehijf"));

// 33 Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  if (numbers === []) {
    return numbers;
  } else {
    const a = numbers.indexOf(Math.min(...numbers));
    let b = numbers.slice(0, a);
    let c = numbers.slice(a + 1, numbers.length);
    return b.concat(c);
  }
}

// 33b

function removeSmallest(numbers) {
  if (numbers === []) {
    return numbers;
  } else {
    const a = numbers.indexOf(Math.min(...numbers));
    return numbers.filter((element, index) => (element = index !== a));
  }
}

// console.log(removeSmallest([5, 3, 2, 1, 4]));

// 34 Give me the amount of people who are in the bus after last stop.

// function busStop(people){
//  }

function busStop(people) {
  for (let i = 1; i < people.length; i++) {
    people[i][1] = people[i][1] * -1;
  }
  return people.flat().reduce((sum, value) => sum + value);
}

// 34b

function busStop1(people) {
  return people
    .map(([a, b]) => [a, b * -1])
    .flat()
    .reduce((sum, value) => sum + value);
}

// console.log(busStop([[15,0],[5,1],[5,1]]))
// console.log(busStop1([[15,0],[5,1],[5,1]]))

// 35 Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
function sumOfMinimums(arr) {
  const minValues = arr
    .map((subarray) => Math.min(...subarray))
    .reduce((element, value) => element + value);
  return minValues;
}

// console.log(
//   sumOfMinimums([
//     [11, 12, 14, 54],
//     [67, 89, 90, 56],
//     [7, 9, 4, 3],
//     [9, 8, 6, 7],
//   ])
// );

// 36 Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// console.log(
//   flattenAndSort([
//     [3, 2, 1],
//     [7, 9, 8],
//     [6, 4, 5],
//   ])
// );

// 37 Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
function evenNumbers(array, number) {
  const evenNumbers = array.filter((element) => element % 2 === 0);
  const numbersOfRemovals = evenNumbers.length - number;
  if (evenNumbers.length <= number){
    return evenNumbers
  }
  else{
    for (let i = 0; i < numbersOfRemovals; i++) {
    evenNumbers.shift();
  }
  }
  return evenNumbers
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
