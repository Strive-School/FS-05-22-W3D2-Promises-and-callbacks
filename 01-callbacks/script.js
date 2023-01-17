
function renderTodos(json){
    // 
    console.log(json)
}

function renderErrorMessage(error){
    //
    console.log(error)
}

 

function fetchTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
        console.log("we got something")
        return response.json()
    })
    .then(function(json){
        console.log("here is the json")
        // render function should be called right here
        renderTodos(json)
    })
    .catch(function(error){
        console.log('oh no error')
        // rendering the error message should be here
        renderErrorMessage(error)
    })
}

window.onload=function(){
    console.log('this runs when page is loaded')
    fetchTodos()
}