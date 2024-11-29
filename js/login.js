

function login(){

    const email = document.getElementById('email').value ; 
    const password = document.getElementById('password').value ; 

    isValid = true;

    console.log(email , password)

    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format.";
      isValid = false;
    }
  
    // Password Validation
    // Ensure password is at least 8 characters, contains one uppercase, one lowercase, and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").innerText =
        "Password must be at least 8 characters long and include a number, an uppercase letter, and a lowercase letter.";
      isValid = false;
    }



    if(isValid == true){

        if(email == "ayadsifeddine007@gmail.com" && password == "Sifou2020@"){
            window.location.href = "loading.html";
        }
        else{

            document.getElementById("passwordError").innerText =
                "Email or Password incorrect . try again";
            isValid = false;

        }

       
    }

}




