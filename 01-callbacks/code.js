

const makeUpperCase = (argument) => {
    return new Promise(function(resolve,reject){
        if(typeof argument==='string'){
            resolve(argument.toUpperCase())
        }
        else{
            reject(new Error('❌ This is not a string'))
        }
    })
}


makeUpperCase('js is cool')
.then(function(upperCasedString){
    console.log(`Upper cased string is here : ${upperCasedString}`)
}) 
.catch(function(error){
    console.log(`No! it doesnt work  : ${error.message}`)
})