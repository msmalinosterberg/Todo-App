// let count = 0
let numberOfTodos = document.createElement("p");
let renderNumberOfTodos = document.createTextNode(count);
numberOfTodos.appendChild(renderNumberOfTodos);

let element = document.getElementById('time-div');
element.appendChild(numberOfTodos);



function updateCalenderWithTodoInfo() {
    const times = document.querySelectorAll('time');
    // console.log(times);
    // console.log(todos);

    for (let time of times) {
        let count = 0;
        for (let todo of todos) {
            console.log(todo.date + ' - ' + time.dateTime);
            if (todo.date === time.dateTime) {
                console.log('todo found for date!');
                count++;
            }
        }
        if (count > 0) {
            if (time.querySelector('p')) {
                time.querySelector('p').textContent = count + "Todos";
            }

            else {
                let numberOfTodos = document.createElement('p');
                p.textContent = count + "Todos";
                time.appendChild(numberOfTodos);
            }
        }
    }
}


function getNumberOfDays(year, month) {
    let numDays = new Date(year, month + 1, 0).getDate()
    return numDays;
}
