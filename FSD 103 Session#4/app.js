let hunger=80;
let happiness=50;
let energy=40;

function displayInfo(){
    document.getElementById("hungerInfo").innerHTML=`🍖 = ${hunger}`;
    document.getElementById("happinessInfo").innerHTML=`😊 = ${happiness}`;
    document.getElementById("energyInfo").innerHTML=`🔋 = ${energy}`;
    
}

function feed(){
    console.log("Feed function");
    //affect vars (increase the happiness and decrease hunger +-10);
    hunger=hunger-10;
    happiness=happiness+10;

    if(hunger==0){
        document.getElementById("hungerInfo").innerHTML=`🍖 = ${hunger=80}`;
    }
    if(happiness==100){
        document.getElementById("happinessInfo").innerHTML=`😊 = ${happiness=10}`;
    }
    // call the "displayInfo();"
    displayInfo();
    } 
    
    
    

function pet(){
    console.log("Pet function");
    //increase the happiness.
    happiness=happiness+10;
     //add if statement.
     if(happiness>100){
        document.getElementById("happinessInfo").innerHTML=`😊 = ${happiness=10}`;
    }
    displayInfo();
}


function play(){
    console.log("Play function");
    //increase the energy.
    energy=energy+10;
//add if statement.
if(energy==110){
    document.getElementById("energyInfo").innerHTML=`🔋 = ${energy=10}`;
}
    //call the "displayInfo();"
    displayInfo();
}
play();

