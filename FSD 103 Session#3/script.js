function sayHello(name,place){
    //body of the function
    console.log("Hello world " + name + " from " + place);
    let template = `<h2>Hello world ${name} from <span class="place">${place}</span></h2>`;
    return template;

}

//let markInfo=sayHello("Mark","USA");
//document.write(markInfo);
document.write(sayHello("Mark","USA"));
document.write(sayHello("April", "USA"));
document.write(sayHello("Arturo", "Mexico"));


