let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar (euro){
    let dollar = oneEuroIs.USD*euro;
    return dollar;
}
console.log(fromEuroToDollar(20));

function fromDollarToYen (dollar){
    let yen = Math.floor((dollar/oneEuroIs.USD)*oneEuroIs.JPY);
    return yen;
}
console.log(fromDollarToYen(20));

function fromYanToPound (Yan){
    let yan = Math.ceil((Yan/oneEuroIs.JPY)*oneEuroIs.GBP);
    return yan;
}
console.log(fromYanToPound(1000));

module.exports = {fromDollarToYen, fromYanToPound, fromEuroToDollar}