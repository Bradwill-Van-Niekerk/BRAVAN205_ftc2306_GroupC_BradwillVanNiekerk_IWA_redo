const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const sarahOwed = parseFloat(sarahBalance * -1).toFixed(2)//Math.abs(sarahBalance)
const leoOwed = parseFloat(leoBalance * -1).toFixed(2)
const owed = "R"+(parseFloat(sarahOwed)+ parseFloat(leoOwed)).toFixed(2);
const leo = `${leoName} ${leoSurname.trim()} (Owed R${leoOwed})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed R${sarahOwed})`
const total = `Total amount owed: `
const result = leo +"\n"+ sarah + "\n"+"\n" + divider +"\n"+ total + owed.slice(0, 3) +" " +owed.slice(3)+"\n"+ divider

console.log(result)
