//RE koriscen na register.html

window.addEventListener("load", fillRegion);
document.getElementById("tbusername").focus();
document.getElementById("btnReg").addEventListener("click", provera);

function fillRegion(){

	var region, ispis;

	region = ["Europe ", "NA-East", "NA-West"];

	ispis = "<select id='ddlregister'>";
	ispis +="<option value='0'>Select</option>";

	for(var i = 0; i < region.length; i++){
		ispis += "<option value='" + region[i] + "'>" + region[i] + "</option>";
	}
	ispis += "</select>";
	document.getElementById("ddlreg").innerHTML = ispis;
}


function provera(){
 
    var podaci = [];
    var username=document.getElementById("tbusername").value.trim();
    var password=document.getElementById("tbpassword").value.trim();
    var mail=document.getElementById("tbmail").value.trim();
    var tacno="You are over 14";
    
    var usernameError=document.getElementById("errorname");
    var passwordError=document.getElementById("errorpass");
    var mailError=document.getElementById("errormail");
    
    var reUsername = /^[A-z]+$/;
    var rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var reeMail = /^[A-z]+\d*\@(gmail|hotmail|yahoo|(ict.edu))\.(com)$/;
    
    if(username == "") {
        usernameError.innerHTML = "Username is required!"; 
     } else if(!reUsername.test(username)) {
        usernameError.innerHTML = "Use only letters.";
     } else {
         podaci.push(username);
         usernameError.innerHTML = "";   
     }
    
     if(password == "") {
        passwordError.innerHTML = "Password is required!"; 
     } else if(!rePassword.test(password)) {
        passwordError.innerHTML = "Use combination of letters and numebrs.(8 or more char)";
     } else {
         podaci.push(password);
         passwordError.innerHTML = "";   
     }
    
    if(mail == "") {
        mailError.innerHTML = "Mail is required!"; 
     } else if(!reeMail.test(mail)) {
        mailError.innerHTML = "Use right format for mail.";
 
     } else {
         podaci.push(mail);
         mailError.innerHTML = "";   
     }
    
    
    
    
    
    if(document.getElementById("chb").checked) {
        document.getElementById("errorold").innerHTML = "";
        podaci.push(tacno);
    } else {
        document.getElementById("errorold").innerHTML = "You must be over 14!";
   
    }
    if(podaci[3]) {
        var ispis = "<p class='text-success'>Good job! You are ready to <a href='https://www.epicgames.com/fortnite/en-US/home'>Download</a> game <3 </p>";
        
        document.querySelector("#errorregister").innerHTML = ispis;
    } else {
        document.querySelector("#errorregister").innerHTML = "You must fill required slots!";
    }
    
    }
