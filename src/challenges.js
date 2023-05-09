// Desafio 1 - Crie a função compareTrue
// const girafa = true;
// const elefante = true;
// const macaco = false;

const compareTrue = (param1, param2) => (param1 && param2);

// Desafio 2 - Crie a função splitSentence

const splitSentence = (phrase) => phrase.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (arrayName) => `${arrayName[(arrayName.length - 1)]}, ${arrayName[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  const winsPoints = 3;
  const tiesPoints = 1;
  if ((typeof wins !== 'number') || (typeof ties !== 'number')) {
    return 'Vitórias e empates precisam ser números';
  }
  return (wins * winsPoints) + (ties * tiesPoints);
};

// Desafio 5 - Crie a função highestCount
const highestCount = (arrayNumber) => {
  let count = 0;
  arrayNumber = arrayNumber.sort((a, b) => a - b).reverse();
  for (let number of arrayNumber) {
    if (number === arrayNumber[0]) {
      count += 1;
    }
  }
  return count;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  let area = 0;
  if (form !== 'triângulo' && form !== 'retângulo') {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  area = (form === 'triângulo') ? calcTriangleArea(base, height) : calcRectangleArea(base, height);
  return `O valor da área do ${form} é de: ${area}`;
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  const positionCat1 = (Math.abs(mouse - cat1));
  const positionCat2 = (Math.abs(mouse - cat2));
  if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }

  return (positionCat1 < positionCat2) ? 'cat1' : 'cat2';
};

console.log(catAndMouse(500, 20, 20));

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
