'use strict';

const adalaberInfo = document.querySelector('.text1');

const adalaber = {};
adalaber.name = ' María';
adalaber.age = 32;
adalaber.profession = 'fonambulista';
adalaber.bio = function() {
  return 'Mi nombre es ' + this.name + 'tengo' + this.age + 'y soy ' + this.profession;
  /* return `Mi nombre es , tengo ${this.age} y soy ${adalaber.profession}`; */
};
console.log(adalaber.bio());
/* 
const adalaberInfo2 = document.querySelector('.text2');

const adalaber2 = {};
adalaber.name = ' Rocío';
adalaber.age = 25;
adalaber.profession = 'actriz';
function showBio() {
  return 'Mi nombre es ' + this.name + 'tengo' + this.age + 'y soy ' + this.profession; */
