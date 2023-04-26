fetch('https://jsonplaceholder.typicode.com/todos/1') // return the promise
  .then(response => response.json()) // also return the promise
  .then(json => console.log(json))
  .catch(error => console.error(error))

// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
