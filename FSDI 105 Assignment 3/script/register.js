//create the constructor ES2015 / class
class User{
    //this are the parameters<-------------------------------------->
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first; //** 
        this.lname=last; //** 
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}
//this is parameter -->
function isValid(user){
// return false when the user is not valid   
// return true when the user is valid
    let valid=true;
//validation 
    if(user.email.length==0){
        //if we get here it means that email is empty and it is not valid
        valid=false;
        $("#txtEmail").addClass("alert-error");
        console.log("Missing email");
    }
    if(user.password.length==0){
        valid=false;
        $("#txtPassword").addClass("alert-error");
        console.log("Missing the password");
    }
    if(user.fname.length==0){
        valid=false;
        $("#txtFirst").addClass("alert-error");
        console.log("Missing the First name");
    }
    if(user.lname.length==0){
        valid=false;
        $("#txtLast").addClass("alert-error");
        console.log("Missing the Last name");
    }
    return valid; 
}
function registerUser(){
    let email = $("#txtEmail").val(); //*check your id on the html
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color)
    //validate the user
    if(isValid(user)){
       saveUser(user);//this function is in the storeManager.js 
    }
    
}

function init(){
    console.log("Init Register");
    //hook events
    $("#btnRegister").click(registerUser);
}
window.onload=init;