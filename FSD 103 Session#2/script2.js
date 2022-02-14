/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);*/
//for loop
for(let i=0;i<100;i+=10){
    console.log("i"+i);
}
let j=20;
while(j<10){
    console.log("j",j);
    j++;
}

let counter=20;
do{
    console.log("counter" + counter);
    counter++;
}while(counter<10);

/*let userName="Kevin";
let userName=prompt("Enter the user name:");
if(userName=="David"){
    console.log("the users are different");
}*/

let num1=10;
let num2=0;

if(num1>num2){
    console.log("Num1 is greater than num2.");
}else{
    console.log("num2 is greater than num1");
}

let student=true;

if(student){
    console.log("the user is an student")
}else{
    console.log("the user is not an student")
}