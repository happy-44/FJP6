let obj = {};
console.log(obj);


let objhappy = {
    name : "happy",
    age : 21,
    phone_no : 9711664673,
    lastname : "mittal"
};
console.log(objhappy);


let capAmerica = {
    Name : "Happy",
    Age : 21,
    friends : ['kajal','sonal','gaurav','pooja'],
    address : {
        city : 'new delhi',
        state : 'delhi'
    },
    isAvenger : false,
    sayHi : function(){
        console.log("function sayhi");
    }
};
console.log(capAmerica);

console.log(capAmerica.Name);
console.log(capAmerica.Age);
console.log(capAmerica.friends);
console.log(capAmerica.address);
console.log(capAmerica.result);
console.log(capAmerica.address.city);

console.log(capAmerica.sayHi());
capAmerica.sayHi();

console.log(capAmerica.Name);
console.log(capAmerica['Name']);