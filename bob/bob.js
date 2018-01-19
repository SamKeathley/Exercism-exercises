class Bob {
  hey (str) {
    let response;
    const isEmpty = str.trim() === '';
    const doesYell = str === str.toUpperCase() && str !== str.toLowerCase();
    const asksQuestion = str.trim().endsWith('?');

    if (doesYell) {
      response = 'Whoa, chill out!'
    }
    else if (asksQuestion) {
      response = 'Sure.'
    }
    else if (isEmpty) {
      response = 'Fine. Be that way!'
    }
    else if (doesYell && asksQuestion) {
      response = 'Calm down, I know what I\'m doing!'
    }
    else {
      response = 'Whatever.'
    }
    return response;
  };
};

module.exports = Bob;
