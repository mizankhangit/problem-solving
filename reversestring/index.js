// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 (with for loop)
// ==========================
function reverse1(str) {
  let reversed = "";

  // for loop 1
  // for (let i = 0; i < str.length; i++) {
  //   reversed = str[i] + reversed;
  // }

  // for loop 2
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed = reversed + str[i];
  // }

  // for loop 3
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution 2 (with reverse method)
// ================================
function reverse2(str) {
  return str.split("").reverse().join("");
}

// Solution 3 (with reduce method)
// ================================
function reverse3(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

// Solution 4 (with recursion)
// ===========================
function reverse4(str) {
  if (str === "") {
    return "";
  } else {
    return reverse4(str.substr(1)) + str.charAt(0);
  }
  //   return str === "" ? "" : reverse4(str.substr(1)) + str.charAt(0);
}

console.log(reverse1("a23a23a23"));
console.log(reverse2("a23a23a23"));
console.log(reverse3("a23a23a23"));
console.log(reverse4("a23a23a23"));

module.exports = reverse1;
