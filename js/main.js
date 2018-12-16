// this variable is a String
var testOne = "what kind of variable am I";
// this variable is a Number
var testTwo = 256;
// this variable is a Boolean
var testThree = false;
// this variable is a String
var testFour = 'true';
// this variable is a String
var testFive = '128';
// this variable is a String
var testSix = ""

// the value of this variable is the String "hellothere"
var testOne = "hello" + "there";
// the value of this variable is the  String "10028"
var testTwo = '100' + 28;
// the value of this variable is the Number 4
var testThree = true + 3;
// the value of this variable is the String "false5" 
var testFour = 'false' + 5;
// the value of this variable is the Number 125 
var testFive = '128' - 3;
// the value of this variable is the Number 0
var testSix =  "" * 9;
// the value of this variable is not a Number NaN 
var testSeven = 'zero' - 1;
// the value of this variable is the Number 4
var testEight = 'five'.length 
// the value of this variable is the String "feven"
var testNine = 'five'[0] + 'ever';
// the value of this variable is the Boolean false
var testTen = 'a' > 'b';
// the value of this variable is the Boolean true
var testEleven = 'number'.length < 7;
// the value of this variable is the Boolean true 
var testTwelve = '12' == 12;
// the value of this variable is the Boolean false
var testThirteen = 'twelve' == 12;
// the value of this variable is the Boolean false
var testFourteen = '14' === 14;
// the value of this variable is the String "Hello!"
var testFifteen = 'Hi there'[0] + 'open sesame'[2] +
	'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] +
	'BATMAN!'[6];

// the console message is Hello, my name is Kingsley Pappagiorgio.
var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagiorgio. ";

var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings);

// the console message is 120 
var num1 = 8;

var num2 = 52;

var num3 = 60;

var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers);

// the console message is 101010
var mixedNum1 = 10;

var mixedString1 = "10";

var mixedNum2 = "10";

var mixedConcatination = mixedNum1 + mixedNum2 + 
	mixedString1;

console.log(mixedConcatination);

// the console message is num4 is greater than 1
var num4 = 5;

var num5 = 0;


if(num4 > 1) {
	
	console.log("num4 is greater than 1");

} else {
	
	console.log("num4 is NOT greater than 1");

};

// the console message is Else if statment ran
var num4 = 5;

var num5 = 0;


if(num4 < num5 || num4 === num5) {
	
	console.log("If statment ran!");

} else if (num5 === "0" || true) {

	console.log("Else if statment ran");

} else {

	console.log("Else statment ran");

};


var string1 = "this is a string";



for(var i = 0; i < string1.length; i = i + 1) {

	console.log(i, string1[i]);

};


var string2 = "coding";

var total = 0;


for(var i = 0; i < string2.length; i++) {

	total = total + i;

};

console.log(total);


var string3 = "onomatopoeia";


for(var i = 0; i < string3.length; i++) {

	if(string3[i] == "o") {

		console.log(i, string3[i]);

	};

};


var string4 = "You're gonna need a bigger boat.";


for(var i = 0; i < string4.length; i++) {

	if(string4[i] == "a" || string4[i] == "e" || 
		string4[i] == "i" || string4[i] == "o" ||
		string4[i] == "u") {

		console.log(string4[i]);

	};

};


function testStuff(a, b) {

	if(a > 25 && b < 100) {

		console.log(a + " is greater than 25 and " + 
			b + " is less than 100");
	
	} else {

		console.log(a + " is NOT greater than 25 or "
			+ b + " is NOT less than 100");
	
	}; 

};

testStuff(10, 101);

testStuff(26, 99);

testStuff(100, 25);


function testStuff2(c, d) {

	if(c == 25) {

		return c + " is equal to 25";
	
	} else if (d <= 100) {

		return d + " is less than or equal to 100";
	
	} else {

		return "Neither if nor else if statment ran";

	};

};

testStuff2(26, 101);

testStuff2(25, 99);

testStuff2(102, 24);


function countVowels(someString) {

	var vowels = 0;

	for(var i = 0; i < someString.length; i++) {

		if(someString[i] == "a" || someString[i] == "e"
			|| someString[i] == "i" || someString[i] 
			== "o" || someString[i] == "u") {

			vowels++;
		

		};
	
	};

	return vowels;

};


countVowels("I am very model of a modern major general");

countVowels("Exeunt pursued by a bear");

countVowels("o1234567891o");