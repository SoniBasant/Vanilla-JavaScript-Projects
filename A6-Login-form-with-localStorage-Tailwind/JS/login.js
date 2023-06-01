
// variables
const uidEntered = document.getElementById("user-input");
const pwdEntered = document.getElementById("password-input");
const btn = document.getElementById("submit");

function retrieve() {
    // get values from the form
    const userName = uidEntered.value;
    const userPassword = pwdEntered.value;

    // retrieve from local storage
    const getName = localStorage.getItem("userName")
    const getEmail = localStorage.getItem("userEmail")
    const getPass = localStorage.getItem("userPass")

    if(userName==getName || userName==getEmail)
    {
        if(userPassword==getPass){
            alert("login successful");
        }
        else {
            alert("Wrong Password");
        }
    }
    else {
        alert("Invalid Details");
    }
}

btn.addEventListener('click', retrieve);