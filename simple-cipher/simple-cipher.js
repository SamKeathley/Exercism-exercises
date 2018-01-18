var SimpleCipher = function () {};

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const shift = ([head, ...tail]) => tail.concat([head])
const shiftByNum = (count, alphabet) => {
  return count > 0 ? shiftByNum(count - 1, shift(alphabet)) : alphabet;
}

const zip = (alphabet, alphabet2) => {
  return alphabet.map((elem, i) => [elem, alphabet2[i]])
}

const createLookupMap = (count) => {
  const lowers = [...alphabet]
  const shiftedLowers = shiftByNum(count, lowers)
  const uppers = lowers.map(x => x.toUpperCase())
  const shiftedUppers = shiftByNum(count, uppers)
  const zipAll = zip(lowers, shiftedLowers).concat(zip(uppers, shiftedUppers))
  return new Map(zipAll)
}

SimpleCipher.prototype.encode = function (input) {
  const shift = 3
  const lookupMap = createLookupMap(shift)
  const transform = (char) => lookupMap.has(char) ? lookupMap.get(char) : char
  return [...input].map(transform).join('')
};

SimpleCipher.prototype.cipher = function (input){

};

module.exports = SimpleCipher;


// cipher will shift back three letters in the alphabet
