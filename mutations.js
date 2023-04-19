//primitives types
const a = 10
let b = a

b = 30

console.log(a) // 10
console.log(b) // 30

//objects (reference type)
const person = {
    name: 'Bob',
    age: 21
}

person.age = 22
person.isAdult = true

console.log(person.age) // 22
console.log(person.isAdult) // true

//copy mutations
const personMan = {
    name: 'Bob',
    age: 25
}

const personMan2 = personMan // copy by reference
 
personMan2.age = 26
personMan2.isAdult = true

console.log(personMan.age) // 26
console.log(personMan.isAdult) // true

// how to avoid mutations
const country = {
    name: 'UK',
    popular: true
}

const country2 = Object.assign({}, country)

country2.popular = false

console.log(country2.popular) //false
console.log(country.popular) //true


// how to avoid mutations #2

const car = {
    colour: 'red',
    cost: 100
}

const car2 = {...car} // "..." - operator for properties of object spliting  

car2.colour = 'blue'

console.log(car2.colour)
console.log(car.colour)
