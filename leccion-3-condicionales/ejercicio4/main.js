'use strict';

const dogYear = 3;

//EJERCICIO IF/ELSE

/* if (dogYear === 1) {
  console.log('el perro tiene 15 años');
} else if (dogYear === 2) {
  console.log('el perro tiene 9 años');
} else {
  console.log(`'el perro tiene' ${dogYear * 7}`);
} */

//EJERCICIO TERNARIO

const dogCalculator = dogYear === 1 ? console.log('el perro tiene 15 años') : dogYear === 2 ? console.log('el perro tiene 9 años') : console.log(`'el perro tiene' ${dogYear * 7}`);
`'el perro tiene' ${dogYear * 7}`;
