// example

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const myFirstComment = new Comment('Hello World!')

console.log(myFirstComment) // Comment { text: 'Hello World!', votesQty: 0 }

myFirstComment.upvote()
console.log(myFirstComment.votesQty) // 1

console.log(myFirstComment instanceof Comment) // true
console.log(myFirstComment instanceof Object) // true

console.log(myFirstComment.hasOwnProperty('text')) // true
console.log(myFirstComment.hasOwnProperty('votesQty')) // true
console.log(myFirstComment.hasOwnProperty('upvote')) // false

// static methods

class Car {
    constructor(colour, size) {
        this.colour = colour
        this.size = size
        this.ownersQty = 1
    }

    sell() {
        this.ownersQty += 1
    }

    static getRandomCost(minCost, maxCost) {
        return Math.round(Math.random() * (maxCost - minCost) + minCost)
    }
}
console.log(Car.getRandomCost(2000, 3000))

// extending classes

class NumArray extends Array { // class Array - parrent for class NumArray
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const arr = new NumArray(1, 2, 3)
console.log(arr.sum())
