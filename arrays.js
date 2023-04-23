const myArray = [1, true, 'foo']

// another note

const myArray2 = new Array(1, true, 'foo')

console.log(myArray.length)
console.log(myArray.values === myArray2.values)
console.log(myArray[2]) // 'foo'

// length changing (bad practice)

myArray2.length = 7
console.log(myArray2) // [ 1, true, 'foo', <4 empty items> ]
myArray2.length = 3

// append new element in end (bad practice)

myArray[3] = 'new elem'
console.log(myArray) // [ 1, true, 'foo', 'new elem' ]
console.log(myArray.length) // 4

// array methods

// append new element in end

myArray.push('push new elem')
console.log(myArray) // [ 1, true, 'foo', 'new elem', 'push new elem' ]

// append new element in start

myArray.unshift('unshift elem') // [ 'unshift elem', 1, true, 'foo', 'new elem', 'push new elem' ]
console.log(myArray)

// delete first element
const firstRemovedElem = myArray.shift()
console.log(myArray) // [ 1, true, 'foo', 'new elem', 'push new elem' ]

// forEach method

const arr = [1, 2, 3]
arr.forEach(el => console.log(el * 2))
// 2
// 4
// 6
console.log(arr) // [ 1, 2, 3 ]

// map method

const newArr = arr.map(el => el * 3)
console.log(newArr)
console.log(arr)
