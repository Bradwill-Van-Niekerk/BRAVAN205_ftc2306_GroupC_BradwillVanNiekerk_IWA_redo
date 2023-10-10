// script.js
function multiply() { return this.internal.a * this.internal.b }

function add () { return this.internal.a + this.internal.b }

function internal()  { console.log(this.add() * this.internal.c)}

// function multiply() { return this.internal.a * this.internal.b }

// let multiply = (a, b) => { a - b }

// function internal() {
// 	let added = add.call (this, example1.internal.a, example1.internal.b)
// 	multiply.call(this, example1.internal.a, example1.internal.b)
// 	return this
// }
// console.log(added)
// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()