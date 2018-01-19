class Gigasecond {
  constructor(input){
    this.input = input;
  }
  date(){
    const seconds = this.input.getTime() / 1000;

    return new Date((seconds + 1000000000) * 1000)
  }
};

module.exports = Gigasecond;
