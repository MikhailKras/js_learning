// first example

let a // global var
let b

function myFn() {
    let b // local var
    a = true
    b = 10
    console.log(b) // 10
}

myFn()

console.log(a) // true
console.log(b) // undefined

// second example

const c = 5

function myFnTwo() {
    function innerFn() {
        console.log(c) // 5
    }
    innerFn()
}

myFnTwo()

