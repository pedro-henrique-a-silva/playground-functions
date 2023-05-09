// Desafio 11 - Crie a função generatePhoneNumber
const countNumbers = (array) => {
  const countNumber = {};
  for (let value of array) {
    if (countNumber[value] === undefined) {
      countNumber[value] = 1;
    } else {
      countNumber[value] += 1;
    }
  }

  return (Object.values(countNumber).sort().reverse()[0] < 3);
};

const verifyNumberBetween9And0 = (array) => {
  for (let value of array) {
    if (value > 9 || value < 0) {
      return false;
    }
  }
  return true;
};

const generatePhoneNumber = (arrayNumber) => {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (!verifyNumberBetween9And0(arrayNumber) || !countNumbers(arrayNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const parte1 = arrayNumber.slice(0, 2).join().replaceAll(',', '');
  const parte2 = arrayNumber.slice(2, 7).join().replaceAll(',', '');
  const parte3 = arrayNumber.slice(-4).join().replaceAll(',', '');

  return `(${parte1}) ${parte2}-${parte3}`;
};

console.log(countNumbers([1, 2, 3, 4, 5, 6, 7, 8, 1, 0, 1]));
// (12) 34567-8901
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
