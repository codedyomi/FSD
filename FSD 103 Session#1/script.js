console.log("Script");
var client;//1. declaration
client="Abayomi";//2. assignation
let age=99;
const URL="http://127.0.0.1/iot"
age=55;

console.log(age);
console.log(URL);


console.log("client");// client
console.log(client);// Aaron
console.log("Please, " + client + " visit the site:" + URL);

let jobTitle="Supply Chain Manager";
let geoLocation="San Diego, CA.";
let partnerName="Alice"
let numberChildren=7;
console.log("I " + client + " will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberChildren + " kids.");
//template string
console.log(`I ${client} will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberChildren} kids.`);
document.write(`I ${client} will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberChildren} kids.`);