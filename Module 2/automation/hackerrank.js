const puppeteer = require('puppeteer');
const { answers } = require('./code.js');
const mail = "gopiha3527@carsik.com";
const password = "NICKJHON@22";
const code = require("./code.js");
let browserPromise = puppeteer.launch({ headless : false ,defaultViewport: null,args: ['--start-fullscreen']});
let page;
browserPromise.then(function(browser){
    console.log("browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    console.log("hackerrank page is opened");
    return waitAndClick("ul.menu a");
//     let waitPromise = page.waitForSelector("ul.menu a");
//     return waitPromise;
// }).then(function(){
//        let clickPromise = page.click("ul.menu a");
//        return clickPromise;
}).then(function(){
        let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
        return waitPromise;
}).then(function(){
    let domClickpromise = page.evaluate(function(){
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    });
    return domClickpromise;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function(){
    let mailTypedPromise = page.type("#input-1",mail,{ delay: 100 });
    return mailTypedPromise;
}).then(function(){
    let passwordTypedPromise = page.type("#input-2",password,{ delay: 100 });
    return passwordTypedPromise;
}).then(function(){
    let clickPromise = page.click('button[data-analytics="LoginPassword"]');
    return clickPromise;
}).then(function(){
    console.log("login hogya sai se");
    return new waitAndClick('[data-automation="algorithms"]');
//     let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
//     return waitPromise;
// }).then(function(){
//     let clickPromise = page.click('[data-automation="algorithms"]');
//     return clickPromise;
}).then(function(){
    return page.waitForSelector(".filter-group");
}).then(function(){
    let domSelectPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function(){
    console.log("warmup selector")
    return page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
}).then(function(){
    let clickPromise = page.evaluate(function(){
        let arr = [];
        let questionLink = document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        for(let i = 0; i < questionLink.length; i++){
            let eachQuestionLink = questionLink[i].href;
            arr.push(eachQuestionLink);
        }
        return arr;
    })
    return clickPromise;
}).then(function(questionArr){
    console.log(questionArr);
    let questionPromise = questionSolver(questionArr[0],code.answers[0]);
    for(let i = 1; i < questionArr.length; i++){
        questionPromise = questionPromise.then(function(){
            let nextQuestionPromise = questionSolver(questionArr[i],code.answers[i]);
            return nextQuestionPromise;
        })
    }
    return questionPromise;
}).then(function(){
    console.log("all the warm up questions have been submitted!!!!");
})
function waitAndClick(selector){
    return new Promise(function(resolve, reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        });
    })
}
function questionSolver(question, answer){
    return new Promise(function(resolve, reject){
        let linkPromise = page.goto(question);
        linkPromise.then(function(){
            // console.log("on the question");
            return waitAndClick(".checkbox-input");
        }).then(function(){
            console.log("input is ticked");
            return waitAndClick(".input-wrap");
        }).then(function(){
            console.log("clicked on the text area");
            let typePromise = page.type(".input-wrap", answer);
            return typePromise;
        }).then(function(){
            console.log("answer is typed");
            let holdControl = page.keyboard.down("Control");
            return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressX = page.keyboard.press('X');
            return pressX;
        }).then(function(){
            let upControl = page.keyboard.up("Control");
            return upControl;
        }).then(function(){
            console.log("cut completed");
            return waitAndClick(".monaco-editor.no-user-select.vs");
        }).then(function(){
            let holdControl = page.keyboard.down("Control");
            return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press("A");
            return pressA;
        }).then(function(){
            console.log("all selected");
            let pressV = page.keyboard.press("V");
            return pressV;
        }).then(function(){
            let upControl = page.keyboard.up("Control");
            return upControl;
        }).then(function(){
            console.log("cut paste successfully");
            return waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
        }).then(function(){
            console.log("code is completed");
            resolve();
        })
    })
}