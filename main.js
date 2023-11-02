const input = document.querySelector('input');
const bouton = document.getElementById("btn");
const show= document.querySelector('.tasks');
const btnupdate =document.getElementById('btn2');




 //window.localStorage.clear();
 const tasks = JSON.parse(localStorage.getItem("task")) || [];
 updateTaskList();

function updateTaskList(){
    show.innerHTML=""; 
    tasks.forEach((task,index)=>{
        const listitem=document.createElement("li");
        const item=document.createElement('p');  
        item.innerHTML=`${task}`;
        const btn= `<button onclick="removeTask(${index})">Remove</button> <button onclick="updateTask(${index})">Update</button>`;
        listitem.innerHTML=btn;
        listitem.appendChild(item);
        show.appendChild(listitem);
        const lin = document.createElement('hr')
        show.appendChild(lin);
    })
};
/*

function updateTask(index) {
    const updatedTaskText = prompt("Edit task:", tasks[index]);
    if (updatedTaskText !== null) {
        tasks[index] = updatedTaskText;
        updateTaskList();
        localStorage.setItem("task", JSON.stringify(tasks));   
    }
}
*/
function updateTask(index){
    input.value=tasks[index];
    btnupdate.style.display='block';
    bouton.style.display='none';
    btnupdate.onclick=function(){
        updatee(index);
}};
function updatee(index){

   const task1 =input.value;  
   if(task1){
    tasks[index]=task1;
    localStorage.setItem("task", JSON.stringify(tasks));
    updateTaskList();
    btnupdate.style.display='none';
    bouton.style.display='block';
    input.value='';
   }
   else{
    alert('champ vide');
   }
}


function removeTask(index){
    const userResponse = confirm("Do you want to proceed?");
if (userResponse) {
    tasks.splice(index, 1);
    updateTaskList();
    localStorage.setItem("task", JSON.stringify(tasks));
} 
    
}

bouton.addEventListener('click', ()=>{
    const task =input.value;
    if(task){
        tasks.push(task);
        updateTaskList();
        localStorage.setItem("task", JSON.stringify(tasks));
        input.value='';
    } 
    else{
        alert('Ecrire task');
    }
});


