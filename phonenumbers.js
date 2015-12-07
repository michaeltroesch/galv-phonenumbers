function largestPhoneNumber(arr) {
  var phoneNumbers = {};
  var formattedNums = [];
  var maximum = 0;
  var counter = 0;
  var maxcounter = 0;

  for (var i = 0; i < arr.length; i++) {
    phoneNumbers[arr[i]] = 0;
  }

  formattedNums = numberSplitter(phoneNumbers, "-");

  for (var number in phoneNumbers) {
    phoneNumbers[number] = numberAdder(formattedNums[counter]);
    if (phoneNumbers[number] > maximum) {
      maximum = phoneNumbers[number];
      maxcounter = counter;
    }
    counter++;
  }

  return Object.getOwnPropertyNames(phoneNumbers)[maxcounter];
}

/******************************
 * @function numberSplitter
 * @param Object phoneNumbers
 * @param String splitter
 * 
 * The number splitter function
 * takes a string representing a
 * phone number in the form of
 * xxx-xxx-xxxx and returns a 
 * string like xxxxxxxxxx.
 ******************************/
var numberSplitter = function(phoneNumbers, splitter) {

  var formattedNums = [];

  for (var number in phoneNumbers) {
    formattedNums.push(number.split(splitter).join(""));
  }

  return formattedNums;
}

/******************************
 * @function numberAdder
 * @param String str
 *
 * Parses a string and adds the
 * results up in to an integer
 * sum, so we can find the largest.
 ******************************/
var numberAdder = function(str) {
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i));
  }

  return sum;
}

/******************************
 * @function randomPhoneNumber
 *
 * Builds a random phone number
 * string with a format of
 * xxx-xxx-xxxx
 ******************************/
var randomPhoneNumber = function() {

  var phoneNumber = "";

  for (var i = 0; i < 10; i++) {
    if (phoneNumber.length === 0) {
      phoneNumber += (Math.floor(Math.random() * 9) + 1);
    } else {
      phoneNumber += Math.floor(Math.random() * 10);
    }
    if (phoneNumber.length === 3 || phoneNumber.length === 7) {
      phoneNumber += "-"
    }
  }

  return phoneNumber;
}

var randomNumberList = [];
var randomlength = 1000;

for (var j = 0; j < randomlength; j++) {
  randomNumberList.push(randomPhoneNumber());
}

console.log(largestPhoneNumber(randomNumberList));
