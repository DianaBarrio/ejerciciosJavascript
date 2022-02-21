/*7.Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
  
  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param) {
    // insert code
  }*/

  const nameFinder = [
    "Peter",
    "Steve",
    "Tony",
    "Natasha",
    "Clint",
    "Logan",
    "Xabier",
    "Bruce",
    "Peggy",
    "Jessica",
    "Marc",
  ];
  
  function finderName(param, value) {
    for (let i = 0; i < param.length; i++) {
      if (param[i] === value) {
        return console.log(true, i);
      }
    }
    return console.log(false);
  }
  
  finderName(nameFinder, "Natasha");