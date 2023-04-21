// function without name

const myFn = function(a, b) {
    let c
    a++
    c = a + b
    return c
}

console.log(myFn(5, 3)) // 9

// function expression in call of another function

setTimeout(function() {
    console.log('Some msg')
}, 1000)
