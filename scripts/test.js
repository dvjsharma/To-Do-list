const ActiveClass = (currele) => {
    const menuitems = document.getElementsByClassName('btn');
    for (let i = 0; i < menuitems.length; i++) {
        menuitems[i].classList.remove("active");
    }
    currele.classList.add("active");
};
const AddInputTask = () => { 
    const input = document.getElementById("input");
    const val = input.value; 
    if (val.trim() === "") {
        alert("Your task looks so empty lol");
        return;
    }
    const activeclass = document.getElementsByClassName('active');
    const button_color = activeclass[0].innerHTML;
    input.value = "";

    const newDiv = document.createElement("div");
    newDiv.classList.add("div-task");
    const ele1 = document.createElement("div");
    ele1.classList.add("div-task1");
    ele1.innerText = `${button_color}`;
    const ele2 = document.createElement("div");
    ele2.classList.add("div-task2");
    ele2.innerText = `${val}`;
    newDiv.appendChild(ele1);
    newDiv.appendChild(ele2);

    
    let checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<img src="img-src/check-circle.svg" alt="" class="resp"></img>';
    checkbutton.classList.add("check-task");
    newDiv.appendChild(checkbutton);
    
    
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<img src="img-src/trash3.svg" alt="" class="resp">';
    deletebutton.classList.add("delete-task");
    newDiv.appendChild(deletebutton);
    
    const taskContainer = document.getElementById("parent-task");
    const task=document.getElementsByClassName("div-task");
    if(task.length<7){
        taskContainer.appendChild(newDiv);
    }
    else{
        alert("Please complete already listed tasks duh")
    }
    checkbutton.addEventListener('click', ()=>{
        const parent=checkbutton.parentElement;
        const chilg=parent.getElementsByClassName("div-task2");
        chilg[0].style.textDecoration="line-through";
    });
    deletebutton.addEventListener('click', ()=>{
        deletebutton.parentElement.remove();
        return;
    });
}

