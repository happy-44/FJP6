let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");
inputTag.addEventListener("keydown",function(e){
    // console.log(e);
    let key = e.key;
    if(key == "Enter"){
        let value = inputTag.value;
        // console.log(value);
        inputTag.value = "";
        if(value != ""){
            let liTag = document.createElement("li");
            liTag.innerHTML = `<div>${value}</div>
                               <div class = "delete"><i class="material-icons">delete</i></div>`;
            handleDelete(liTag);
            ulTag.appendChild(liTag);
        }
    }
})
function handleDelete(liTag){
    let deleteDiv = liTag.querySelector(".delete");
    deleteDiv.addEventListener("click",function(){
        liTag.remove();
    })
}