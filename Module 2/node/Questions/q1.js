//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let path = require("path");
let fs = require("fs");

if(!fs.existsSync("newFolder"))
    fs.mkdirSync("newFolder");
// console.log(__dirname);
// let path2 = "C:\\Users\\user\\OneDrive\\Desktop\\FJP6\\Module 2\\node\\Questions\\newFolder"
let pathfolder = path.join(__dirname,"newFolder","xyz.txt");
fs.writeFileSync(pathfolder,"hello i am happy mittal");
// fs.writeFileSync(__dirname,"newFolder");
// // console.log(__dirname);
// console.log(__dirname)
// fs.writeFileSync(__dirname,path1,'xyz.txt');


