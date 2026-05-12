function calculateElectricityBill(unit) {
    let amount = 0
    if (unit > 400) {
        //700
        amount = (unit - 400) * 13
        unit = 400
    }
     if (unit > 200 & unit <= 400) {
        amount = amount + (unit - 200) * 8
        unit = 200
    }
     if (unit > 100 && unit <= 200) {
        amount = amount + (unit - 100) * 6
        unit = 100
    }
        amount = amount + unit * 4.2
    
    return (amount).toFixed(1)

}

console.log(calculateElectricityBill(150))