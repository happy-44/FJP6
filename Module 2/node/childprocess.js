let cp = require('child_process');
console.log(cp);

cp.execFileSync("calc");

console.log("open abc.js file", cp.execFileSync);

let content = cp.execSync("node test.js");
console.log(content + " ");


