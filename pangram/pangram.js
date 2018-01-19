const alpha = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = str => alpha.split('')
  .map(x => str.toLowerCase().includes(x))
  .reduce((preVal, curVal) => preVal && curVal, true);

class Pangram {
  constructor(str) {
    this.str = str
  }
  isPangram() {
    return isPangram(this.str)
  }
};

module.exports = Pangram;
