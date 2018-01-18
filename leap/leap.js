//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const div4 = num => num % 4 === 0;
const div100 = num => num % 100 === 0;
const div400 = num => num % 400 === 0;

var Year = function (input) {
  this.value = input;
};

Year.prototype.isLeap = function () {
  let val = this.value;
  if (div4(val) && !div100(val)) {
    return true;
  } else if (div400(val)) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
