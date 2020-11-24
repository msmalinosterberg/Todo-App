window.addEventListener('load', start);
function start(){
    loadTodos();
    main();
}

function main() {
  document.getElementById('todoBtn').addEventListener('click', addMovie);
}

let movies = [];

const addMovie = (ev)=>{
    ev.preventDefault();
    let movie = {
        title: document.getElementById('title').value,
        date: document.getElementById('date').value
    }
    movies.push(movie);
    document.querySelector('form').reset();
    renderTodos();
}

function loadTodos() {
    // hämta alla todos från LS 
        renderTodos(); 
    }
    
    
function renderTodos() {
    const todoContainer = document.getElementById('list-content')
    todoContainer.innerHTML = ""; 

    for(const todo of movies) {
        const listItem = document.createElement('li'); 
        listItem.innerHTML = todo.title;

        listItem.addEventListener('click', function(){
            // tar bort en todo när man klickar på todon 
            const index = movies.indexOf(todo); 
            movies.splice(index, 1); 
            renderTodos(); 
        })
        todoContainer.append(listItem); 
    }
}

