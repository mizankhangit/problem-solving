/* --- Directions
- Given a string, return true if the string is a palindrome or false if it is not.  
- Palindromes are strings that form the same word if it is reversed. 
- *Do* include spaces and punctuation in determining if the string is a palindrome.
- Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
*/

// Clean function
const clean = (str) => str.toLowerCase().replace(/\W_/g, "");

/**
 * Solution 1 (with reverse method)
 */
function palindrome(str) {
  const clearnStr = clean(str);
  const reversed = clearnStr.split("").reverse().join("");
  return clearnStr === reversed;
}

/* Solution 2 (with every method) */
// function palindrome(str) {
//   const clearnStr = clean(str);
//   return clearnStr
//     .split("")
//     .every((char, index) => char === clearnStr[clearnStr.length - index - 1]);
// }

/**
 * solution 3 (using for loop)
 */
// function palindrome(str) {
//   const cleanStr = clean(str);
//   for (let i = 0; i < cleanStr.length / 2; i++) {
//     if (cleanStr[i] !== cleanStr[cleanStr.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

/**
 * Solution 4 (using for -- of loop)
 */
// function palindrome(str) {
//   const cleanStr = clean(str);
//   const charArr = cleanStr.split("");

//   for (let char of charArr) {
//     if (char !== charArr.pop()) {
//       return false;
//     }
//   }
//   return true;
// }

/**
 * Solution 5 (using forEach loop)
 */
// function palindrome(str) {
//   const cleanStr = clean(str);
//   let isPalindrome = true;

//   cleanStr.split("").forEach((char, index) => {
//     if (char !== cleanStr[cleanStr.length - 1 - index]) {
//       isPalindrome = false;
//     }
//   });

//   return isPalindrome;
// }

/**
 * Solution 6 (using map)
 */
// function palindrome(str) {
//   const cleanStr = clean(str);

//   const letterMatches = cleanStr.split("").map((char, index) => {
//     return char !== cleanStr[cleanStr.length - 1 - index];
//   });

//   return letterMatches.some((m) => !m);
// }

/**
 * Solution 7 (using reduce)
 */
// const palindrome = (str) => {
//   const cleanStr = clean(str);

//   return cleanStr.split("").reduce((match, char, i) => {
//     if (!match) {
//       return false;
//     }
//     return char === cleanStr[cleanStr.length - 1 - i];
//   }, true);
// };

module.exports = palindrome;
