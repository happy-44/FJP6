console.log("Kya haal Chal Hai Tere");
let num = 10;
console.log(num);
let char = 'a'
console.log(char);
let str = 'i am happy'
console.log(str);
let bool = true
console.log(bool);
for(let i = 1; i < 5; i++){
    console.log(i);

}
let count = 10;
while(count > 0){
    console.log(count);
    count--;
}
let n = 12345;
count = true;
for(let i = 2; i * i <= n; i++){
    if(n % i == 0){
        count = false;
    }
}
if(count == true){
    console.log("prime");
}else{
    console.log("not prime")
}