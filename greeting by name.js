function greetinByName(input) {
    let name = input.shift();
    let result = `Hello, ${name}!`;
    console.log(result);
}  

greetinByName(["Nikolay"]);