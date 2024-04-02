function validateName(){
    var name = document.getElementById("name").value.trim();
    if(name === ''){
        document.getElementById("nameerror").innerHTML = "Name must not be empty";
        return false;
    }
    else{
        document.getElementById("nameerror").innerHTML = "";
        return true;
    }
}
function validateEmail(){
    var email = document.getElementById("email").value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ''){
        document.getElementById("emailerror").innerHTML = "Your email is required";
        return false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailerror").innerHTML = "Please enter a valid email address";
        return false;
    }
    else{
        document.getElementById("emailerror").innerHTML = "";
        return true;
    }
}
function validatePhone(){
    var phone = document.getElementById("phone").value.trim();
    var phonePattern = /^\d{10}$/;
    if(phone === ''){
        document.getElementById("phoneerror").innerHTML = "Please enter your mobile number";
        return false;
    }
    else if(!phonePattern.test(phone)){
        document.getElementById("phoneerror").innerHTML = "Please enter a valid phone number format (e.g., XXXXXXXXXX)";
        return false;
    }
    else{
        document.getElementById("phoneerror").innerHTML = "";
        return true;
    }
}
function validateAddress(){
    var address = document.getElementById("address").value.trim();
    if(address === ''){
        document.getElementById("addresserror").innerHTML = "Please enter your address";
        return false;
    }
    else{
        document.getElementById("addresserror").innerHTML = "";
        return true;
    }
}
function validateResume(){
    var resume = document.getElementById("resume").files[0];
    var allowedExtensions = /(\.pdf|\.docx)$/i;
    if(!allowedExtensions.exec(resume.name)){
        document.getElementById("resumeerror").innerHTML = "Only .pdf and .docx file formats are allowed";
        return false;
    }
    else if(resume.size > 5 * 1024 * 1024){
        document.getElementById("resumeerror").innerHTML = "File size must be less than 5 MB";
        return false;
    }
    else{
        document.getElementById("resumeerror").innerHTML = "";
        return true;
    }
}
function validateForm() {
    var isValid = validateName() && validateEmail() && validatePhone() && validateAddress() && validateResume();
    if (isValid) {
        document.getElementById("forms").innerHTML = "Your application has been successfully submitted";
        document.getElementById("forms").style.textAlign="center";
        document.getElementById("forms").style.padding="150px";
        document.getElementById("forms").style.border="8px";
        return false; 
    } else {
        return false;
    }
}