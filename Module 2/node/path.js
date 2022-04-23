"C:\Users\OneDrive\Desktop\FJP6\Module 2\node\childprocess.js"
let path = require("path");
console.log(path);

// let extensionName = path.extname("C:\Users\OneDrive\Desktop\FJP6\Module 2\node\path.js");
// console.log(extensionName);

let baseName = path.basename('__filename');
console.log(baseName);

let dirpath = __dirname;
console.log(dirpath);

console.log(__filename);

let filepath = path.join(dirpath, "test.js");
console.log(filepath);

