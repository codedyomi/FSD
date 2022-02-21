//create the constructor ES201 / class
class User{
    //this are the parameters<-------------------------------------->
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first;//** 
        this.lname=last;//** 
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }

}

function registerUser(){
    let email = $("#txtEmail").val(); //*check your id on the html
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let txtlast = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#txtPayment").val();
    let color = $("#txtColor").val();
    let user =new User(email, password, first, last, age, address, phone, payment,color);
    console.log(user);
}

function init(){
    console.log("Init Register");
    //hook events
    $("#btnRegister").click(registerUser);

}
window.onload=init;