class Gigasecond {
  constructor(input){
    this.input = input;
  }
  date(){
    return new Date(this.input.getTime() + 10**12)
  }
};

module.exports = Gigasecond;
