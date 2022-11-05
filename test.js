const {fromDollarToYen, fromYanToPound, fromEuroToDollar} = require('./app.js');


test("4 dollars son 426 yuanes",function(){
    let total = fromDollarToYen (4)
    console.log(total)
    expect(total).toBe(426)
})

test("1000 yuanes son 7 GBP",function(){
    let total = fromYanToPound (1000)
    console.log(total)
    expect(total).toBe(7)
})

test("15 euros son 18 dollars",function(){
    let total = fromEuroToDollar (15)
    console.log(total)
    expect(total).toBe(18)
})