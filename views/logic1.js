let text=document.querySelector(".text");
let btn=document.querySelector(".btn")
let user=document.querySelector(".user-detail")

btn.addEventListener('click',()=>{
    let new_ele=document.createElement("ul")
    new_ele.innerHTML=`<div class="new_list">${text.value}`;
    user.appendChild(new_ele);
    text.value="";
})
