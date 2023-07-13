const numbs = {
    1: 'I',
    5: 'V'
}
function convertToRoman(num) {   
if (numbs[num]) return numbs[num]
   let result = ''
  for (const generic in numbs) {
  while (num >= numbs[generic]){
   result += generic;
    num -= numbs[generic];
  }}
  return result
}

module.exports = convertToRoman