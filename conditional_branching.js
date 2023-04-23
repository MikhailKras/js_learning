let colour = 'red'

if (colour === 'red') {
    colour = 'green'
}

console.log(colour) // green 

// if with '!' (not) in condition

const car = {
    size: 'big'
}

if (!car.cost) {
    console.log('There is no cost')
} else {
    console.log(car.cost)
}


// if else if else

let val = 10

if (val > 10) {
    val += 10
} else if (val === 10) {
    val -= 10
} else {
    val += 20
}

// switch

const myName = 'Oliver'

switch (myName) {
    case 'Frank':
        console.log('My name is Frank')
        break
    case 'John':
        console.log('Name of my friend is John')
        break
    default:
        console.log(`Name of unknown man is ${myName}`)
}

// ternary operator

const value = true

value // condition
    ? console.log('True')
    : console.log('False')

let num = 10

console.log(num < 0 ? 'Negative': 'Positive')

num = -10

const res = num < 0 ? 'Negative': 'Positive'

console.log(res)