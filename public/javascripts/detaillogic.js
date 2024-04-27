let text = document.querySelector(".text");

let btn = document.querySelector(".btn")
let list = document.querySelector(".list")


// btn.addEventListener('click',()=>{
//     alert("hello");
//     let new_ele=document.createElement("ul")
//     new_ele.innerHTML=`<div class="new_list">${text.value}`;
//     list.appendChild(new_ele);
//     text.value=" ";
// })

btn.addEventListener("click",function(){
    let new_ele=document.createElement("ul")
        new_ele.innerHTML=`<div class="new_list">${text.value}`;
        list.appendChild(new_ele);
      
})