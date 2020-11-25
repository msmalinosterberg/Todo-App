window.addEventListener('load', start);
function start(){
    loadTodos();
    main();
    startClock();
}

function main() {
  document.getElementById('todoBtn').addEventListener('click', addTodo);
}

let todos = [];

const addTodo = (ev)=>{
    ev.preventDefault();
    let todo = {
        title: document.getElementById('title').value,
        date: document.getElementById('date').value
    }
    todos.push(todo);
    document.querySelector('form').reset();
    renderTodos();
    console.log(todo);
}

function loadTodos() {
    // hämta alla todos från LS 
        renderTodos(); 
    }
    
    
function renderTodos() {
    const todoContainer = document.getElementById('list-content')
    todoContainer.innerHTML = ""; 

    for(const todoItem of todos) {
        const listItem = document.createElement('li'); 
        listItem.innerHTML = todoItem.title;

        listItem.addEventListener('click', function(){
            // tar bort en todo när man klickar på todon 
            const index = todos.indexOf(todoItem); 
            todos.splice(index, 1); 
            renderTodos(); 
        })
        todoContainer.append(listItem); 
    }
}

