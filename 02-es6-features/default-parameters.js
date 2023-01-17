// you should always put optional arguments to the end of arguments
function sayHello(greeting,name='user'){
    console.log(`${greeting} ${name}`)
}

//sayHello('hi','Sam')


function square(base,n=2){
    return Math.pow(base,n)
}

// this should return 8
console.log(square(2,3))

// this should return 4 as default n value is 2
console.log(square(2))

