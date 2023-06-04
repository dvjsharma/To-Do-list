const nameDiv =document.createElement("div");
nameDiv.classList.add("USerNAme");
const Uname=document.getElementsByClassName('name')[0];
Uname.appendChild(nameDiv);
nameDiv.innerText=localStorage.getItem('usr');
const date=document.getElementById("date");
date.innerHTML = Date().slice(0,16);

