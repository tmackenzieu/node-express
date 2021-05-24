// Utilizando destructuring: https://wesbos.com/destructuring-objects
const {frutas, dinero} = require('./frutas')
const cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hola Amiga!!",
	e : "oO",
	T : "U "
}));

frutas.forEach(item => {
    console.log(item)
})

console.log("dinero actual : ", dinero)