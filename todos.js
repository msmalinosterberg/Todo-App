

function loadTodos() {
// hämta alla todos från LS 
    renderTodos(); 
}


function renderTodos() {
    const todoContainer = document.getElementById('todo-container')
    todoContainer.innerHTML = ""; 

    for(const todo of todoState) {
        const listItem = document.createElement('li'); 
        listItem.innerHTML = todo.title; 
        

        listItem.addEventListener('click', function(){
            // tar bort en todo när man klickar på todon 
            const index = todoState.indexOf(todo); 
            todoState.splice(index, 1); 
            renderTodos(); 

            console.log(todoState); 
        })
        todoContainer.append(listItem); 
    }
}

