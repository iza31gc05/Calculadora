// Variables
let diceFaces  = 20;

// Random functions
function randI(i) {
    return Math.ceil(Math.random() * i);
}
function randList(n, size) {
    let list = [];
    while(size--) list.push(randI(n));
    return list;
}
function rollDice(){ return randI(diceFaces) }
// Calculation functions
function calcMod(d20) {
    const weight = 1.2;
    let i = -1;

    if(d20 > 15 ){
        inc = 1
    }else if (d20 > 7){
        inc = 0;
    }

    return Math.round(inc + d20/weight);
}
function calcMod2(d20) {
    return Math.floor((d20-10)/2);
}
function calcTotal(base, mod){
    return parseInt(base) + parseInt(mod);
}
// Fill functions
function fillD20(row, newValue) {
    let input = row.querySelector('td:nth-child(3)>input')
    input.value = newValue;
}
function fillMod(row, newValue) {
    let input = row.querySelector('td:nth-child(4)>input');
    input.value = newValue;
}
function fillTotal(row, newValue) {
    let td = row.querySelector('td:nth-child(5)');
    td.innerHTML = newValue;
}
// Setup funcitons
function setUpRoll(row) {
    let input = row.querySelector('td:nth-child(2)>input');
    let base = input.value;

    if(base == '' ) return;

    let dice = rollDice()
    let mod = calcMod(dice);
    let total = calcTotal(base, mod);

    fillD20(row,dice);
    fillMod(row, mod);
    fillTotal(row, total);
}
function setupAll() {
    let allRows = document.querySelectorAll('.entryRow');
    for ( const tr of allRows ){
        setUpRoll(tr);
    }
}