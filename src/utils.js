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
  let minDiff = Infinity;
  let closerNum;
  let result;

  switch (true) {
    case (num > 9):
      result = 'X'
      break;
    default:
      result = 'I'
      break;
  }

  for (let generic in numbs) {
    let actualDiff = Math.abs(numbs[generic] - num) ;
        console.log("actualDiff",actualDiff)
        console.log("minDiff",minDiff)
    if (actualDiff < minDiff) {
        minDiff = actualDiff;
        closerNum = generic;
        
        console.log("generic",generic)
    }

   }
   console.log(result + closerNum)
  return result + closerNum 
}
function convertToRoman(num) {
  return sumNumbers(num) || substractNumbers(num);
}

//315
//300 10 5
//ccc x v

convertToRoman(40)
convertToRoman(14)

module.exports = convertToRoman 