// Form Validation -- checks that all required fields are not empty when submitted
function validateForm() {
    var errorMessage = "";
    var fname = document.forms["contactForm"]["fname"].value;
    if (fname == "") {
        errorMessage += "First Name is a required field \n" ;
    }

    var lname = document.forms["contactForm"]["lname"].value;
    if (lname == "") {
        errorMessage += "Last Name is a required field \n";
    }

    var phone = document.forms["contactForm"]["phone"].value;
    if (phone == "") {
        errorMessage += "Phone is a required field \n";
    }

    var email = document.forms["contactForm"]["email"].value;
    if (email == "") {
        errorMessage += "Email is a required field";
    }

    // if there is an error, return false and show the alert
    if (errorMessage != "") {
        alert(errorMessage);
        return false;
    }
}
