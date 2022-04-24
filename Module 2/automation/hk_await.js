const puppeteer = require('puppeteer');
const { answers } = require('./code.js');
const mail = "gopiha3527@carsik.com";
const password = "NICKJHON@22";
const code = require("./code.js");

(async function(){
    let browser = await puppeteer.launch({ headless : false ,defaultViewport: null,args: ['--start-fullscreen']});
    let page = await browser.newPage();
    await page.goto("https://www.hackerrank.com/");
    
})();