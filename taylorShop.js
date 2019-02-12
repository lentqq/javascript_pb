function taylorShop (input) {
    let numberTables = Number(input.shift());
    let lengthTabel = Number(input.shift());
    let widthTable = Number(input.shift());
    let coverArea = numberTables * (lengthTabel + 2 * 0.3) * (widthTable + 2 * 0.3);
    let squareArea = numberTables * (lengthTabel / 2) * (lengthTabel / 2);
    let USDPrice = coverArea * 7 + squareArea * 9;
    let BGNPrice = USDPrice * 1.85;

    console.log(`${USDPrice.toFixed(2)} USD`);
    console.log(`${BGNPrice.toFixed(2)} BGN`);
}

taylorShop([10, 1.20, 0.65]);