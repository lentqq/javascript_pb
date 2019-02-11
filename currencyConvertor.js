function currencyConvertor (input) {
    let inches = Number(input.shift());
    let inchToCm = inches * 2.54;
    console.log (inchToCm.toFixed(2));
}

currencyConvertor([5])