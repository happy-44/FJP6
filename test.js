function spoon(word){
    let arr = Array.from(word);
    // console.log(arr);
    let i = 1;
    for(; i < arr.length; i++){
       if(arr[i] == ' '){
           break;
       }
   }
   let temp = arr[0];
   arr[0] = arr[i+1];
   arr[i+1] = temp;
   let word1 = arr.join(' ');
   console.log(word1);
}
let happy = "Happy Mittal";
spoon(happy);