let fs = require("fs");
// // console.log(fs);

let path = require("path");

// // let filepath = path.join(__dirname,"file.txt");

// // fs.writeFileSync(filepath,"hello i am happy mittal");

// // fs.writeFileSync(filepath,"again updated file");

// // console.log("before update");
// // let content = fs.readFileSync(filepath,"utf-8");
// // console.log(content);
// // fs.appendFileSync(filepath,"\nnwely addede content");
// // console.log("after update");
// // let content1 = fs.readFileSync(filepath,"utf-8");
// // console.log(content1);

// // // fs.unlinkSync(filepath");
// if(!fs.existsSync("humariDirectory"))
//     fs.mkdirSync("humariDirectory");

// let folderpath = "C:\\Users\\user\\OneDrive\\Desktop\\FJP6\\Module 1";
// let contentPathOfFolder = fs.readdirSync(folderpath);
// console.log(contentPathOfFolder);

// fs.rmdirSync("humariDirectory");

let sourcePath = path.join(__dirname,"abc.txt");
let destinationPath = path.join(__dirname,"module","abc.txt");
console.log(sourcePath);
console.log(destinationPath);
// fs.copyFileSync(sourcePath, destinationPath);