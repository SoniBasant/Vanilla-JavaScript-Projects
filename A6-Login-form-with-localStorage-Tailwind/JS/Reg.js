
// variables
const form = document.getElementById("form");
const uid = document.getElementById("user-input");
const mail = document.getElementById("email-input");
const pwd = document.getElementById("password-input");
const btn = document.getElementById("submit");

function addData() {

    const userName = uid.value;
    const userEmail = mail.value;
    const userPassword = pwd.value;

    // to test that we are getting values from input
    // function test() {
    //     uName = uid.value;
    //     eMail = mail.value;
    //     passWord = pwd.value;
    //     alert(uName+ eMail+ passWord);
    // }
    // btn.addEventListener("click", test);

    localStorage.setItem("userName", userName)
    localStorage.setItem("userEmail", userEmail)
    localStorage.setItem("userPass", userPassword)

}

btn.addEventListener('click', addData);

