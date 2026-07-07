/* ============================================================
   LESSON 1 â€” VARIABLES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools allowed: const / let, reassignment, + - * / , and
   joining strings with + . Nothing else yet.

   How to use:
   - Write your function where you see  // your code here
   - The test call sits below it, COMMENTED OUT. Delete the
     leading "// " to switch it on, then run:  node 1-variables.js
   - Each exercise has 3 TEST CASES: INPUT -> the EXACT value
     you must RETURN. All 3 match = correct.

   Every function has a DIFFERENT name, so all answers live here.
   ============================================================ */

// ----- 1. Running total -----
// Write `runningTotal()` (no input). Start let sum = 0, add 8, add 8,
// subtract 1, then RETURN sum.

function runningTotal() {
  let sum = 0;
  sum += 8;
  sum += 8;
  sum -= 1;
  return sum;
}
console.log(runningTotal());

// TEST 1:  runningTotal()      ->  15
// TEST 2:  runningTotal() + 5  ->  20
// TEST 3:  runningTotal() * 2  ->  30

// ----- 2. Swap into a label -----
// Write `swapLabel(a, b)` that RETURNS b + "-" + a (the two joined,
// swapped, with a dash between).
function swapLabel(a, b) {
  return b + "-" + a;
}
console.log(swapLabel("left", "right"));

// TEST 1:  swapLabel("left", "right")  ->  "right-left"
// TEST 2:  swapLabel("1", "2")         ->  "2-1"
// TEST 3:  swapLabel("a", "b")         ->  "b-a"

// ----- 3. Triple then bump -----
// Write `tripleBump(n)`. Set let x = n * 3, then add 1 to x, then RETURN x.

function tripleBump(n) {
  let x = n * 3;
  x += 1;
  return x;
}

// console.log(tripleBump(4));
// TEST 1:  tripleBump(4)   ->  13
// TEST 2:  tripleBump(0)   ->  1
// TEST 3:  tripleBump(10)  ->  31

// ----- 4. Full name -----
// Write `fullName(first, last)` that RETURNS the two joined with one space.

function fullName(first, last) {
  return first + " " + last;
}
console.log(fullName("Ada", "Lovelace"));

// TEST 1:  fullName("Ada", "Lovelace")  ->  "Ada Lovelace"
// TEST 2:  fullName("Sam", "Lee")       ->  "Sam Lee"
// TEST 3:  fullName("A", "B")           ->  "A B"

// ----- 5. Price with tax -----
// Write `withTax(price)`. Use const TAX = 0.1, then RETURN price plus
// price * TAX.

function withTax(price) {
  const TAX = 0.1;
  return price + price * TAX;
}
console.log(withTax(100));

// TEST 1:  withTax(100)  ->  110
// TEST 2:  withTax(50)   ->  55
// TEST 3:  withTax(0)    ->  0

// ----- 6. Count up by one, three times -----
// Write `countUp3(start)`. Set let c = start, then c++ three times, RETURN c.

function countUp3(start) {
  let c = start;
  c++;
  c++;
  c++;
  return c;
}
console.log(countUp3(7));

// TEST 1:  countUp3(7)   ->  10
// TEST 2:  countUp3(0)   ->  3
// TEST 3:  countUp3(-3)  ->  0

// ----- 7. Average of two -----
// Write `avgTwo(a, b)` that RETURNS the average of a and b.

function avgTwo(a, b) {
  return (a + b) / 2;
}
console.log(avgTwo(4, 8));

// TEST 1:  avgTwo(4, 8)    ->  6
// TEST 2:  avgTwo(10, 20)  ->  15
// TEST 3:  avgTwo(3, 3)    ->  3

// ----- 8. Rectangle area then double -----
// Write `doubleArea(w, h)`. Set let area = w * h, then reassign
// area = area * 2, RETURN area.

function doubleArea(w, h) {
  let area = w * h;
  area = area * 2;
  return area;
}
console.log(doubleArea(3, 4));

// TEST 1:  doubleArea(3, 4)  ->  24
// TEST 2:  doubleArea(5, 2)  ->  20
// TEST 3:  doubleArea(1, 1)  ->  2

/* ============================================================
   LESSON 2 â€” DATA TYPES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: typeof, Number(), String(), Boolean(), + - * / ,
   and the types number / string / boolean / undefined.

   Run:  node 2-data-types.js
   Switch on a test by deleting its leading "// ".
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. What type is it? -----
// Write `whatType(value)` that RETURNS the typeof string of value.

function whatType(value) {
  return typeof value;
}
console.log(whatType(42));

// TEST 1:  whatType(42)      ->  "number"
// TEST 2:  whatType("hi")    ->  "string"
// TEST 3:  whatType(true)    ->  "boolean"

// ----- 2. String to number -----
// Write `toNumber(text)` that RETURNS text turned into a real number.

function toNumber(text) {
  return Number(text);
}
console.log(toNumber("42"));

// TEST 1:  toNumber("42")        ->  42
// TEST 2:  toNumber("7") + 1     ->  8
// TEST 3:  toNumber("100") * 2   ->  200

// ----- 3. Number to string -----
// Write `toText(n)` that RETURNS n turned into a string.

function toText(n) {
  return String(n);
}
console.log(toText(42));

// TEST 1:  toText(42)            ->  "42"
// TEST 2:  typeof toText(5)      ->  "string"
// TEST 3:  toText(9) + "!"       ->  "9!"

// ----- 4. The string-plus-number trap -----
// Write `mix(a, b)` where a is a number and b is a string. RETURN a + b.
// (Find out what JS does when you add a number to a string.)

function mix(a, b) {
  return a + b;
}
console.log(mix(5, "5"));

// TEST 1:  mix(5, "5")       ->  "55"
// TEST 2:  mix(1, "0")       ->  "10"
// TEST 3:  typeof mix(2, "x") ->  "string"

// ----- 5. Is it a real number? -----
// Write `isRealNumber(text)` that RETURNS true if Number(text) is a valid
// number, false if it is NaN.

function isRealNumber(text) {
  return !isNaN(Number(text));
}
console.log(isRealNumber("42"));

// TEST 1:  isRealNumber("42")    ->  true
// TEST 2:  isRealNumber("hello") ->  false
// TEST 3:  isRealNumber("3.14")  ->  true

// ----- 6. Force a boolean -----
// Write `asBoolean(value)` that RETURNS value turned into a true/false
// with Boolean(value).

function asBoolean(value) {
  return Boolean(value);
}
console.log(asBoolean(0));

// TEST 1:  asBoolean(0)    ->  false
// TEST 2:  asBoolean(1)    ->  true
// TEST 3:  asBoolean("")   ->  false

// ----- 7. Undefined check -----
// Write `isMissing(value)` that RETURNS true when value is undefined.

function isMissing(value) {
  return value === undefined;
}
console.log(isMissing(undefined));

// TEST 1:  isMissing(undefined)  ->  true
// TEST 2:  isMissing(0)          ->  false
// TEST 3:  isMissing("x")        ->  false

// ----- 8. Round-trip a digit -----
// Write `firstDigitType(n)`. Turn n into a string, take its first
// character, RETURN the typeof that character.

function firstDigitType(n) {
  const str = String(n);
  const firstChar = str[0];
  return typeof firstChar;
}
console.log(firstDigitType(42));

// TEST 1:  firstDigitType(42)   ->  "string"
// TEST 2:  firstDigitType(7)    ->  "string"
// TEST 3:  firstDigitType(900)  ->  "string"

/* ============================================================
   LESSON 3 â€” OPERATORS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: < > <= >= === !== , && || ! , % , + - * / .
   Every answer RETURNS a value (often true/false). No if needed.

   Run:  node 3-operators.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Is it bigger? -----
// Write `isBigger(a, b)` that RETURNS true when a is greater than b.
function isBigger(a, b) {
  return a > b;
}
console.log(isBigger(10, 3));

// TEST 1:  isBigger(10, 3)  ->  true
// TEST 2:  isBigger(3, 10)  ->  false
// TEST 3:  isBigger(5, 5)   ->  false

// ----- 2. Exactly equal -----
// Write `sameValueAndType(a, b)` that RETURNS true only when a === b.
function sameValueAndType(a, b) {
  return a === b;
}
console.log(sameValueAndType(5, 5));

// TEST 1:  sameValueAndType(5, 5)     ->  true
// TEST 2:  sameValueAndType(5, "5")   ->  false
// TEST 3:  sameValueAndType("a", "a") ->  true

// ----- 3. In working hours -----
// Write `isWorkHour(hour)` that RETURNS true when hour is >= 9 AND < 17.
function isWorkHour(hour) {
  return hour >= 9 && hour < 17;
}
console.log(isWorkHour(10));

// TEST 1:  isWorkHour(10)  ->  true
// TEST 2:  isWorkHour(17)  ->  false
// TEST 3:  isWorkHour(8)   ->  false

// ----- 4. Weekend day -----
// Write `isWeekend(day)` that RETURNS true when day is "Sat" OR "Sun".
function isWeekend(day) {
  return day === "Sat" && day === "Sun";
}
console.log(isWeekend("Sun"));

// TEST 1:  isWeekend("Sat")  ->  true
// TEST 2:  isWeekend("Sun")  ->  true
// TEST 3:  isWeekend("Mon")  ->  false

// ----- 5. Flip it -----
// Write `flip(value)` that RETURNS the NOT of value (the opposite boolean).
function flip(value) {
  return !value;
}
console.log(flip(true));

// TEST 1:  flip(true)   ->  false
// TEST 2:  flip(false)  ->  true
// TEST 3:  flip(0)      ->  true

// ----- 6. Even number -----
// Write `isEven(n)` that RETURNS true when n divides evenly by 2 (use %).
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(8));

// TEST 1:  isEven(8)   ->  true
// TEST 2:  isEven(7)   ->  false
// TEST 3:  isEven(0)   ->  true

// ----- 7. In range (inclusive) -----
// Write `inRange(n)` that RETURNS true when n is between 50 and 100 inclusive.
function inRange(n) {
  return n >= 50 && n <= 100;
}
console.log(inRange(75));

// TEST 1:  inRange(75)   ->  true
// TEST 2:  inRange(50)   ->  true
// TEST 3:  inRange(101)  ->  false

// ----- 8. Default fallback -----
// Write `displayName(nick)` that RETURNS nick, OR "Guest" when nick is empty.
// (Use the || operator.)

function displayName(nick) {
  return nick || "Guest";
}
console.log(displayName(""));

// TEST 1:  displayName("")     ->  "Guest"
// TEST 2:  displayName("Sam")  ->  "Sam"
// TEST 3:  displayName("x")    ->  "x"

// ----- 9. Leap-ish check -----
// Write `divisibleByBoth(n)` that RETURNS true when n divides evenly by
// BOTH 3 and 5.

function divisibleByBoth(n) {
  return n % 3 === 0 && n % 5 === 0;
}
console.log(divisibleByBoth(15));

// TEST 1:  divisibleByBoth(15)  ->  true
// TEST 2:  divisibleByBoth(9)   ->  false
// TEST 3:  divisibleByBoth(30)  ->  true

// ----- 10. Access granted -----
// Write `canEnter(pinOk, isAdmin)` that RETURNS true when pinOk is true
// OR isAdmin is true.

function canEnter(pinOk, isAdmin) {
  return pinOk || isAdmin;
}
console.log(canEnter(false, true));

// TEST 1:  canEnter(false, true)   ->  true
// TEST 2:  canEnter(true, false)   ->  true
// TEST 3:  canEnter(false, false)  ->  false

/* ============================================================
   LESSON 4 â€” IF STATEMENTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: if / else if / else, plus everything before.
   Each function RETURNS a value chosen by a decision.

   Run:  node 4-if-statements.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Pass or fail -----
// Write `passFail(score)` that RETURNS "Pass" when score >= 60, else "Fail".

function passFail(score) {
  if (score >= 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(passFail(72));

// TEST 1:  passFail(72)  ->  "Pass"
// TEST 2:  passFail(60)  ->  "Pass"
// TEST 3:  passFail(40)  ->  "Fail"

// ----- 2. Sign of a number -----
// Write `signOf(n)` that RETURNS "positive", "negative", or "zero".

function signOf(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(signOf(-4));

// TEST 1:  signOf(-4)  ->  "negative"
// TEST 2:  signOf(0)   ->  "zero"
// TEST 3:  signOf(9)   ->  "positive"

// ----- 3. Letter grade -----
// Write `grade(score)`: 90+ "A", 80-89 "B", 70-79 "C", below 70 "F".

function grade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}
console.log(grade(85));

// TEST 1:  grade(95)  ->  "A"
// TEST 2:  grade(85)  ->  "B"
// TEST 3:  grade(50)  ->  "F"

// ----- 4. Bigger of two -----
// Write `bigger(a, b)` that RETURNS the larger, or "equal" when they match.

function bigger(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "equal";
  }
}
console.log(bigger(14, 9));

// TEST 1:  bigger(14, 9)  ->  14
// TEST 2:  bigger(3, 8)   ->  8
// TEST 3:  bigger(5, 5)   ->  "equal"

// ----- 5. Ticket price -----
// Write `ticketPrice(age)`: under 12 -> 5, 12 to 64 -> 12, 65+ -> 8.

function ticketPrice(age) {
  if (age < 12) {
    return 5;
  } else if (age <= 64) {
    return 12;
  } else {
    return 8;
  }
}
console.log(ticketPrice(70));

// TEST 1:  ticketPrice(8)   ->  5
// TEST 2:  ticketPrice(30)  ->  12
// TEST 3:  ticketPrice(70)  ->  8

// ----- 6. Traffic light -----
// Write `light(color)`: "green" -> "Go", "yellow" -> "Slow", "red" -> "Stop",
// anything else -> "Invalid".

function light(color) {
  if (color === "green") {
    return "Go";
  } else if (color === "yellow") {
    return "Slow";
  } else if (color === "red") {
    return "Stop";
  } else {
    return "Invalid";
  }
}
console.log(light("red"));

// TEST 1:  light("green")   ->  "Go"
// TEST 2:  light("red")     ->  "Stop"
// TEST 3:  light("purple")  ->  "Invalid"

// ----- 7. FizzBuzz of one number -----
// Write `fizzbuzz(n)`: divisible by 3 and 5 -> "FizzBuzz", by 3 -> "Fizz",
// by 5 -> "Buzz", else the number n itself.
function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}
console.log(fizzbuzz(15));

// TEST 1:  fizzbuzz(15)  ->  "FizzBuzz"
// TEST 2:  fizzbuzz(9)   ->  "Fizz"
// TEST 3:  fizzbuzz(7)   ->  7

// ----- 8. Temperature advice -----
// Write `clothes(temp)`: above 28 -> "Shorts", 15 to 28 -> "Jacket",
// below 15 -> "Coat".
function clothes(temp) {
  if (temp > 28) {
    return "Shorts";
  } else if (temp >= 15) {
    return "Jacket";
  } else {
    return "Coat";
  }
}
console.log(clothes(30));

// TEST 1:  clothes(30)  ->  "Shorts"
// TEST 2:  clothes(20)  ->  "Jacket"
// TEST 3:  clothes(5)   ->  "Coat"

// ----- 9. Login result -----
// Write `login(user, pass)` that RETURNS "Welcome" when user is "admin"
// AND pass is "1234", otherwise "Denied".
function login(user, pass) {
  if (user === "admin" && pass === "1234") {
    return "Welcome";
  } else {
    return "Denied";
  }
}
console.log(login("admin", "1234"));

// TEST 1:  login("admin", "1234")  ->  "Welcome"
// TEST 2:  login("admin", "0000")  ->  "Denied"
// TEST 3:  login("guest", "1234")  ->  "Denied"

// ----- 10. Absolute value -----
// Write `absValue(n)` that RETURNS n when n >= 0, otherwise -n.
function absValue(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n;
  }
}
console.log(absValue(-7));
// TEST 1:  absValue(-7)  ->  7
// TEST 2:  absValue(7)   ->  7
// TEST 3:  absValue(0)   ->  0

/* ============================================================
   LESSON 5 â€” STRINGS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: .length, [i], .toUpperCase/.toLowerCase, .includes,
   .indexOf, .slice, .trim, + , String()/Number()/isNaN, if.
   NO loops, NO functions-inside beyond these. Each RETURNS a value.

   Run:  node 5-strings.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Shout it -----
// Write `shout(text)` that RETURNS text in ALL CAPS.
function shout(text) {
  return text.toUpperCase();
}

// console.log(shout("hi"));
// TEST 1:  shout("hi")     ->  "HI"
// TEST 2:  shout("Code")   ->  "CODE"
// TEST 3:  shout("a")      ->  "A"

// ----- 2. First letter -----
// Write `firstLetter(word)` that RETURNS the character at index 0.
function firstLetter(word) {
  return word[0];
}
console.log(firstLetter("hello"));
// TEST 1:  firstLetter("hello")  ->  "h"
// TEST 2:  firstLetter("Zebra")  ->  "Z"
// TEST 3:  firstLetter("x")      ->  "x"

// ----- 3. Last letter -----
// Write `lastLetter(word)` that RETURNS the last character of any length word.
function lastLetter(word) {
  return word[word.length - 1];
}
console.log(lastLetter("hello"));

// TEST 1:  lastLetter("hello")  ->  "o"
// TEST 2:  lastLetter("cat")    ->  "t"
// TEST 3:  lastLetter("z")      ->  "z"

// ----- 4. Initials -----
// Write `initials(first, last)` that RETURNS the two first letters,
// uppercased, joined with a dot: "M.J".
function initials(first, last) {
  return first[0].toUpperCase() + "." + last[0].toUpperCase();
}
console.log(initials("maria", "jones"));
// TEST 1:  initials("maria", "jones")  ->  "M.J"
// TEST 2:  initials("sam", "lee")      ->  "S.L"
// TEST 3:  initials("a", "b")          ->  "A.B"

// ----- 5. Capitalize -----
// Write `capitalize(word)` that RETURNS the word with the first letter
// uppercased and the rest unchanged.

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("maria"));

// TEST 1:  capitalize("maria")  ->  "Maria"
// TEST 2:  capitalize("code")   ->  "Code"
// TEST 3:  capitalize("x")      ->  "X"

// ----- 6. Looks like an email -----
// Write `isEmail(text)` that RETURNS true when text includes "@", else false.
function isEmail(text) {
  return text.includes("@");
}
console.log(isEmail("sam@mail.com"));
// TEST 1:  isEmail("sam@mail.com")  ->  true
// TEST 2:  isEmail("sam.com")       ->  false
// TEST 3:  isEmail("@")             ->  true

// ----- 7. Valid username length -----
// Write `validUsername(name)` that RETURNS "Valid" when length is >= 3
// AND <= 15, otherwise "Invalid".
function validUsername(name) {
  if (name.length >= 3 && name.length <= 15) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
console.log(validUsername("jordan"));

// TEST 1:  validUsername("jordan")  ->  "Valid"
// TEST 2:  validUsername("jo")      ->  "Invalid"
// TEST 3:  validUsername("a")       ->  "Invalid"

// ----- 8. Area code -----
// Write `areaCode(phone)` (10-char string) that RETURNS the first 3 chars.
function areaCode(phone) {
  return phone.slice(0, 3);
}
console.log(areaCode("5551234567"));

// TEST 1:  areaCode("5551234567")  ->  "555"
// TEST 2:  areaCode("2129998888")  ->  "212"
// TEST 3:  areaCode("0000000000")  ->  "000"

// ----- 9. Same word ignoring case -----
// Write `sameWord(a, b)` that RETURNS true when a and b match ignoring case.
function sameWord(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
console.log(sameWord("Hello", "hello"));

// TEST 1:  sameWord("Hello", "hello")  ->  true
// TEST 2:  sameWord("cat", "dog")      ->  false
// TEST 3:  sameWord("ABC", "abc")      ->  true

// ----- 10. Clean and measure -----
// Write `cleanLength(raw)` that trims the spaces off both ends and RETURNS
// the length of what is left.
function cleanLength(raw) {
  return raw.trim().length;
}
console.log(cleanLength("  hi  "));

// TEST 1:  cleanLength("  hi  ")      ->  2
// TEST 2:  cleanLength("  hello   ")  ->  5
// TEST 3:  cleanLength("x")           ->  1

// ----- 11. Pad the clock -----
// Write `padClock(minute)` (0-59 number). RETURN a 2-char string, adding a
// leading "0" when it is a single digit: 5 -> "05", 42 -> "42".
function padClock(minute) {
  if (minute < 10) {
    return "0" + minute;
  } else {
    return String(minute);
  }
}
console.log(padClock(5));

// TEST 1:  padClock(5)   ->  "05"
// TEST 2:  padClock(42)  ->  "42"
// TEST 3:  padClock(0)   ->  "00"

// ----- 12. Cents to price tag -----
// Write `priceTag(cents)` (3+ digit whole number). RETURN "$D.CC" where CC
// is the last 2 digits and D is the rest: 150 -> "$1.50", 905 -> "$9.05".

function priceTag(cents) {
  let dollars = Math.floor(cents / 100);
  let centsRemaining = cents % 100;
  return `$${dollars}.${centsRemaining.toString().padStart(2, "0")}`;
}
console.log(priceTag(150));

// TEST 1:  priceTag(150)  ->  "$1.50"
// TEST 2:  priceTag(905)  ->  "$9.05"
// TEST 3:  priceTag(1299) ->  "$12.99"

/* ============================================================
   LESSON 6 â€” LOOPS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: for / while, % , Math.floor, strings, if. NO arrays.
   Each function RETURNS its answer (a number, string, or boolean).

   Run:  node 6-loops.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Sum to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n.

function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sumTo(5));
// TEST 1:  sumTo(5)    ->  15
// TEST 2:  sumTo(1)    ->  1
// TEST 3:  sumTo(10)   ->  55

// ----- 2. Count multiples of 4 -----
// Write `countFours(max)` that RETURNS how many numbers 1..max divide by 4.

function countFours(max) {
  let count = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 4 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countFours(20));
// TEST 1:  countFours(20)  ->  5
// TEST 2:  countFours(7)   ->  1
// TEST 3:  countFours(3)   ->  0

// ----- 3. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n.

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(1)  ->  1

// ----- 4. Power without ** -----
// Write `power(base, exp)` that RETURNS base multiplied by itself exp times,
// using a loop. (power(2,3) = 8.) exp is 0 or more; exp 0 -> 1.

function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 3));

// TEST 1:  power(2, 3)   ->  8
// TEST 2:  power(5, 2)   ->  25
// TEST 3:  power(7, 0)   ->  1

// ----- 5. Count the digits -----
// Write `digitCount(n)` (n >= 0) that RETURNS how many digits n has,
// using Math.floor(n / 10) in a loop.
// your code here

function digitCount(n) {
  let count = 1;
  while (n >= 10) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(digitCount(7384));
// TEST 1:  digitCount(7384)  ->  4
// TEST 2:  digitCount(50)    ->  2
// TEST 3:  digitCount(0)     ->  1

// ----- 6. Sum of digits -----
// Write `digitSum(n)` that RETURNS the sum of n's digits.
function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(digitSum(1234));

// TEST 1:  digitSum(1234)  ->  10
// TEST 2:  digitSum(999)   ->  27
// TEST 3:  digitSum(5)     ->  5

// ----- 7. Count a letter -----
// Write `countLetter(text, letter)` that RETURNS how many times letter
// appears in text.
function countLetter(text, letter) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("banana", "a"));

// TEST 1:  countLetter("banana", "a")  ->  3
// TEST 2:  countLetter("hello", "l")   ->  2
// TEST 3:  countLetter("dog", "z")     ->  0

// ----- 8. Reverse a string -----
// Write `reverse(text)` that RETURNS text backwards, building it in a loop.
function reverse(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}
console.log(reverse("code"));

// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"

// ----- 9. Count vowels -----
// Write `countVowels(text)` that RETURNS how many vowels (a,e,i,o,u) are in text.
function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));

// TEST 1:  countVowels("javascript")  ->  3
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0

// ----- 10. Is it prime? -----
// Write `isPrime(n)` (n >= 2) that RETURNS true when n has no divisor
// between 2 and n-1.
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(13));

// TEST 1:  isPrime(13)  ->  true
// TEST 2:  isPrime(15)  ->  false
// TEST 3:  isPrime(2)   ->  true

// ----- 11. Steps to zero -----
// Write `stepsToZero(n)`. While n > 0: if even, halve it; if odd, subtract 1.
// RETURN the number of steps to reach 0.
function stepsToZero(n) {
  let steps = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
    }
    steps++;
  }
  return steps;
}
console.log(stepsToZero(14));

// TEST 1:  stepsToZero(14)  ->  6
// TEST 2:  stepsToZero(8)   ->  4
// TEST 3:  stepsToZero(1)   ->  1

// ----- 12. Number palindrome -----
// Write `isNumPalindrome(n)` (n >= 0) that RETURNS true when n reads the same
// forwards and backwards. Build the reverse with a loop, then compare.

function isNumPalindrome(n) {
  let reversed = 0;
  let original = n;
  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  return original === reversed;
}
console.log(isNumPalindrome(121));

// TEST 1:  isNumPalindrome(121)  ->  true
// TEST 2:  isNumPalindrome(123)  ->  false
// TEST 3:  isNumPalindrome(7)    ->  true

/* ============================================================
   LESSON 7 â€” FUNCTIONS: FRESH EXERCISES
   ------------------------------------------------------------
   Focus: parameters, return, default values, and CALLING one
   function from inside another (composition). Tools: everything
   from lessons 1-6. NO arrays.

   Run:  node 7-functions.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Add three -----
// Write `addThree(a, b, c)` that RETURNS the sum of all three.
function addThree(a, b, c) {
  return a + b + c;
}
console.log(addThree(1, 2, 3));

// TEST 1:  addThree(1, 2, 3)   ->  6
// TEST 2:  addThree(10, 0, 5)  ->  15
// TEST 3:  addThree(-1, 1, 0)  ->  0

// ----- 2. Greet with default -----
// Write `greet(name)` that RETURNS "Hello, " + name. If name is not given,
// default it to "friend". (Use a default parameter.)

function greet(name = "friend") {
  return "Hello, " + name;
}
console.log(greet("Sam"));

// TEST 1:  greet("Sam")  ->  "Hello, Sam"
// TEST 2:  greet()       ->  "Hello, friend"
// TEST 3:  greet("Ada")  ->  "Hello, Ada"

// ----- 3. Max of two -----
// Write `maxTwo(a, b)` that RETURNS the larger of the two.
function maxTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxTwo(3, 9));
// TEST 1:  maxTwo(3, 9)    ->  9
// TEST 2:  maxTwo(10, 2)   ->  10
// TEST 3:  maxTwo(5, 5)    ->  5

// ----- 4. Max of three (compose #3) -----
// Write `maxThree(a, b, c)` that RETURNS the largest, by CALLING maxTwo twice.
// your code here

// console.log(maxThree(3, 9, 5));
// TEST 1:  maxThree(3, 9, 5)    ->  9
// TEST 2:  maxThree(8, 2, 4)    ->  8
// TEST 3:  maxThree(1, 1, 7)    ->  7

// ----- 5. Is even (helper) -----
// Write `even(n)` that RETURNS true when n is even.
// your code here

// console.log(even(4));
// TEST 1:  even(4)  ->  true
// TEST 2:  even(7)  ->  false
// TEST 3:  even(0)  ->  true

// ----- 6. Label parity (compose #5) -----
// Write `parityLabel(n)` that RETURNS "even" or "odd" by CALLING even(n).
// your code here

// console.log(parityLabel(7));
// TEST 1:  parityLabel(7)  ->  "odd"
// TEST 2:  parityLabel(4)  ->  "even"
// TEST 3:  parityLabel(0)  ->  "even"

// ----- 7. Rectangle area -----
// Write `area(w, h)` that RETURNS w * h.
// your code here

// console.log(area(3, 4));
// TEST 1:  area(3, 4)  ->  12
// TEST 2:  area(5, 5)  ->  25
// TEST 3:  area(1, 9)  ->  9

// ----- 8. Total cost (compose #7) -----
// Write `tileCost(w, h, pricePerTile)` that RETURNS area(w, h) * pricePerTile.
// your code here

// console.log(tileCost(2, 3, 5));
// TEST 1:  tileCost(2, 3, 5)   ->  30
// TEST 2:  tileCost(4, 4, 2)   ->  32
// TEST 3:  tileCost(1, 1, 10)  ->  10

// ----- 9. Clamp -----
// Write `clamp(n, low, high)` that RETURNS low if n < low, high if n > high,
// otherwise n.
// your code here

// console.log(clamp(15, 0, 10));
// TEST 1:  clamp(15, 0, 10)  ->  10
// TEST 2:  clamp(-3, 0, 10)  ->  0
// TEST 3:  clamp(5, 0, 10)   ->  5

// ----- 10. Count down to string -----
// Write `countdown(n)` that RETURNS a string of n down to 1 joined by spaces,
// using a loop inside the function. countdown(3) -> "3 2 1".
// your code here

// console.log(countdown(3));
// TEST 1:  countdown(3)  ->  "3 2 1"
// TEST 2:  countdown(5)  ->  "5 4 3 2 1"
// TEST 3:  countdown(1)  ->  "1"

/* ============================================================
   LESSON 8 â€” OBJECTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: obj.key / obj[key], "key" in obj, delete, for..in,
   Object.keys / Object.values, { ...spread }. Plus everything before.

   Run:  node 8-objects.js
   Comparing objects: two objects are never === even when equal.
   To check in code, compare JSON.stringify(yours) to the expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Make a book -----
// Write `makeBook()` (no input) that RETURNS { title: "Dune", pages: 412 }.
function makeBook() {
  return { title: "Dune", pages: 412 };
}
console.log(makeBook().title);

// TEST 1:  makeBook().title       ->  "Dune"
// TEST 2:  makeBook().pages       ->  412
// TEST 3:  typeof makeBook()      ->  "object"

// ----- 2. Read a key -----
// Write `getTitle(book)` that RETURNS the title property.
function getTitle(book) {
  return book.title;
}
console.log(getTitle({ title: "1984", pages: 328 }));

// TEST 1:  getTitle({ title: "1984", pages: 328 })  ->  "1984"
// TEST 2:  getTitle({ title: "It" })                ->  "It"
// TEST 3:  getTitle({ title: "" })                  ->  ""

// ----- 3. Read by variable key -----
// Write `field(obj, key)` that RETURNS the value behind key (use brackets).
function field(obj, key) {
  return obj[key];
}
console.log(field({ a: 1, b: 2 }, "b"));
// TEST 1:  field({ a: 1, b: 2 }, "b")        ->  2
// TEST 2:  field({ city: "NYC" }, "city")    ->  "NYC"
// TEST 3:  field({ a: 1 }, "missing")        ->  undefined

// ----- 4. Set a price (mutate) -----
// Write `setPrice(item, price)` that sets item.price = price and RETURNS item.
function setPrice(item, price) {
  item.price = price;
  return item;
}
console.log(setPrice({ name: "pen" }, 3).price);
// TEST 1:  setPrice({ name: "pen" }, 3).price  ->  3
// TEST 2:  setPrice({ price: 1 }, 9).price     ->  9
// TEST 3:  setPrice({ name: "x" }, 0).price    ->  0

// ----- 5. Has key? -----
// Write `hasKey(obj, key)` that RETURNS true when key exists in obj.
function hasKey(obj, key) {
  return key in obj;
}
console.log(hasKey({ a: 1 }, "a"));
// TEST 1:  hasKey({ a: 1 }, "a")        ->  true
// TEST 2:  hasKey({ a: 1 }, "b")        ->  false
// TEST 3:  hasKey({ name: "x" }, "name") ->  true

// ----- 6. Remove a key (mutate) -----
// Write `removeKey(obj, key)` that deletes key from obj and RETURNS obj.
function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeKey({ a: 1, b: 2 }, "b"));

// TEST 1:  "b" in removeKey({ a: 1, b: 2 }, "b")  ->  false
// TEST 2:  "a" in removeKey({ a: 1, b: 2 }, "b")  ->  true
// TEST 3:  removeKey({ x: 9 }, "x").x             ->  undefined

// ----- 7. Count the keys -----
// Write `keyCount(obj)` that RETURNS how many keys obj has.
function keyCount(obj) {
  return Object.keys(obj).length;
}
console.log(keyCount({ a: 1, b: 2, c: 3 }));

// TEST 1:  keyCount({ a: 1, b: 2, c: 3 })  ->  3
// TEST 2:  keyCount({})                    ->  0
// TEST 3:  keyCount({ only: true })        ->  1

// ----- 8. Sum the values -----
// Write `sumValues(obj)` (all values are numbers) that RETURNS their total.
function sumValues(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
console.log(sumValues({ a: 1, b: 2, c: 3 }));

// TEST 1:  sumValues({ a: 1, b: 2, c: 3 })  ->  6
// TEST 2:  sumValues({ x: 10, y: 5 })       ->  15
// TEST 3:  sumValues({ only: 7 })           ->  7

// ----- 9. Merge two objects (copy) -----
// Write `merge(a, b)` that RETURNS a NEW object with both, b winning on
// shared keys. Do not change a or b.
function merge(a, b) {
  return { ...a, ...b };
}
console.log(merge({ a: 1 }, { b: 2 }));

// TEST 1:  merge({ a: 1 }, { b: 2 }).b         ->  2
// TEST 2:  merge({ a: 1 }, { a: 9 }).a         ->  9
// TEST 3:  keyCount(merge({ a: 1 }, { b: 2 })) ->  2

// ----- 10. Highest value key -----
// Write `topKey(scores)` (values are numbers) that RETURNS the key with the
// biggest value.
function topKey(scores) {
  let maxKey = null;
  let maxValue = -Infinity;
  for (let key in scores) {
    if (scores[key] > maxValue) {
      maxValue = scores[key];
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(topKey({ sam: 5, ada: 9, bo: 3 }));
// TEST 1:  topKey({ sam: 5, ada: 9, bo: 3 })  ->  "ada"
// TEST 2:  topKey({ a: 1, b: 2 })             ->  "b"
// TEST 3:  topKey({ only: 7 })                ->  "only"

/* ============================================================
   LESSON 9 â€” ARRAYS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: [ ], arr[i], arr.length, push/pop/unshift/shift,
   includes/indexOf, and a for loop over the items. Plus before.

   Run:  node 9-arrays.js
   Comparing arrays by eye: the test shows the expected list.
   To check in code, compare JSON.stringify(yours) to expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. First item -----
// Write `firstItem(arr)` that RETURNS the item at index 0.
function firstItem(arr) {
  return arr[0];
}
console.log(firstItem([10, 20, 30]));
// TEST 1:  firstItem([10, 20, 30])  ->  10
// TEST 2:  firstItem(["a", "b"])    ->  "a"
// TEST 3:  firstItem([7])           ->  7

// ----- 2. Sum all -----
// Write `sumAll(arr)` (numbers) that RETURNS the total of every item.
function sumAll(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sumAll([1, 2, 3, 4]));

// TEST 1:  sumAll([1, 2, 3, 4])  ->  10
// TEST 2:  sumAll([])            ->  0
// TEST 3:  sumAll([5])           ->  5

// ----- 3. Biggest number -----
// Write `maxOf(arr)` (numbers) that RETURNS the largest item.
function maxOf(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxOf([3, 9, 5]));

// TEST 1:  maxOf([3, 9, 5])      ->  9
// TEST 2:  maxOf([-1, -5, -2])   ->  -1
// TEST 3:  maxOf([7])            ->  7

// ----- 4. Count occurrences -----
// Write `countOf(arr, target)` that RETURNS how many items equal target.
function countOf(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

console.log(countOf([1, 2, 2, 3, 2], 2));
// TEST 1:  countOf([1, 2, 2, 3, 2], 2)        ->  3
// TEST 2:  countOf(["a", "b", "a"], "a")      ->  2
// TEST 3:  countOf([1, 2, 3], 9)              ->  0

// ----- 5. Add to end -----
// Write `append(arr, item)` that pushes item and RETURNS arr.
function append(arr, item) {
  arr.push(item);
  return arr;
}
console.log(append([1, 2], 3));
// TEST 1:  append([1, 2], 3)          ->  [1, 2, 3]
// TEST 2:  append([], "hi").length    ->  1
// TEST 3:  append(["a"], "b")         ->  ["a", "b"]

// ----- 6. Remove first -----
// Write `removeFirst(arr)` that shifts off the first item and RETURNS arr.
function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([1, 2, 3]));
// TEST 1:  removeFirst([1, 2, 3])        ->  [2, 3]
// TEST 2:  removeFirst([9]).length       ->  0
// TEST 3:  removeFirst(["a", "b", "c"])  ->  ["b", "c"]

// ----- 7. Contains -----
// Write `contains(arr, item)` that RETURNS true when item is in arr.
function contains(arr, item) {
  return arr.includes(item);
}
console.log(contains(["cat", "dog"], "dog"));
// TEST 1:  contains(["cat", "dog"], "dog")   ->  true
// TEST 2:  contains([1, 2, 3], 9)            ->  false
// TEST 3:  contains([], "x")                 ->  false

// ----- 8. Count even numbers -----
// Write `countEven(arr)` (numbers) that RETURNS how many items are even.
function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEven([1, 2, 3, 4, 6]));
// TEST 1:  countEven([1, 2, 3, 4, 6])  ->  3
// TEST 2:  countEven([1, 3, 5])        ->  0
// TEST 3:  countEven([2, 4])           ->  2

// ----- 9. Join with dashes -----
// Write `dashJoin(arr)` that RETURNS the items joined into one string with
// "-" between them, built with a loop. dashJoin(["a","b","c"]) -> "a-b-c".

function dashJoin(arr) {
  if (arr.length === 0) {
    return "";
  }
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = result + "-" + arr[i];
  }
  return result;
}
console.log(dashJoin(["a", "b", "c"]));

// TEST 1:  dashJoin(["a", "b", "c"])  ->  "a-b-c"
// TEST 2:  dashJoin(["one"])          ->  "one"
// TEST 3:  dashJoin([1, 2])           ->  "1-2"

// ----- 10. Average -----
// Write `average(arr)` (numbers) that RETURNS the mean of the items.
function average(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}
console.log(average([2, 4, 6]));

// TEST 1:  average([2, 4, 6])    ->  4
// TEST 2:  average([10, 20])     ->  15
// TEST 3:  average([5])          ->  5

// ----- 11. Reverse into a new array -----
// Write `reverseArr(arr)` that RETURNS a NEW array with the items reversed.
// Do not change the original.
function reverseArr(arr) {
  let newArr = [];
  for (let i = arr.leght - 1; i >= 0; i++);
}
console.log(reverseArr([1, 2, 3]));
// TEST 1:  reverseArr([1, 2, 3])        ->  [3, 2, 1]
// TEST 2:  reverseArr(["a", "b"])       ->  ["b", "a"]
// TEST 3:  reverseArr([7])              ->  [7]

// ----- 12. Only the evens (build a new array) -----
// Write `evensOnly(arr)` that RETURNS a NEW array with only the even numbers,
// in the same order.
function evensOnly(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(evensOnly([1, 2, 3, 4, 5, 6]));
// TEST 1:  evensOnly([1, 2, 3, 4, 5, 6])  ->  [2, 4, 6]
// TEST 2:  evensOnly([1, 3, 5])           ->  []
// TEST 3:  evensOnly([2, 4])              ->  [2, 4]

/* ============================================================
   MVP â€” BUILD A CALCULATOR'S LOGIC (no HTML, no styling)
   ------------------------------------------------------------
   This file is one long ladder. Each rung is a small exercise
   that becomes a PIECE of a real calculator. By the last rung
   you will have written every part of how a calculator thinks:

     digits -> operators -> apply one op -> read an expression
     -> compute it -> chain many ops left to right.

   Tools: functions, return, if, loops, strings, arrays,
   .split(" "), Number()/String(), %, Math. Each function uses a
   DIFFERENT name and may CALL the earlier ones you wrote.

   Run:  node 10-calculator-mvp.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

/* ---------- STAGE 1: the four button operations ---------- */

// ----- 1. add -----
// Write `add(a, b)` that RETURNS a + b.
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// console.log(add(10, 20));
// TEST 1:  add(2, 3)    ->  5
// TEST 2:  add(-1, 1)   ->  0
// TEST 3:  add(10, 0)   ->  10

// ----- 2. subtract -----
// Write `subtract(a, b)` that RETURNS a - b.
function subtract(a, b) {
  return a - b;
}
console.log(subtract(5, 3));
// console.log(subtract(5, 3));
// TEST 1:  subtract(5, 3)   ->  2
// TEST 2:  subtract(0, 4)   ->  -4
// TEST 3:  subtract(9, 9)   ->  0

// ----- 3. multiply -----
// Write `multiply(a, b)` that RETURNS a * b.

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 3));

// console.log(multiply(4, 3));
// TEST 1:  multiply(4, 3)   ->  12
// TEST 2:  multiply(7, 0)   ->  0
// TEST 3:  multiply(-2, 5)  ->  -10

// ----- 4. divide (guard the zero) -----
// Write `divide(a, b)` that RETURNS a / b â€” BUT a real calculator must not
// crash on divide-by-zero. When b is 0, RETURN the string "Error".

function divide(a, b) {
  if (b === 0) {
    return "Error";
  }
  return a / b;
}
console.log(divide(10, 2));

// TEST 1:  divide(10, 2)   ->  5
// TEST 2:  divide(7, 0)    ->  "Error"
// TEST 3:  divide(9, 3)    ->  3

/* ---------- STAGE 2: recognizing operators ---------- */

// ----- 5. isOperator -----
// Write `isOperator(token)` that RETURNS true when token is one of
// "+", "-", "*", "/".

function isOperator(token) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}
console.log(isOperator("9"));

// TEST 1:  isOperator("+")  ->  true
// TEST 2:  isOperator("/")  ->  true
// TEST 3:  isOperator("9")  ->  false

/* ---------- STAGE 3: the heart â€” apply ONE operation ---------- */

// ----- 6. applyOp (the dispatcher) -----
// Write `applyOp(a, op, b)` that looks at op and RETURNS the right result by
// CALLING add / subtract / multiply / divide. If op is not a known operator,
// RETURN "Error".

function applyOp(a, op, b) {
  if (op === "+") return add(a, b);
  if (op === "-") return subtract(a, b);
  if (op === "*") return multiply(a, b);
  if (op === "/") return divide(a, b);
  return "Error";
}
console.log(applyOp(6, "*", 7));

// TEST 1:  applyOp(6, "*", 7)   ->  42
// TEST 2:  applyOp(8, "/", 0)   ->  "Error"
// TEST 3:  applyOp(10, "?", 2)  ->  "Error"

/* ---------- STAGE 4: reading what the user typed ---------- */

// ----- 7. tokenize -----
// A calculator gets a flat string like "3 + 4". Write `tokenize(expr)` that
// RETURNS an array of its pieces split on spaces: ["3", "+", "4"].

function tokenize(expr) {
  return expr.split(" ");
}
console.log(tokenize("3 + 4"));
// TEST 1:  tokenize("3 + 4")        ->  ["3", "+", "4"]
// TEST 2:  tokenize("12 * 5")       ->  ["12", "*", "5"]
// TEST 3:  tokenize("8 - 2 + 1")    ->  ["8", "-", "2", "+", "1"]

/* ---------- STAGE 5: compute a single "a op b" string ---------- */

// ----- 8. calcOne -----
// Write `calcOne(expr)` for a 3-token expression like "3 + 4". Tokenize it,
// turn the two ends into numbers, and RETURN applyOp(left, op, right).

function calcOne(expr) {
  let tokens = tokenize(expr);
  let left = Number(tokens[0]);
  let op = tokens[1];
  let right = Number(tokens[2]);
  return applyOp(left, op, right);
}
console.log(calcOne("3 + 4"));

// TEST 1:  calcOne("3 + 4")    ->  7
// TEST 2:  calcOne("10 / 0")   ->  "Error"
// TEST 3:  calcOne("6 * 7")    ->  42

/* ---------- STAGE 6: the full engine â€” chain left to right ---------- */

// ----- 9. calculate (the MVP) -----
// Write `calculate(expr)` for any length like "8 - 2 + 1" or "2 * 3 * 4".
// Tokenize it. Start the running result at the first number. Then walk the
// rest in pairs (operator, number), folding each into the result with
// applyOp. RETURN the final number. (No operator precedence â€” strictly left
// to right, exactly how a basic phone calculator works.)
// If any step returns "Error", RETURN "Error".
function calculate(expr) {
  let tokens = tokenize(expr);
  let result = Number(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    let op = tokens[i];
    let nextNum = Number(tokens[i + 1]);

    result = applyOp(result, op, nextNum);

    if (result === "Error") {
      return "Error";
    }
  }
  return result;
}
console.log(calculate("8 - 2 + 1"));

// TEST 1:  calculate("8 - 2 + 1")   ->  7
// TEST 2:  calculate("2 * 3 * 4")   ->  24
// TEST 3:  calculate("10 / 0 + 5")  ->  "Error"

/* ---------- STAGE 7: the polish a real calculator needs ---------- */

// ----- 10. round2 (money-friendly display) -----
// Floating point makes 0.1 + 0.2 ugly. Write `round2(n)` that RETURNS n
// rounded to 2 decimal places as a NUMBER. (Math.round(n * 100) / 100.)
function round2(n) {
  return Math.round(n * 100) / 100;
}
console.log(round2(5.005));

// TEST 1:  round2(5.005)        ->  5.01
// TEST 2:  round2(3)            ->  3
// TEST 3:  round2(2.71828)      ->  2.72

// ----- 11. percent -----
// The % key on a calculator turns a number into its fraction of 100.
// Write `percent(n)` that RETURNS n / 100.
function percent(n) {
  return n / 100;
}
console.log(percent(50));

// TEST 1:  percent(50)   ->  0.5
// TEST 2:  percent(200)  ->  2
// TEST 3:  percent(0)    ->  0

// ----- 12. clearToZero (the C button) -----
// Pressing Clear resets the display. Write `clearToZero()` (no input) that
// RETURNS the number 0 â€” the calculator's starting state.
function clearToZero() {
  return 0;
}
console.log(clearToZero());

// TEST 1:  clearToZero()        ->  0
// TEST 2:  typeof clearToZero() ->  "number"
// TEST 3:  clearToZero() + 5    ->  5

/* ============================================================
   When 1-12 all pass, calculate(expr) IS a working calculator
   engine. The HTML/buttons would only collect a string and hand
   it to calculate() â€” every bit of the THINKING lives here.
   ============================================================ */

/* ============================================================
   ARRAYS â€” COUNTRIES DATABASE (100 real countries)
   ------------------------------------------------------------
   100 hand-typed country objects (real places, real capitals,
   real-ish 2023 figures). Each has:
     name (string), capital (string), continent (string),
     population (millions, number), area (km^2, number),
     landlocked (boolean)

   Solve every exercise with ARRAY METHODS â€” map, filter, find,
   reduce, sort â€” NOT hand-written for loops (you proved you can
   loop already; this file is about the methods).

   How to use:
   - Write your function where you see  // your code here
   - Delete the "// " on the console.log line to switch it on
   - Run:  node 7-database-countries.js  and match all 3 tests

   The exercises go EASY -> HARD top to bottom. Each later one
   leans on a method from the one before.
   ============================================================ */

// population in millions, area in km^2
const countries = [
  {
    name: "Nigeria",
    capital: "Abuja",
    continent: "Africa",
    population: 223.8,
    area: 923768,
    landlocked: false,
  },
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    continent: "Africa",
    population: 126.5,
    area: 1104300,
    landlocked: true,
  },
  {
    name: "Egypt",
    capital: "Cairo",
    continent: "Africa",
    population: 112.7,
    area: 1002450,
    landlocked: false,
  },
  {
    name: "DR Congo",
    capital: "Kinshasa",
    continent: "Africa",
    population: 102.3,
    area: 2344858,
    landlocked: false,
  },
  {
    name: "Tanzania",
    capital: "Dodoma",
    continent: "Africa",
    population: 67.4,
    area: 945087,
    landlocked: false,
  },
  {
    name: "South Africa",
    capital: "Pretoria",
    continent: "Africa",
    population: 60.4,
    area: 1221037,
    landlocked: false,
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    continent: "Africa",
    population: 55.1,
    area: 580367,
    landlocked: false,
  },
  {
    name: "Uganda",
    capital: "Kampala",
    continent: "Africa",
    population: 48.6,
    area: 241550,
    landlocked: true,
  },
  {
    name: "Algeria",
    capital: "Algiers",
    continent: "Africa",
    population: 45.6,
    area: 2381741,
    landlocked: false,
  },
  {
    name: "Sudan",
    capital: "Khartoum",
    continent: "Africa",
    population: 48.1,
    area: 1886068,
    landlocked: false,
  },
  {
    name: "Morocco",
    capital: "Rabat",
    continent: "Africa",
    population: 37.8,
    area: 446550,
    landlocked: false,
  },
  {
    name: "Angola",
    capital: "Luanda",
    continent: "Africa",
    population: 36.7,
    area: 1246700,
    landlocked: false,
  },
  {
    name: "Ghana",
    capital: "Accra",
    continent: "Africa",
    population: 34.1,
    area: 238533,
    landlocked: false,
  },
  {
    name: "Mozambique",
    capital: "Maputo",
    continent: "Africa",
    population: 33.9,
    area: 801590,
    landlocked: false,
  },
  {
    name: "Madagascar",
    capital: "Antananarivo",
    continent: "Africa",
    population: 30.3,
    area: 587041,
    landlocked: false,
  },
  {
    name: "Cameroon",
    capital: "Yaounde",
    continent: "Africa",
    population: 28.6,
    area: 475442,
    landlocked: false,
  },
  {
    name: "Niger",
    capital: "Niamey",
    continent: "Africa",
    population: 27.2,
    area: 1267000,
    landlocked: true,
  },
  {
    name: "Mali",
    capital: "Bamako",
    continent: "Africa",
    population: 23.3,
    area: 1240192,
    landlocked: true,
  },
  {
    name: "Zambia",
    capital: "Lusaka",
    continent: "Africa",
    population: 20.6,
    area: 752612,
    landlocked: true,
  },
  {
    name: "Zimbabwe",
    capital: "Harare",
    continent: "Africa",
    population: 16.7,
    area: 390757,
    landlocked: true,
  },
  {
    name: "Senegal",
    capital: "Dakar",
    continent: "Africa",
    population: 17.7,
    area: 196722,
    landlocked: false,
  },
  {
    name: "Chad",
    capital: "N'Djamena",
    continent: "Africa",
    population: 18.3,
    area: 1284000,
    landlocked: true,
  },
  {
    name: "Tunisia",
    capital: "Tunis",
    continent: "Africa",
    population: 12.4,
    area: 163610,
    landlocked: false,
  },
  {
    name: "Rwanda",
    capital: "Kigali",
    continent: "Africa",
    population: 14.0,
    area: 26338,
    landlocked: true,
  },
  {
    name: "Botswana",
    capital: "Gaborone",
    continent: "Africa",
    population: 2.7,
    area: 581730,
    landlocked: true,
  },
  {
    name: "China",
    capital: "Beijing",
    continent: "Asia",
    population: 1425.7,
    area: 9596961,
    landlocked: false,
  },
  {
    name: "India",
    capital: "New Delhi",
    continent: "Asia",
    population: 1428.6,
    area: 3287263,
    landlocked: false,
  },
  {
    name: "Indonesia",
    capital: "Jakarta",
    continent: "Asia",
    population: 277.5,
    area: 1904569,
    landlocked: false,
  },
  {
    name: "Pakistan",
    capital: "Islamabad",
    continent: "Asia",
    population: 240.5,
    area: 881912,
    landlocked: false,
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    continent: "Asia",
    population: 172.9,
    area: 147570,
    landlocked: false,
  },
  {
    name: "Japan",
    capital: "Tokyo",
    continent: "Asia",
    population: 123.3,
    area: 377975,
    landlocked: false,
  },
  {
    name: "Philippines",
    capital: "Manila",
    continent: "Asia",
    population: 117.3,
    area: 300000,
    landlocked: false,
  },
  {
    name: "Vietnam",
    capital: "Hanoi",
    continent: "Asia",
    population: 98.9,
    area: 331212,
    landlocked: false,
  },
  {
    name: "Iran",
    capital: "Tehran",
    continent: "Asia",
    population: 89.2,
    area: 1648195,
    landlocked: false,
  },
  {
    name: "Turkey",
    capital: "Ankara",
    continent: "Asia",
    population: 85.8,
    area: 783562,
    landlocked: false,
  },
  {
    name: "Thailand",
    capital: "Bangkok",
    continent: "Asia",
    population: 71.8,
    area: 513120,
    landlocked: false,
  },
  {
    name: "Myanmar",
    capital: "Naypyidaw",
    continent: "Asia",
    population: 54.6,
    area: 676578,
    landlocked: false,
  },
  {
    name: "South Korea",
    capital: "Seoul",
    continent: "Asia",
    population: 51.7,
    area: 100210,
    landlocked: false,
  },
  {
    name: "Iraq",
    capital: "Baghdad",
    continent: "Asia",
    population: 45.5,
    area: 438317,
    landlocked: false,
  },
  {
    name: "Afghanistan",
    capital: "Kabul",
    continent: "Asia",
    population: 42.2,
    area: 652230,
    landlocked: true,
  },
  {
    name: "Saudi Arabia",
    capital: "Riyadh",
    continent: "Asia",
    population: 36.9,
    area: 2149690,
    landlocked: false,
  },
  {
    name: "Uzbekistan",
    capital: "Tashkent",
    continent: "Asia",
    population: 35.6,
    area: 447400,
    landlocked: true,
  },
  {
    name: "Malaysia",
    capital: "Kuala Lumpur",
    continent: "Asia",
    population: 34.3,
    area: 330803,
    landlocked: false,
  },
  {
    name: "Nepal",
    capital: "Kathmandu",
    continent: "Asia",
    population: 30.9,
    area: 147181,
    landlocked: true,
  },
  {
    name: "Sri Lanka",
    capital: "Colombo",
    continent: "Asia",
    population: 21.9,
    area: 65610,
    landlocked: false,
  },
  {
    name: "Kazakhstan",
    capital: "Astana",
    continent: "Asia",
    population: 19.6,
    area: 2724900,
    landlocked: true,
  },
  {
    name: "Cambodia",
    capital: "Phnom Penh",
    continent: "Asia",
    population: 16.9,
    area: 181035,
    landlocked: false,
  },
  {
    name: "Jordan",
    capital: "Amman",
    continent: "Asia",
    population: 11.3,
    area: 89342,
    landlocked: false,
  },
  {
    name: "Israel",
    capital: "Jerusalem",
    continent: "Asia",
    population: 9.2,
    area: 20770,
    landlocked: false,
  },
  {
    name: "Mongolia",
    capital: "Ulaanbaatar",
    continent: "Asia",
    population: 3.4,
    area: 1564110,
    landlocked: true,
  },
  {
    name: "Russia",
    capital: "Moscow",
    continent: "Europe",
    population: 144.4,
    area: 17098242,
    landlocked: false,
  },
  {
    name: "Germany",
    capital: "Berlin",
    continent: "Europe",
    population: 83.3,
    area: 357114,
    landlocked: false,
  },
  {
    name: "United Kingdom",
    capital: "London",
    continent: "Europe",
    population: 67.7,
    area: 242495,
    landlocked: false,
  },
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
    population: 64.8,
    area: 551695,
    landlocked: false,
  },
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
    population: 58.9,
    area: 301340,
    landlocked: false,
  },
  {
    name: "Spain",
    capital: "Madrid",
    continent: "Europe",
    population: 47.5,
    area: 505992,
    landlocked: false,
  },
  {
    name: "Ukraine",
    capital: "Kyiv",
    continent: "Europe",
    population: 36.7,
    area: 603500,
    landlocked: false,
  },
  {
    name: "Poland",
    capital: "Warsaw",
    continent: "Europe",
    population: 41.0,
    area: 312696,
    landlocked: false,
  },
  {
    name: "Romania",
    capital: "Bucharest",
    continent: "Europe",
    population: 19.0,
    area: 238397,
    landlocked: false,
  },
  {
    name: "Netherlands",
    capital: "Amsterdam",
    continent: "Europe",
    population: 17.6,
    area: 41850,
    landlocked: false,
  },
  {
    name: "Belgium",
    capital: "Brussels",
    continent: "Europe",
    population: 11.7,
    area: 30528,
    landlocked: false,
  },
  {
    name: "Czechia",
    capital: "Prague",
    continent: "Europe",
    population: 10.5,
    area: 78867,
    landlocked: true,
  },
  {
    name: "Greece",
    capital: "Athens",
    continent: "Europe",
    population: 10.3,
    area: 131957,
    landlocked: false,
  },
  {
    name: "Portugal",
    capital: "Lisbon",
    continent: "Europe",
    population: 10.2,
    area: 92090,
    landlocked: false,
  },
  {
    name: "Sweden",
    capital: "Stockholm",
    continent: "Europe",
    population: 10.6,
    area: 450295,
    landlocked: false,
  },
  {
    name: "Hungary",
    capital: "Budapest",
    continent: "Europe",
    population: 9.6,
    area: 93028,
    landlocked: true,
  },
  {
    name: "Austria",
    capital: "Vienna",
    continent: "Europe",
    population: 8.9,
    area: 83879,
    landlocked: true,
  },
  {
    name: "Switzerland",
    capital: "Bern",
    continent: "Europe",
    population: 8.8,
    area: 41285,
    landlocked: true,
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
    continent: "Europe",
    population: 6.7,
    area: 110879,
    landlocked: false,
  },
  {
    name: "Serbia",
    capital: "Belgrade",
    continent: "Europe",
    population: 6.6,
    area: 88361,
    landlocked: true,
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    continent: "Europe",
    population: 5.9,
    area: 43094,
    landlocked: false,
  },
  {
    name: "Finland",
    capital: "Helsinki",
    continent: "Europe",
    population: 5.5,
    area: 338424,
    landlocked: false,
  },
  {
    name: "Norway",
    capital: "Oslo",
    continent: "Europe",
    population: 5.5,
    area: 385207,
    landlocked: false,
  },
  {
    name: "Ireland",
    capital: "Dublin",
    continent: "Europe",
    population: 5.1,
    area: 70273,
    landlocked: false,
  },
  {
    name: "Croatia",
    capital: "Zagreb",
    continent: "Europe",
    population: 3.9,
    area: 56594,
    landlocked: false,
  },
  {
    name: "United States",
    capital: "Washington",
    continent: "North America",
    population: 339.9,
    area: 9833517,
    landlocked: false,
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    continent: "North America",
    population: 128.5,
    area: 1964375,
    landlocked: false,
  },
  {
    name: "Canada",
    capital: "Ottawa",
    continent: "North America",
    population: 38.8,
    area: 9984670,
    landlocked: false,
  },
  {
    name: "Guatemala",
    capital: "Guatemala City",
    continent: "North America",
    population: 18.1,
    area: 108889,
    landlocked: false,
  },
  {
    name: "Cuba",
    capital: "Havana",
    continent: "North America",
    population: 11.2,
    area: 109884,
    landlocked: false,
  },
  {
    name: "Haiti",
    capital: "Port-au-Prince",
    continent: "North America",
    population: 11.7,
    area: 27750,
    landlocked: false,
  },
  {
    name: "Dominican Republic",
    capital: "Santo Domingo",
    continent: "North America",
    population: 11.3,
    area: 48671,
    landlocked: false,
  },
  {
    name: "Honduras",
    capital: "Tegucigalpa",
    continent: "North America",
    population: 10.6,
    area: 112492,
    landlocked: false,
  },
  {
    name: "Nicaragua",
    capital: "Managua",
    continent: "North America",
    population: 7.0,
    area: 130373,
    landlocked: false,
  },
  {
    name: "Panama",
    capital: "Panama City",
    continent: "North America",
    population: 4.5,
    area: 75417,
    landlocked: false,
  },
  {
    name: "Brazil",
    capital: "Brasilia",
    continent: "South America",
    population: 216.4,
    area: 8515767,
    landlocked: false,
  },
  {
    name: "Colombia",
    capital: "Bogota",
    continent: "South America",
    population: 52.1,
    area: 1141748,
    landlocked: false,
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    continent: "South America",
    population: 45.8,
    area: 2780400,
    landlocked: false,
  },
  {
    name: "Peru",
    capital: "Lima",
    continent: "South America",
    population: 34.4,
    area: 1285216,
    landlocked: false,
  },
  {
    name: "Venezuela",
    capital: "Caracas",
    continent: "South America",
    population: 28.8,
    area: 916445,
    landlocked: false,
  },
  {
    name: "Chile",
    capital: "Santiago",
    continent: "South America",
    population: 19.6,
    area: 756102,
    landlocked: false,
  },
  {
    name: "Ecuador",
    capital: "Quito",
    continent: "South America",
    population: 18.2,
    area: 256370,
    landlocked: false,
  },
  {
    name: "Bolivia",
    capital: "Sucre",
    continent: "South America",
    population: 12.4,
    area: 1098581,
    landlocked: true,
  },
  {
    name: "Paraguay",
    capital: "Asuncion",
    continent: "South America",
    population: 6.9,
    area: 406752,
    landlocked: true,
  },
  {
    name: "Uruguay",
    capital: "Montevideo",
    continent: "South America",
    population: 3.4,
    area: 176215,
    landlocked: false,
  },
  {
    name: "Australia",
    capital: "Canberra",
    continent: "Oceania",
    population: 26.4,
    area: 7692024,
    landlocked: false,
  },
  {
    name: "Papua New Guinea",
    capital: "Port Moresby",
    continent: "Oceania",
    population: 10.3,
    area: 462840,
    landlocked: false,
  },
  {
    name: "New Zealand",
    capital: "Wellington",
    continent: "Oceania",
    population: 5.2,
    area: 270467,
    landlocked: false,
  },
  {
    name: "Fiji",
    capital: "Suva",
    continent: "Oceania",
    population: 0.9,
    area: 18274,
    landlocked: false,
  },
  {
    name: "Solomon Islands",
    capital: "Honiara",
    continent: "Oceania",
    population: 0.7,
    area: 28896,
    landlocked: false,
  },
];

/* ============================================================
   BUILD THE 15   (3 test cases each â€” all must pass)
   Difficulty climbs: length -> map -> filter -> find -> reduce
   -> sort -> chains -> grouping. Don't skip ahead.
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countCountries(db) {
  return db.length;
}
console.log(countCountries(countries));
// TEST 1:  countCountries(countries)        ->  100
// TEST 2:  countCountries([])               ->  0
// TEST 3:  countCountries([countries[0]])   ->  1

// ----- 2. map â€” every name -----
// Write `allNames(db)` -> array of just the name strings.
function allNames(db) {
  return db.map((country) => country.name);
}
console.log(allNames(countries)[0]);
// TEST 1:  allNames(countries)[0]       ->  "Nigeria"
// TEST 2:  allNames(countries)[99]      ->  "Solomon Islands"
// TEST 3:  allNames(countries).length   ->  100

// ----- 3. map â€” every capital -----
// Write `allCapitals(db)` -> array of just the capital strings.
function allCapitals(db) {
  return db.map((country) => country.capital);
}
console.log(allCapitals(countries)[0]);

// TEST 1:  allCapitals(countries)[0]      ->  "Abuja"
// TEST 2:  allCapitals(countries).length  ->  100
// TEST 3:  allCapitals([countries[25]])[0] -> "Beijing"

// ----- 4. filter â€” by continent -----
// Write `byContinent(db, continent)` -> array of countries on that continent.
function byContinent(db, continent) {
  return db.filter((country) => country.continent === continent);
}
console.log(byContinent(countries, "Asia").length);

// TEST 1:  byContinent(countries, "Asia").length      ->  25
// TEST 2:  byContinent(countries, "Oceania").length   ->  5
// TEST 3:  byContinent(countries, "Antarctica").length -> 0

// ----- 5. filter â€” boolean field -----
// Write `landlockedOnly(db)` -> array of countries where landlocked is true.
function landlockedOnly(db) {
  return db.filter((country) => country.landlocked);
}
console.log(landlockedOnly(countries).length);

// TEST 1:  landlockedOnly(countries).length                       ->  21
// TEST 2:  landlockedOnly(countries).every(x => x.landlocked)     ->  true
// TEST 3:  landlockedOnly([countries[0]]).length                  ->  0

// ----- 6. filter â€” numeric threshold -----
// Write `biggerThan(db, millions)` -> countries with population > millions.
function biggerThan(db, millions) {
  return db.filter((country) => country.population > millions);
}
console.log(biggerThan(countries, 100).length);

// TEST 1:  biggerThan(countries, 100).length   ->  15
// TEST 2:  biggerThan(countries, 200).length   ->  7
// TEST 3:  biggerThan(countries, 5000).length  ->  0

// ----- 7. find â€” one country by name -----
// Write `findByName(db, name)` -> the single country object, or undefined.
function findByName(db, name) {
  return db.find((country) => country.name === name);
}
console.log(findByName(countries, "Japan").capital);

// TEST 1:  findByName(countries, "Japan").capital      ->  "Tokyo"
// TEST 2:  findByName(countries, "Brazil").population   ->  216.4
// TEST 3:  findByName(countries, "Atlantis")            ->  undefined

// ----- 8. reduce â€” total population -----
// Write `totalPopulation(db)` -> sum of every population, rounded to 1 decimal.
function totalPopulation(db) {
  const total = db.reduce((sum, country) => sum + country.population, 0);
  return Math.round(total * 10) / 10;
}
console.log(totalPopulation(countries));

// TEST 1:  totalPopulation(countries)              ->  7554.1
// TEST 2:  totalPopulation([])                     ->  0
// TEST 3:  totalPopulation([{population: 10}, {population: 5}]) -> 15

// ----- 9. reduce â€” average area -----
// Write `averageArea(db)` -> mean of .area, rounded to a whole number.
function averageArea(db) {
  if (db.length === 0) return 0;
  const totalArea = db.reduce((sum, country) => sum + country.area, 0);
  return Math.round(totalArea / db.length);
}
console.log(averageArea(countries));

// TEST 1:  averageArea(countries)                       ->  1222408
// TEST 2:  averageArea([{area: 100}, {area: 200}])      ->  150
// TEST 3:  averageArea([{area: 50}])                    ->  50

// ----- 10. sort â€” largest by area -----
// Write `largestByArea(db)` -> NEW array sorted by area, biggest first.
function largestByArea(db) {
  return [...db].sort((a, b) => b.area - a.area);
}
console.log(largestByArea(countries)[0].name);
// TEST 1:  largestByArea(countries)[0].name   ->  "Russia"
// TEST 2:  largestByArea(countries)[1].name   ->  "Canada"
// TEST 3:  largestByArea(countries)[2].name   ->  "United States"

// ----- 11. sort + map â€” most populous names -----
// Write `mostPopulousNames(db)` -> NEW array of NAMES, highest population first.
function mostPopulousNames(db) {
  return [...db]
    .sort((a, b) => b.population - a.population)
    .map((country) => country.name);
}
console.log(mostPopulousNames(countries)[0]);

// TEST 1:  mostPopulousNames(countries)[0]      ->  "India"
// TEST 2:  mostPopulousNames(countries)[1]      ->  "China"
// TEST 3:  mostPopulousNames(countries).length  ->  100

// ----- 12. chain â€” filter + sort + map -----
// Write `biggestIn(db, continent)` -> names of that continent's countries,
// most populous first.
function biggestIn(db, continent) {
  return db
    .filter((country) => country.continent === continent)
    .sort((a, b) => b.population - a.population)
    .map((country) => country.name);
}
console.log(biggestIn(countries, "Europe")[0]);
// TEST 1:  biggestIn(countries, "Europe")[0]            ->  "Russia"
// TEST 2:  biggestIn(countries, "South America")[1]     ->  "Colombia"
// TEST 3:  biggestIn(countries, "Oceania").length       ->  5

// ----- 13. reduce to OBJECT â€” count by continent -----
// Write `countByContinent(db)` -> object mapping each continent to how many.
function countByContinent(db) {
  return db.reduce((acc, country) => {
    acc[country.continent] = (acc[country.continent] || 0) + 1;
    return acc;
  }, {});
}
// console.log(countByContinent(countries).Asia);
// TEST 1:  countByContinent(countries).Asia      ->  25
// TEST 2:  countByContinent(countries).Oceania   ->  5
// TEST 3:  countByContinent(countries)["North America"] -> 10

// ----- 14. reduce to OBJECT â€” population by continent -----
// Write `populationByContinent(db)` -> object mapping each continent to its
// total population, rounded to 1 decimal.
// your code here

// console.log(populationByContinent(countries).Asia);
// TEST 1:  populationByContinent(countries).Asia      ->  4545.5
// TEST 2:  populationByContinent(countries).Oceania   ->  43.5
// TEST 3:  populationByContinent(countries).Europe    ->  700.7

// ----- 15. THE BOSS â€” densest country -----
// Density = people per km^2 = (population * 1,000,000) / area.
// Write `densest(db)` -> the NAME of the country with the highest density.
// your code here

// console.log(densest(countries));
// TEST 1:  densest(countries)                                      ->  "Bangladesh"
// TEST 2:  densest([{name:"A",population:1,area:1000000},{name:"B",population:2,area:1000000}]) -> "B"
// TEST 3:  densest([countries[49]])                                ->  "Mongolia"

/* ============================================================
   All 3 pass on all 15 = you can drive real data with array
   methods. That is the whole job of a back-end query layer.
   ============================================================ */
