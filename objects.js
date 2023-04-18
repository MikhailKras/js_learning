const myObject = {
    name: 'Frank',
    age: 45,
    online: true,
    job: 'truck driver'
}

const print = (obj) => {
    console.log(obj)
}

print(myObject)

myObject.online = 'offline'

myObject['age'] = 52

myObject['height'] = 192

const countryPropertyName = 'country'
myObject[countryPropertyName] = 'Canada' //only with brackets

print(myObject)

const countryInfo = {
    continent: 'NA',
    population: 30
}

myObject['countryInfo'] = countryInfo
print(myObject.countryInfo.continent)


const name = 'John'
const surname = 'Farson'

const abbreviatedNote = {
    name,
    surname,
}


print(abbreviatedNote)

//methods
const myCity = {
    city: 'London',
    cityGreeting: function () {
        console.log('Greetings!')
    },
    abbMethod() {
        console.log('abbreviated Greetings!') //abbreviated note for object method
    }
}

myCity.cityGreeting() //call method
myCity.abbMethod()


