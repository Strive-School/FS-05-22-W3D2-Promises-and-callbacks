function todoList(todos) {
  let todosAsHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    todosAsHTML += `<li class="list-group-item">
    <span style="margin-right:10px;"> ${todo.completed ? "✅":"❌"} </span>
    ${todo.title}</li>`;
  }
  return `<ul class="list-group">
   ${todosAsHTML}
</ul>`;
}

function errorMessage(message){
    return `<div class="alert alert-danger" role="alert">
    <h4 class="alert-heading">Oh Bummer! ❌</h4>
    <p>Seems like your app is broken. Reason is ${message}</p>
    <hr>

  </div>`
}

function renderTodos(json) {
   const todoListAsHTML = todoList(json)
   const container = document.querySelector('.container')
   container.innerHTML = todoListAsHTML;
}

function renderErrorMessage(error) {
   const errorMessageComponent = errorMessage(error.message)
   const container = document.querySelector('.container')
   container.innerHTML = errorMessageComponent; 
}

function setLoading(isLoading) {
  const container = document.querySelector(".container");
  if (isLoading) {
    const spinner = `<div class="centered-spinner">
    <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  </div>`;
    container.innerHTML = spinner;
  } else {
    const spinner = document.querySelector(".centered-spinner");
    if (spinner) {
      container.removeChild(spinner);
    }
  }
}

function fetchTodos() {
  // loading state
  setLoading(true);
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      console.log("we got something");
      return response.json();
    })
    .then(function (json) {
      console.log("here is the json");
      // render function should be called right here
      renderTodos(json);
    })
    .catch(function (error) {
      console.log("oh no error");
      // rendering the error message should be here
      renderErrorMessage(error);
    })
    .finally(function(){
        setLoading(false);
    })
}

window.onload = function () {
  console.log("this runs when page is loaded");
  fetchTodos();
};
