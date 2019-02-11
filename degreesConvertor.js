function degreesConvertor (input) {
    let celsiusDegrees = Number(input.shift());
    let fahrenheitDegrees =  (celsiusDegrees * 9) / 5 +32;
    console.log(fahrenheitDegrees.toFixed(2));
}

degreesConvertor([-5.5])