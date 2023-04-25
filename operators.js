let a, b // "," - operator

a = 1

// unary operators
a++
+a //convert string to number
typeof a
new Object()

// binary operators
a = 5
a + b
a += 5
a === b
a && b

// false values
false
0
''
undefined
null

// logic operators

!10 // false
!0 // true
!'abc' // false
!'' // true

// '!!' - convert value to Boolean

!!10 // true
!!0 // false
!!'abc' // true
!!'' // false

// "&&" - and
// exp1 && exp2, if exp1 is false, ignore exp2, return exp1 value

// "||" - or
// exp1 && exp2, if exp1 is true, ignore exp2, return exp1 value

// "..." - unpacking for properties of object

// example with "..."
const countryInfo = {
    name: 'USA',
    popular: true
}

const carInfo = {
    colour: 'red'
}

const countryCar = { // merge
    ...carInfo,
    ...countryInfo
}

console.table(countryCar)
