function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
    
    let changeDue = cash - price;
    let totalInDrawer = cid.reduce((sum, [_, amount]) => sum + amount, 0);
    totalInDrawer = Math.round(totalInDrawer * 100) / 100;
    
    if (totalInDrawer < changeDue) return { status: "INSUFFICIENT_FUNDS", change: [] };
    if (totalInDrawer === changeDue) return { status: "CLOSED", change: cid };
    
    const changeArr = [];
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
        const [unit, value] = currencyUnits[i];
        let amountInDrawer = cid[i][1];
        let amountToReturn = 0;
        
        while (changeDue >= value && amountInDrawer > 0) {
            changeDue -= value;
            changeDue = Math.round(changeDue * 100) / 100;
            amountInDrawer -= value;
            amountToReturn += value;
        }
        
        if (amountToReturn > 0) changeArr.push([unit, amountToReturn]);
    }
    
    if (changeDue > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
    return { status: "OPEN", change: changeArr };
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
