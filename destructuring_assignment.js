// object destructuring

const car = {
    colour: 'red',
    cost: 100,
    size: 'big'
}

const { cost } = car
const { size, colour } = car

console.log(`${colour}, ${cost}, ${size}`) // red, 100, big

// array destructuring

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(`${fruitOne}, ${fruitTwo}`) // Apple, Banana

// destructuring in functions

const carOne = {
    colour: 'green',
    cost: 2000,
    size: 'medium'
}

const carInfo = ({ cost, colour }) => {
    return `This is ${colour} car, cost = ${cost}`
}

console.log(carInfo(car)) // This is green car, cost = 2000
