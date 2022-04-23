//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");
let path = require("path");

let sourcePath = path.join(__dirname,"..","..","..","Module 1","index.html");
let htmlPath = path.join(__dirname,"..","..","html");
if(!fs.existsSync(htmlPath))
    fs.mkdirSync(htmlPath);
let destinationPath = path.join(htmlPath,"index.html");
fs.copyFileSync(sourcePath, destinationPath);