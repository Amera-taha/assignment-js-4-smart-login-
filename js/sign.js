
let emailInput = document.getElementById('emailSign');
let passwordInput = document.getElementById('passwordSign');
let nameInput = document.getElementById('NameSign');
let btnsubmit = document.getElementById("btnsubmit");
let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertPassword = document.getElementById("alertPassword");
let alertExists = document.getElementById("alertExists");
let alertsuccess = document.getElementById("alertsuccess");

let userList = [];

if (localStorage.getItem('userList') !== null) {
    userList = JSON.parse(localStorage.getItem('userList'));
}

btnsubmit.addEventListener('click', function() {
    if (checkAllValid()) {
        addUser();
    } else {
        
    }
});

function Validtion(regex, element, alert) {
    let pattern = regex;
    if (pattern.test(element.value)) {
        alert.classList.replace("d-block", "d-none");
        return true;
    } else {
        alert.classList.replace("d-none", "d-block");
        return false;
    }
}

function checkAllValid() {
    if (Validtion(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/, nameInput, alertName) &&
        Validtion(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, emailInput, alertEmail) &&
        Validtion(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, passwordInput, alertPassword)) {
        return true;
    } else {
        return false;
    }
}

function addUser() {
    let user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };
    if (chackUser(user) == true) {
        alertExists.classList.replace("d-none", "d-block");
    } else {
        console.log(userList);
        userList.push(user);
        localStorage.setItem('userList', JSON.stringify(userList));
        alertExists.classList.replace("d-block", "d-none");
        alertsuccess.classList.replace("d-none", "d-block");
        window.location.href="../index.html"
    }
}

function chackUser(user) {
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email.toLowerCase() === user.email.toLowerCase()) {
            console.log('موجود');
            return true;
        }
    }
    return false;
}
