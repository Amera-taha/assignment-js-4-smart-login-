let emailInput = document.getElementById('emaillog');
let passwordInput = document.getElementById('passwordlog');
let btnsubmit = document.getElementById("btnsubmit");
let alertLog = document.getElementById("alertLog");
let alertEmail = document.getElementById("alertEmail");

let userList = [];


if (localStorage.getItem('userList') !== null) {
    userList = JSON.parse(localStorage.getItem('userList'));
    
    console.log(userList);
}
btnsubmit.addEventListener('click', function() {
    
    log()
    
});

function log() {
    let userdata = {
        
        email: emailInput.value,
        password: passwordInput.value
    }

    if(logValid(userdata) == true){
        alertLog.classList.replace("d-block", "d-none");

        
    }else{
        alertLog.classList.replace("d-none", "d-block");

    }
}
function logValid(userdata){
for(let i = 0; i < userList.length; i++){
    if (userList[i].email.toLowerCase() === userdata.email.toLowerCase() && userList[i].password === userdata.password) {
        localStorage.setItem('UserName', userList[i].name);
        window.location.href="../home.html"

        return true;
    }
}
}
