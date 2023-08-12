function validate(e) {
	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;
}

function formHasErrors(){
    Errors = false;

    let fullName = document.getElementById("FullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;

    if(fullName == ""){
        document.getElementById("FullNameError").style.display = "block";
        Error = true;
    }else{
        document.getElementById("FullNameError").style.display = "none";
    }

    if(phoneNumber == ""){
        document.getElementById("phoneNumberError").style.display = "block";
        Error = true;
    }else{
        document.getElementById("phoneNumberError").style.display = "none";
        if(phoneNumber.length != 10){
            document.getElementById("invalid_phoneNumber").style.display = "block";
            Error = true;
        }else{
            document.getElementById("invalid_phoneNumber").style.display = "none";
            Error = true;
        }
    }

    if(email == ""){
        document.getElementById("EmailError").style.display = "block";
        Error = true;
    }else{
        document.getElementById("EmailError").style.display = "none";
        if(!isValidEmail(email)){
            document.getElementById("invalid_email").style.display = "block";
            Error = true;
        }else{
            document.getElementById("invalid_email").style.display = "none";
            Error = true;
        }
    }
    return Error
}

function isValidEmail(email) 
{
	// Email validation regex pattern
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}


function load(){
    let subbmit = document.getElementById("subbmit");
    subbmit.addEventListener("click", () => {
        validate();
    });
    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
        document.getElementById("FullName").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("email").value = "";
        document.getElementById("ask").value = "";
    })
}
document.addEventListener("DOMContentLoaded", load)