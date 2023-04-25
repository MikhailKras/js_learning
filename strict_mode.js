'use strict'

function myFn() {
    a = true // ReferenceError: a is not defined (if use strict)
    console.log(a)
}

myFn()

console.log(a)
