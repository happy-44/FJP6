//move a file
let fs = require("fs");
let path = require("path");
let src = path.join(__dirname,"abc1.txt");
let dest = path.join(__dirname,"newFolder","abc1.txt");
fs.copyFileSync(src, dest);
fs.unlinkSync(src);