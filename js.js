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
