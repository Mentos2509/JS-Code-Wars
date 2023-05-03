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
  if (evenNumbers.length <= number) {
    return evenNumbers;
  } else {
    for (let i = 0; i < numbersOfRemovals; i++) {
      evenNumbers.shift();
    }
  }
  return evenNumbers;
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// 38 Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let a = 0;
  for (let i = 0; i < sorted.length / 2; i++) {
    a += sorted[i] * sorted[sorted.length - i - 1];
  }
  return a;
}

// console.log(minSum([1, 2, 3, 4]));

// 39 You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(a, limit) {
  return Math.max(...a) <= limit ? true : false;
}

// console.log(smallEnough([66, 109], 200))

// 40 The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

// console.log(twoOldestAges([1, 2, 3, 4]));

// 41 You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result ^= numbers[i];
  }
  return result;
}

// console.log(stray([1, 1, 2]));

//42 Count the number of divisors of a positive integer n

function getDivisorsCnt(n) {
  let a = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      a.push(i);
    }
  }
  return a.length;
}

// console.log(getDivisorsCnt(10));

// 43 Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  const a = numbers.toString();
  return (
    "(" +
    a[0] +
    a[2] +
    a[4] +
    ")" +
    " " +
    a[6] +
    a[8] +
    a[10] +
    "-" +
    a[12] +
    a[14] +
    a[16] +
    a[18]
  );
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// 44 Reverse string

function solution(str) {
  return str.split("").reverse().join("");
}

// console.log(solution("albert"))

// 45 Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// console.log(boolToWord(true))

// 46 Open or Senior

function openOrSenior(data) {
  return data.map((member) =>
    member[0] >= 55 && member[1] > 7 ? "Senior" : "Open"
  );
}

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

// 47 Return negative

function makeNegative(num) {
  return num < 0 ? num : num * -1;
}

// console.log(makeNegative(9));

// 47  Square every digit of a number and concatenate them.

function squareDigits(num) {
  const digits = num.toString().split("");
  const squareDigits = digits.map((element) => Math.pow(element, 2));
  return parseInt(squareDigits.join(""));
}

// console.log(squareDigits(3212));

// 48 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      x++;
    } else if (str[i] === "o" || str[i] === "O") {
      o++;
    }
  }

  return x === o;
}

// console.log(XO("xxOo"));

// 49 Replace symbols in DNA test

function DNAStrand(dna) {
  return dna
    .split("")
    .map((element) => {
      if (element === "A") {
        return "T";
      } else if (element === "T") {
        return "A";
      } else if (element === "C") {
        return "G";
      } else if (element === "G") {
        return "C";
      }
    })
    .join("");
}

// console.log(DNAStrand("AAAA"));

// 50 You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let horizontal = 0;
  let vertical = 0;
  walk.forEach((direction) => {
    if (direction === "n") {
      horizontal++;
    } else if (direction === "s") {
      horizontal--;
    } else if (direction === "e") {
      vertical++;
    } else if (direction === "w") {
      vertical--;
    }
  });

  if (horizontal === 0 && vertical === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

// 51  Implement a difference function, which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}

// console.log(arrayDiff([1,2], [1]))

// 52 There is an array with some numbers. All numbers are equal except for one.

function findUniq(arr) {
  return arr.find(
    (element) => arr.indexOf(element) === arr.lastIndexOf(element)
  );
}

// console.log(findUniq([1, 0, 0]));

// 53 You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const oddNumbers = array
    .filter((number) => number % 2 !== 0)
    .sort((a, b) => a - b);
  return array.map((number) => {
    if (number % 2 !== 0) {
      return oddNumbers.shift();
    } else {
      return number;
    }
  });
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]))

//54 Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

// updateLight("green"), "yellow";

// 55 Write a function that when given a URL as a string, parses out just the domain name and returns it as a string
function domainName(url) {
  return url
    .replace(/^(https?:\/\/)?/i, "")
    .replace(/^www\./i, "")
    .split("/")[0]
    .split(".")[0];
}

// console.log(domainName("http://google.com"));

// 56 Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// console.log(evenOrOdd(62));

// 56 Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length > 4) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}

// console.log(spinWords("Hey fellow warriors"));

// 57 Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// console.log(likes([]), 'no one likes this');
// console.log(likes(['Peter']), 'Peter likes this');
// console.log(likes(['Jacob', 'Alex', 'Jacob', 'Mark']), 'Jacob and Alex like this');

// 58 You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr.filter((a) => a > 0).reduce((a, b) => a + b, 0);
}

// console.log(positiveSum([1, 2, 3, 4, 5]));
// console.log(positiveSum([1, -2, 3, 4, 5]));
// console.log(positiveSum([]));

// 59 We need a function that can transform a number (integer) into a string.

function numberToString(num) {
  return num.toString();
}

// console.log(numberToString(67))

// 60 Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {
  // if (typeof iterable === "string") {
  //   return iterable
  //     .split("")
  //     .filter((element, index) => element !== iterable[index + 1]);
  // } else {
  //   return iterable.filter((element, index) => element !== iterable[index + 1]);
  // }
}

function uniqueInOrder(iterable) {
  // return [...iterable].filter((e, i) => e !== iterable[i + 1]);
}

// console.log(uniqueInOrder("AAAABBBCCDAaBBB"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// 61 Write a function that removes the spaces from the string, then return the resultant string.

no_space = (x) => {
  return x
    .split("")
    .filter((element) => element !== " ")
    .join("");
};

no_space = (x) => {
  return x.replaceAll(" ", "");
};

// console.log(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'))

// 62 Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

function order(sentence) {
  let emptyArray = [];
  for (let i = 1; i < 10; i++) {
    let c = sentence.split(" ").filter((element) => element.includes(i));
    emptyArray.push(...c);
  }
  return emptyArray.join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"));

// 63 Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a, b) {
  let array = [];
  if (a === b) {
    return a;
  } else if (a < b) {
    {
      for (i = a; i <= b; i++) {
        array.push(i);
      }
      return array.reduce((a, b) => a + b, 0);
    }
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      array.push(i);
    }
    return array.reduce((a, b) => a + b, 0);
  }
}

// console.log(getSum(2, 2));
// console.log(getSum(-1, 2));

// 64 Given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return number === 0 ? 0 : number * -1;
}

// console.log(opposite(1));

// 65 In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  let population = p0;
  let i = 0;
  while (p > population) {
    population = Math.floor(population + population * percent * 0.01 + aug);
    i++;
  }
  return i;
}

// console.log(nbYear(1500000, 0.25, 1000, 2000000));

// 66 Your goal is to create a function that removes the first and last characters of a string

function removeChar(str) {
  return str
    .split("")
    .filter((element, index) => index !== 0 && index !== str.length - 1)
    .join("");
}

// console.log(removeChar("ftb0wnb"));

// 67 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  if (str.length % 2 !== 0) {
    str += "_";
  }
  if (str === undefined) {
    return str;
  }
  let pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }

  return pairs;
}

// console.log(solution("abcdef"));

// 68 Write a function which takes a list of strings and returns each line prepended by the correct number.
function number(array) {
  if (array === []) {
    return [];
  } else {
    let result = [];
    for (i = 1; i <= array.length; i++) {
      result.push(`${i}: ${array[i - 1]}`);
    }
    return result;
  }
}

console.log(number(["a", "b", "c", "d"]));
console.log(number([]));
