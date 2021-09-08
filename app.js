// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

var dollarToYen = function(dollarValue){
    let dollarToEuro = dollarValue / 1.2;
    let valueInYen = dollarToEuro * 127.9;
    return valueInYen;
}


var yenToPound = function(yenValue){
    let yenToEuro = yenValue / 127.9;
    let valueInPound = yenToEuro * 0.8;
    return valueInPound;
}

console.log(yenToPound(1));


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, dollarToYen, yenToPound }

