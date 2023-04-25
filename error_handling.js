const fnWithError = () => {
    throw new Error ('Some error')
}


try {
    // some code
    fnWithError()
} catch (error) {
    // if error in some code
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')
