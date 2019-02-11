function trapezoidArea (input) {
    let sideA = Number(input.shift());
    let sideB = Number(input.shift());
    let height = Number(input.shift());
    let area = (sideA + sideB) * height / 2;
    console.log(area.toFixed(2));
}

trapezoidArea ([8, 13 ,7]);