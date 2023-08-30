const numbs = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}

function sumNumbers(num){
    if (num === 0) return
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
    if (num === 0) return
    
  let minDiff = Infinity;
  let closerNum;
  let result;

  switch (true) {
    case (num >100):
        result =  'C'
        break;
    case (num > 9):
      result = 'X'
      break;
    default:
      result = 'I'
      break;
  }

  for (let generic in numbs) {
    let actualDiff = Math.abs(numbs[generic] - num) ;
    if (actualDiff < minDiff) {
        minDiff = actualDiff;
        closerNum = generic;
        
    }

   }
  return result + closerNum 
}
const convertToRoman = (num) => splitNumbers(num).map(num => sumNumbers(num) || substractNumbers(num)).join('');

//310
//300 10 5
//ccc x v

function splitNumbers(number) {
    const digits = Array.from(String(number), Number);
    const parts = [];
    for (let i = 0; i < digits.length; i++) {
      const value = digits[i] * Math.pow(10, digits.length - i - 1);
      parts.push(value);
    }
    return parts;
}

  

module.exports = convertToRoman 