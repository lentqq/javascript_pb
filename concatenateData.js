function concateneteData (input) {
    let firstName = input.shift();
    let lastName = input.shift();
    let age = input.shift();
    let town = input.shift();

    let result = `You are ${firstName} ${lastName}, a ${age} years old person from ${town}.`
    console.log (result);
}

concateneteData(["Nikolay", "Kolev", 47, "Michuryn"]);