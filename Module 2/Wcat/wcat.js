let fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(inputArr);
let optionsArr = [];
let fileArr = [];
for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i].charAt(0) == "-"){
       optionsArr.push(inputArr[i]);
    }else{
        fileArr.push(inputArr[i]);
    }
}
//console.log(optionsArr);
//console.log(fileArr);
function fn(){
    let bothBNpresent = optionsArr.includes("-b") && optionsArr.includes("-n");
    if(bothBNpresent==true){
        console.log("either b can be given as input or n can be given");         
        return;         
    }
    for(let i=0; i<fileArr.length;i++){
        let isPresent = fs.existsSync(fileArr[i]);
        if(isPresent==false){
            console.log("please input correct filename");
            return;
        }
    }

    let content = "";
    for(let i = 0; i < fileArr.length; i++){
        let fileContent = fs.readFileSync(fileArr[i]);
        content +=  fileContent + "\r\n";
    }
    let buffer = content.split("\r\n");
    //console.log(buffer);
    let isPresent = optionsArr.includes("-s");
    if(isPresent == true){
        for(let i = 1; i < buffer.length; i++){
        if(buffer[i] == "" && buffer[i - 1] == ""){
            buffer[i] = null;
            //buffer[i - 1] = null;
        }else if(buffer[i] == "" && buffer[i - 1] == null){
            buffer[i] = null;
            }
        }
    }
    let isNPresent = optionsArr.includes("-n");
    if(isNPresent == true){
        for(let i = 0; i < buffer.length; i++){
            buffer[i] = `${i + 1}. ${buffer[i]}`;
        }
    }
    let counter = 1;
    let isBPresent = optionsArr.includes("-b");
    if(isBPresent == true){
        for(let i = 0; i < buffer.length; i++){
            if(buffer[i] != ""){
                buffer[i] = `${counter}. ${buffer[i]}`;
                counter++;
            }
        }
    }
    console.log(buffer.join("\n"));
    let temp = [];
    for(let i = 0; i < buffer.length; i++){
        if(buffer[i] != null){
        temp.push(buffer[i]);
        }
    }
    buffer = temp;
    //console.log(buffer);
}
fn();
