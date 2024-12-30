let NameUser = document.getElementById("NameUser");
let btnOut = document.getElementById("btnOut");



let UserName = localStorage.getItem('UserName');

NameUser.innerHTML = UserName;

btnOut.addEventListener("click" , function(){
    localStorage.removeItem('UserName');
})
