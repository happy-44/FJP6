//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File
let fs = require("fs");
let path = require("path");
let extArr = [];
let extArrName = {
    Audio_file : [".mp3"];
    doc_file : [".pdf",".xlsx"],
    Image_file : [".jpg",".zip"],
    Video_file : [".mp4"]
};
let unorganisedPath = path.join(__dirname,"..","unorganised");
let readPath = fs.readdirSync(unorganisedPath);
for(let i = 0; i < readPath.length; i++){
    let name = readPath[i];
    let extName = extname(name);
    extArr.push(extName);
    for(let j = 0; j < extArr; i++){
       if(extArr[i] == )
    }
}
console.log(extArr);