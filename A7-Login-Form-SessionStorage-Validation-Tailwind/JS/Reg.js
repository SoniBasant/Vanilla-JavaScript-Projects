
// variables
const form = document.getElementById("form");
const uid = document.getElementById("user-input");
const mail = document.getElementById("email-input");
const pwd = document.getElementById("password-input");
const pwdChk = document.getElementById("password-check");
const btn = document.getElementById("submit");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
    allFill();
})

function addData() {

    const userName = uid.value;
    const userEmail = mail.value;
    const userPassword = pwd.value;

    // value of input

    sessionStorage.setItem("userName", userName)
    sessionStorage.setItem("userEmail", userEmail)
    sessionStorage.setItem("userPass", userPassword)

}

// check inputs from the form
function checkInputs() {

    const userName = uid.value.trim();
    const userEmail = mail.value.trim();
    const userPassword = pwd.value.trim();
    const userPasswordChk = pwdChk.value.trim();

    // condition for username
    if(userName === '') {
        setErrorFor(uid, 'Username can not be blank')
    } 
    else {
        setSuccessFor(uid);
        // counter++;
    }

    // condition for email
    if(userEmail === '') {
        setErrorFor(mail, 'Email can not be blank')
    }
    else if(!emailFormat(userEmail)) {
        setErrorFor(mail, 'Email format is not right')
    }
    else {
        setSuccessFor(mail);
        // counter++;
    }

    // condition for password
    if(userPassword === '') {
        setErrorFor(pwd, 'Password can not be blank')
    } 
    else {
        setSuccessFor(pwd);
        // counter++;
    }

    // condition for password check
    if(userPasswordChk === '') {
        setErrorFor(pwdChk, 'Password can not be blank')
    }
    else if(userPasswordChk !== userPassword) {
        setErrorFor(pwdChk, 'Password does not match')
    } 
    else {
        setSuccessFor(pwdChk);
        // counter++;
    }
}

function setErrorFor(input, message) {
    const errMsg = input.parentElement;
    const small = errMsg.querySelector('small');
    errMsg.classList.add = 'error';
    small.classList.remove('hidden');
    small.innerText = message;
}

function setSuccessFor(input) {
    const errMsg = input.parentElement;
    errMsg.classList.add = 'valid';
    // errMsg.className = 'form-input valid';
    const small = errMsg.querySelector('small');
    small.classList.add('hidden');
}

function emailFormat(mail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}

function allFill() {
    const userName = uid.value;
    const userEmail = mail.value;
    const userPassword = pwd.value;
    const userPasswordChk = pwdChk.value;
    if(userName == '' || userEmail == '' || userPassword == '' || userPasswordChk == '') {
        alert('Fill all entries');
        checkInputs();
        form.addEventListener('submit', e => {
            e.preventDefault();
        });
    } else {
        addData();
        window.location.href = 'login.html';
    }
}
