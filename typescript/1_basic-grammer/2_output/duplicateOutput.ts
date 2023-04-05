console.log("a" + "b")
console.log("c" + "d")

// node.js
import process from 'node:process';

process.stdout.write("a")
process.stdout.write("b" + "\n")
process.stdout.write("c" + "d")

/*
console.log("c", "b")
> c d
*/