import process from 'node:process';

console.log("a" + "b");console.log("c" + "d");

// node.js
process.stdout.write("a");process.stdout.write("b" + "\n");process.stdout.write("c" + "d")