// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let fs = require("fs");
let path = require("path");
// let audioPath = fs.mkdirSync("audio");
// let audioPathLink = "C:\\Users\\user\\OneDrive\\Desktop\\FJP6\\Module 2\\node\\Questions\\audio"
// let audioPathFile1 = path.join(audioPathLink,"file1.mp3");
// let audioPathFile2 = path.join(audioPathLink,"file2.mp3");
// let audioPathFile3 = path.join(audioPathLink,"file3.mp3");
// let audioPathFile4 = path.join(audioPathLink,"file4.mp3");
// fs.writeFileSync(audioPathFile1,"song1");
// fs.writeFileSync(audioPathFile2,"song2");
// fs.writeFileSync(audioPathFile3,"song3");
// fs.writeFileSync(audioPathFile4,"song4");

let arr = ["audio","video","image","software","documents","applications","other"];
let arrName = ["happy","kajal","gaurav","sonal"];
let extensionName = ["mp3","mp4","jpg","exe","pdf","apk","rar"];
let organisePath = path.join(__dirname,"Organsie");
if(!fs.existsSync("organisePath"))
    fs.mkdirSync(organisePath);
for(let i = 0; i < arr.length; i++){
    let folderKaPath = path.join(organisePath,arr[i]);
    if(!fs.existsSync("folderKaPath"))
        fs.mkdirSync(folderKaPath);
    for(let j = 0; j < arrName.length; j++){
        let fileName = arrName[j] + "." + extensionName[i];
        let fileKaPath = path.join(folderKaPath,fileName);
        fs.writeFileSync(fileKaPath, "");
    }    
}

