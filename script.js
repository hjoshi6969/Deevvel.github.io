function validate(e) {
	// Hides all error elements on the page
	hideErrors();

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
    }

    if(phoneNumber == ""){
        document.getElementById("phoneNumberError").style.display = "block";
        Error = true;
    }else if(phoneNumber.length != 10){
        document.getElementById("invalid_phoneNumber").style.display = "block";
        Error = true;
    }

    if(email == ""){
        document.getElementById("EmailError").style.display = "block";
        Error = true;
    }else if(isValidEmail(email)){
        document.getElementById("invalid_email").style.display = "block";
        Error = true;
    }
}

function isValidEmail(email) 
{
	// Email validation regex pattern
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function load(){
    let count = 0;
    let navIcon = document.getElementById("a")
    navIcon.addEventListener("click", () => {

     let navItems = document.getElementById("nav2");
    navItems.setAttribute("style", "top:0px;");
    if(count == 0){
        let navItems = document.getElementById("nav2");
        navItems.setAttribute("style", "top:0px; left: 0px");
        count++;
    }
    else
    {
        let navItems = document.getElementById("nav2");
        navItems.setAttribute("style", "top:-2000px;");
        count--;
    }
    });
    let subbmit = document.getElementById("subbmit");
    subbmit.addEventListener("click", validate)
}

document.addEventListener("DOMContentLoaded", load)