#!/usr/bin/node
const arg1 = process.argv[2];
const arg2 = process.argv[3];
if (arg2 === undefined) {
  console.log(`${arg1} is ${arg2}`);
} else if (arg1 === undefined && arg2 === undefined) {
  console.log(`${arg1} is ${arg2}`);
} else {
  console.log(`${arg1} is ${arg2}`);
}
/* const twoArg = process.argv.slice(2);
if (twoArg.length === 0) {
  console.log('c is cool');
} else if (twoArg === 1) {
  console.log('c is undefined');
} else {
  console.log('undefined is undefined');
  */
