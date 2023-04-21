// expression without name

const myFn = (a, b) => {
    let c
    a++
    c = a + b
    return c
}

console.log(myFn(1, 2)) // 4

// arrow function in call of another function

setTimeout(() => {
    console.log('Some msg')
}, 1000)

// abbreviated notes
const funcWithOnArg = a => {
    return a
}

const funcWithBodyWithOneExpression = (a, b) => a + b // return result without key word 'return'

