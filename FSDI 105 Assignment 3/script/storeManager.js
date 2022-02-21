function saveUser(user){
    console.log(user);// this is the Obj.
    let val=JSON.stringify(user); //parse into a JSON string
    console.log(val);//this is the string in JSON
    localStorage.setItem("users",val);//send it to the local storage
}
function readUsers(){

}