const post = {
    title: 'My post',
    likesQty: 5
}

postStringified = JSON.stringify(post)
console.log(postStringified)

postJSON = JSON.parse(postStringified)
console.log(postJSON)
