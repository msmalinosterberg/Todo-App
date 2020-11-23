
function loadTodos() {
// hämta alla todos från LS 
// Visa alla todos 
    renderTodos(); 
}

function renderTodos() {
    const todoContainer = document.getElementById('todo-container')
    todoContainer.innerHTML = ""; 

    for(const todo of todoState) {
        const paragraph = document.createElement('p'); 
        paragraph.innerHTML = todo.title; 
        paragraph.addEventListener('click', function(){
            // tar bort en todo när man klickar på todon 
            const index = todoState.indexOf(todo); 
            todoState.splice(index, 1); 
            renderTodos(); 

            console.log(todoState); 
        })
        todoContainer.append(paragraph); 
    }
}