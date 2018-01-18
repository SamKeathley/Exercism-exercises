var dnaTranscriber = function () {};

const dnaMap = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
};
const DNA = Object.keys(dnaMap);

const validate = a => {
  if (!DNA.includes(a)) {
    throw new Error('Invalid input');
  }
  return a;
};

dnaTranscriber.prototype.toRna = function (input) {
  const splitInput = input.split('');
  const transformedInput = splitInput.map(a => dnaMap[validate(a)]);
  return transformedInput.join('');
};

module.exports = dnaTranscriber;
