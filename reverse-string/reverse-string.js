var ReverseString = function () {};

ReverseString.prototype.reverseString = function (str) {

  if (reverseString = '') {
    return '';
  }

    else {
      var splitString = str.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
    }
};

module.exports = ReverseString;
