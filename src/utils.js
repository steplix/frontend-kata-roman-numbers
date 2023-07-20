const numbs = {
    X: 10,
    V: 5,
    I: 1,
}

function sumNumbers(num){
  let result = '';
  let count = 0;
  for (let generic in numbs) {
    count = 0;
    while(num >= numbs[generic]){
      count++;
      if(count >3) return null;
      result += generic;
      num -= numbs[generic];
    }
  }
  return result
}
function substractNumbers(num){
  let result = 'I';
  for (let generic in numbs) {
    while(num < numbs[generic] && num >= 0 && numbs[generic]-num <2){
      result += generic;
      num -= numbs[generic];
    }
  }
  return result
}
function convertToRoman(num) {
  return sumNumbers(num) || substractNumbers(num);
}

module.exports = convertToRoman