// for

for (let i = 0; i < 5; i++){
    console.log(i)
}

// forEach method for array

const arr = [147, 9214, 322]

arr.forEach((num, i) => {
    console.log(`number: ${num} with index: ${i}`)
})

// while

let j = 0

while (j < 5) {
    console.log(j)
    j++
}

// do while

let k = 100

do {
    console.log(`k = ${k}`)
    k += 10
} while (k < 50)

// for in

const car = {
    colour: 'yellow',
    cost: 1500,
    size: 'small'
}

for (const key in car) {
    console.log(key, car[key])
}

// methods keys and values for objects

console.log(Object.keys(car)) // [ 'colour', 'cost', 'size' ]
console.log(Object.values(car)) // [ 'yellow', 1500, 'small' ]


// for of

for (const char of 'qwerty'){
    console.log(char)
}

console.log(char)
