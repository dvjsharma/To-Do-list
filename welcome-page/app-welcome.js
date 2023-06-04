let UserName=null;
function StoreUser(){
    const username=document.getElementById('welcome_input');
    UserName=username.value;
    if(UserName.trim()===""){
        alert("Oh please- don't tell me you got no name");
        return;
    }
    window.location.href="../index.html";
    return;
}