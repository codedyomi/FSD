//let number1= prompt("Enter the number 1:");
function calculate(){
    console.log("Calculator function");
let num1=Number(prompt("Enter the number 1:"));
console.log(num1);
let num2=Number(prompt("Enter the number 2:"));
console.log(num2);

let sum,subs,mult,div;
//display the sum
sum=num1+num2;
console.log(sum);
// display the subs
subs=num1-num2
console.log(subs);
// display the mult
mult=num1*num2
console.log(mult);
div=num1/num2
console.log(div);
document.getElementById("results").innerHTML=`
    <p>${num1} + ${num2} = ${sum}</p>
    <p>${num1} - ${num2} = ${subs}</p>
    <p>${num1} * ${num2} = ${mult}</p>
    <p>${num1} / ${num2} = ${div}</p>
`;
//document.write(sum);


}