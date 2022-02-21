/*2.Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
  
.const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
}*/
const avengers = [
    "Hulk",
    "Thor",
    "IronMan",
    "Captain A.",
    "Spiderman",
    "Captain M.",
  ];
  function findLongestWord(param) {
    let longestWord = param[0];
    for (let i = 1; i < param.length; i++) {
      if (param[i].length > longestWord.length) {
        longestWord = param[i];
      }
    }
    return console.log(longestWord);
  }
  findLongestWord(avengers);