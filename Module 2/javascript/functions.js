function sayHello(){
    console.log("hi, i am happy");
}
sayHello();



function sum(num1, num2){
    let add = num1 + num2;
    console.log(add);
}
sum(3, 5);



function multiply(num1, num2){
    return num1 * num2;
}
let mul = multiply(2, 3);
console.log(mul);



let a = function sub(num1, num2){
             return num1 - num2;
        }
console.log(a(3,2));     



(function(){
    console.log("hello");
})();

(function(num1, num2){
    console.log(num1 / num2);
})(10, 5);