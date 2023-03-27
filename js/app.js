const input=document.querySelector('input')
const todo=document.querySelector('.todo')
const button1=document.querySelector('.enter')
const valueaa=document.querySelector(".aa")
const doing=document.querySelector('.doing')
const done=document.querySelector('.done')
const delet=document.querySelector('.delete')
let dragItem;
button1.addEventListener("click",function () {
    if (event.key === "Enter") {
        event.preventDefault();
        document.quarySelector(".enter").click();
      }
   todo.innerHTML+=  
   `
   <p draggable="true" class="bg-primary ">${input.value}</p>
   

   `
})
valueaa.addEventListener("dragstart",function () {
    dragItem=innerHTML
    
})
delet.addEventListener("dragover",function (e) {
    e.preventDefault()
    
})
delet.addEventListener('drop',function () {
    valueaa.remove('delet')
    
})
doing.addEventListener("dragover",function (e) {
    e.preventDefault()
})
doing.addEventListener("drop",function () {
    doing.append(dragItem)
    
})
delet.addEventListener('click',function () {
    todo.innerHTML-=  
    `
    <p draggable="true" class="bg-primary "></p>
    
 
    `
})

