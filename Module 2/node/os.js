let os = require('os');
console.log(os);

console.log(os.hostname());
console.log(os.arch());
console.log(os.networkInterfaces());
console.log(os.userInfo());


let p = require('');
let content = cp.execSync("code test.js");
console.log("output of test.js : " + content);