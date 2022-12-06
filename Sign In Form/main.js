function Check(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_err = document.getElementById("Err3");
    var email_err = document.getElementById("Err2")
    var username_err = document.getElementById('Err1')
    var username = document.getElementById("username").value;
    if (password.length <= 6){
        password_err.innerHTML = "Please Enter at Least 6 characters"
        password_err.style.color = "red"
    }
    else {
        password_err.innerHTML = " "
    }
    if (email.length <= 10){
        email_err.innerHTML = "Please Enter at Least 10 characters"
        email_err.style.color = "red"
    }
    else {
        email_err.innerHTML = " "
    }
    if (username.length <= 6){
        username_err.innerHTML = "Please Enter at Least 6 characters"
        username_err.style.color = "red"
    }
    else {
        username_err.innerHTML = " "
    }
}