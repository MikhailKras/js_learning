// first example

function sum(a, b) {
    const c = a + b
    console.log(c) // return undefined
}

sum(1, 2) //3
sum(10, 20) //30

// function is object

// second example

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c // result
}

// the shortest func

function shortestFunc() {}
shortestFunc() // undefined


// pass by reference (bad practices)

const carOne = {
    colour: 'green',
    cost: 200
}

function increaseCarCost(car) {
    car.cost += 1
    return car
}

increaseCarCost(carOne)
console.log(carOne.cost) // 201

// pass by reference (best practices)

function increaseCarCostCopy(car) {
    const updatedCar = Object.assign({}, car)
    updatedCar.cost += 1
    return updatedCar
}

const updatedCarOne = increaseCarCostCopy(carOne)
console.log(carOne.cost) // 201
console.log(updatedCarOne.cost) // 202

// callback functions

function printName() { // callback function
    console.log('Jack')
}

setTimeout(printName, 10000) // after 10000 ms callback function executed

// function with args with default values

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Jake'
}

console.log(newPost(firstPost))
