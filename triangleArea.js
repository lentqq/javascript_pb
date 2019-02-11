function triangleArea (input) {
    let side = Number(input.shift());
    let height = Number(input.shift());
    let area = side * height / 2;
    console.log(area.toFixed(2));
}

triangleArea([1.23456,4.56789])