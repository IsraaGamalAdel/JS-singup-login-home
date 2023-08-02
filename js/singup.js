var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')

var signupContainer ;
if (localStorage.getItem('signupContaine') != null) {
    signupContainer = []
}


function signup1(){
    for(var i=0 ;i<signupContainer.length ;i++){
        if( signupContainer[i].name.toLowerCase() == signupName.value.toLowerCase() && signupContainer[i].Email.toLowerCase() == signupEmail.value.toLowerCase() && signupContainer[i].Password.toLowerCase() == signupPassword.value.toLowerCase()){
            return false
        }
    }
}

function signUp(){
    if(validationName()==true && validationEmail()==true && validationPassword()==true){
        var Data = {
            name: signupName .value,
            Email: signupEmail.value,
            Password: signupPassword.value,
        };
    if(signupContainer == 0){
        signupContainer.push(Data);
        localStorage.setItem("signupContaine",JSON.stringify(signupContainer));
        document.getElementById("signup").innerHTML=" Success";
    }
    if(signup1() == false)
    {
        document.getElementById("signup").innerHTML=("Email Already Exists");
    }
    else{
        
        signupContainer.push(Data);
        localStorage.setItem("signupContaine",JSON.stringify(signupContainer));
        document.getElementById("signup").innerHTML=" Success";
    }
    clearForm()
}
}
function clearForm() {
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}


function validationName(){
    var incorrect =document.getElementById("incorrect")
    var test = signupName.value;
    var regexName = /[a-z]$/;
    if(regexName.test(test)==true){
        signupName.classList.add("is-valid");
        signupName.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        document.getElementById("incorrect").innerHTML=("Success");
        return true;
    }
    else{
        signupName.classList.add("is-invalid");
        signupName.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        document.getElementById("incorrect").innerHTML=("email ");
        return false;
    }
}
function validationEmail(){
    var incorrect =document.getElementById("incorrect")
    var test = signupEmail.value;
    var regexEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if(regexEmail.test(test)==true){
        signupEmail.classList.add("is-valid");
        signupEmail.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        document.getElementById("incorrect").innerHTML=("Success");
        return true;
    }
    else{
        signupEmail.classList.add("is-invalid");
        signupEmail.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        document.getElementById("incorrect").innerHTML=("email  ");
        return false;
    }
}
function validationPassword(){
    var incorrect =document.getElementById("incorrect")
    var test = signupPassword.value;
    var regexPassword = /[a-z0-9]/;
    if(regexPassword.test(test)==true){
        signupPassword.classList.add("is-valid");
        signupPassword.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        document.getElementById("incorrect").innerHTML=("Success");
        return true;
    }
    else{
        signupPassword.classList.add("is-invalid");
        signupPassword.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        document.getElementById("incorrect").innerHTML=("email");
        return false;
    }
}

