const objectA = { //objectA - reference in memory, like 0x3151
    a:10,
    b: true
}

const copyOfA = objectA //same reference in memory

copyOfA.a = 20 //objectA.a -> 20

copyOfA.c = 'abc' //objectA.c -> 'abc'
