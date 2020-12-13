// CHALLENGE (Step 360)

// Form Validation -- checks that all required fields are not empty when submitted
function validateForm() {
    var errorMessage = "";
    var fname = document.forms["accountForm"]["fname"].value;
    if (fname == "") {
        errorMessage += "First Name is a required field \n" ;
    }

    var lname = document.forms["accountForm"]["lname"].value;
    if (lname == "") {
        errorMessage += "Last Name is a required field \n";
    }

    var phone = document.forms["accountForm"]["phone"].value;
    if (phone == "") {
        errorMessage += "Phone is a required field \n";
    }

    var email = document.forms["accountForm"]["email"].value;
    if (email == "") {
        errorMessage += "Email is a required field";
    }

    // if there is an error, return false and show the alert
    if (errorMessage != "") {
        alert(errorMessage);
        return false;
    }
}

var showlogin = false;

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    return toggleForm();
}

function toggleForm() {
    if (showlogin){
        document.getElementById("popupForm").style.display = "none";
        document.getElementById("createAccountFormContainer").style.display = "block";
        document.getElementById("toggleButton").innerText = "Already have an account? Click Here";
        showlogin = false;
    }
    else {
        document.getElementById("popupForm").style.display = "block";
        document.getElementById("createAccountFormContainer").style.display = "none";
        document.getElementById("toggleButton").innerText = "Don't have an account?  Click Here";
        showlogin = true;
    }
}