
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')

var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')

var signupContainer=[] ;
if (localStorage.getItem('signupContaine') != null) {
    signupContainer = JSON.parse(localStorage.getItem('signupContaine'))
    display()
}

function signup1(){
    for(var i=0 ;i<signupContainer.length ;i++){
        if( signupContainer[i].name.toLowerCase() == signupName.value.toLowerCase() || signupContainer[i].Email.toLowerCase() == signupEmail.value.toLowerCase() || signupContainer[i].Password.toLowerCase() == signupPassword.value.toLowerCase()){
            return false
        }
    }
    return true;
}
function signUp(){
    if(validationName()==true && validationEmail()==true && validationPassword()==true){
        var Data = {
            name: signupName .value,
            Email: signupEmail.value,
            Password: signupPassword.value,
        };
    if(signup1() == false)
    {
        document.getElementById("signup").innerHTML=("Email Already Exists");
    }
    else{
        
        signupContainer.push(Data);
        localStorage.setItem("signupContaine",JSON.stringify(signupContainer));
        document.getElementById("signup").innerHTML=" Success";
    }
    clearForm1()
}
}
function clearForm1() {
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}

function login(){
    if(validationEmailLogin()==true && validationPasswordLogin()==true){
        var  Email= signinEmail.value;
        var  Password= signinPassword.value;

        for(var i=0;i< signupContainer.length;i++)
        {
            if( signupContainer[i].Email.toLowerCase() ==Email.toLowerCase() && signupContainer[i].Password.toLowerCase() == Password.toLowerCase() )
            {
                location.replace('home.html');
                localStorage.setItem("userName",signupContainer[i].name);
            }
            else
            {
                document.getElementById("login").innerHTML="incorrect email or password";
            }
        }
        clearForm();
    }
}
function clearForm() {
    signinEmail.value = "";
    signinPassword.value = "";
}
function display()
{
    for(var i=0;i< signupContainer.length;i++)
    {
        document.getElementById("username").innerHTML= 'welcome '+localStorage.getItem("userName");
    }
}
function validationEmailLogin(){
    var incorrect =document.getElementById("incorrect")
    var test = signinEmail.value;
    var regexEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if(regexEmail.test(test)==true){
        signinEmail.classList.add("is-valid");
        signinEmail.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        document.getElementById("incorrect").innerHTML=("Success");
        return true;
    }
    else{
        signinEmail.classList.add("is-invalid");
        signinEmail.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        document.getElementById("incorrect").innerHTML=("email : Name@gmail.com  ");
        return false;
    }
}
function validationPasswordLogin(){
    var incorrect =document.getElementById("incorrect")
    var test = signinPassword.value;
    var regexPassword = /[a-z0-9]/;
    if(regexPassword.test(test)==true){
        signinPassword.classList.add("is-valid");
        signinPassword.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        document.getElementById("incorrect").innerHTML=("Success");
        return true;
    }
    else{
        signinPassword.classList.add("is-invalid");
        signinPassword.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        document.getElementById("incorrect").innerHTML=("inimum 8 characters");
        return false;
    }
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
        document.getElementById("incorrect").innerHTML=("Name");
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
        document.getElementById("incorrect").innerHTML=("email : Name@gmail.com");
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
        document.getElementById("incorrect").innerHTML=("inimum 8 characters");
        return false;
    }
}


