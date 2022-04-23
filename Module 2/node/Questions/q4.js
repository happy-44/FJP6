// read content of unorganised folder and make  an array which has extension name of each file
let fs = require("fs");
let path = require("path");
console.log(path);
let extArr = [];
let unorganisedPath = path.join(__dirname,"..","unorganised");
let readPath = fs.readdirSync(unorganisedPath);
// console.log(readPath);
for(let i = 0; i < readPath.length; i++){
    let name = readPath[i];
    extArr.push(path.extname(name));
}
console.log(extArr);