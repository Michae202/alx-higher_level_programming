#!/usr/bin/node
<<<<<<< HEAD
const myC = 'C is fun';
const myPy = 'Python is cool';
const myJs = 'JavaScript is amazing';
console.log(myC);
console.log(myPy);
console.log(myJs);
=======
const argument = process.argv.slice(2);
if (argument.length === 0) {
  console.log('No argument');
} else if (argument.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
