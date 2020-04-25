//RE koriscen na login.html

document.getElementById("loginButton").addEventListener("click", proveraLogin);
document.getElementById("loginUser").focus();


function proveraLogin(){
    var loginUser = document.getElementById("loginUser");
    var loginPass = document.getElementById("loginPass");

    var reloginUser = /^[A-z]+$/;
    var reloginPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    var errorUser = document.getElementById("errorUser");
    var errorPasswordd = document.getElementById("errorPassword");

    if(loginUser == "") {
        errorUser.style.color = "red";

     } else if(!reloginUser.test(loginUser.value)) {
      errorUser.style.color = "red";
         
     } else {
      errorUser.style.color = "green";
     }

     if(loginPass == "") {
        errorPasswordd.style.color = "red";

     } else if(!reloginPass.test(loginPass.value)) {
        errorPasswordd.style.color = "red";
         
     } else {
        errorPasswordd.style.color = "green";
     }
}