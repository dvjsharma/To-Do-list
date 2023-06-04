let UserName=null;
function StoreUser(){
    const username=document.getElementById('welcome_input');
    UserName=username.value;
    if(UserName.trim()===""){
        alert("Oh please- don't tell me you got no name");
        return;
    }
    localStorage.setItem('usr',username.value);
    // console.log(UserName);
    window.location.href="landing.html";
    return;
};
