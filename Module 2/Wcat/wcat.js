let fs = require("fs");
let inputArr = process.argv.slice(2);
console.log(inputArr);
let buffer = "";
for(let i = 0; i < inputArr.length; i++){
    let fileContent = fs.readFileSync(inputArr[i]);
}