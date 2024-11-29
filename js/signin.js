
function signin(){

    const email = document.getElementById('em').value ; 
    const password = document.getElementById('pass').value ; 
    const phone = document.getElementById('phone').value ; 
    const firstName = document.getElementById('fn').value ; 
    const lastName = document.getElementById('ln').value ; 
    const confPassword = document.getElementById('conf-passeword').value ; 

     
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    isValid = true ; 

    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText ="Invalid email format."
        isValid = false;
    }else{
        document.getElementById("emailError").innerText = "";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
     if (!passwordRegex.test(password)) {
        document.getElementById("emailError").innerText ="Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number."
        isValid = false;
    }else{
        document.getElementById("emailError").innerText = ""; 
    }


    if (password !== confPassword) {
        document.getElementById("emailError").innerText = "Passwords do not match.";
        isValid = false;
     }else{
        document.getElementById("emailError").innerText = "";
     }

 
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("emailError").innerText = "Phone number must contain 10 to 15 digits.";
        isValid = false;
    }else{
        document.getElementById("emailError").innerText = "";
    }

 
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(firstName) || firstName.trim() === "") {
        document.getElementById("emailError").innerText = "First name must contain only letters and cannot be empty." ; 
        isValid = false;
    }else{
        document.getElementById("emailError").innerText = "";
    }

    if(isValid == true ){

        
    }

}