function circleAreaPerimeter(input) {
    let radius = Number(input.shift());
    let area = Math.PI * Math.pow(radius, 2);
    let perimeter = 2 * Math.PI * radius;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaPerimeter([4.5]);