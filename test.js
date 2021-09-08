// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar should be 106.5833333333333 yens", function() {
    //import the function from app.js
    const { dollarToYen } = require('./app.js')

    const yen = dollarToYen(3.5)

    const expected = 3.5 * 106.58; 
    
     expect(dollarToYen(3.5)).toBe(373.04166666666674);
})

test("One yen should be 0.006254886630179828 pounds", function() {
    //import the function from app.js
    const { yenToPound } = require('./app.js')

    const yen = yenToPound(3.5)

    const expected = 3.5 * 0.006254886630179828; 
    
     expect(yenToPound(3.5)).toBe(0.0218921032056294);
})