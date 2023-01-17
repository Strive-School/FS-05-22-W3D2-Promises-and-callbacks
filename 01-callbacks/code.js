

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


const result = makeUpperCase('js is cool')


 

 