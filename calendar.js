function updateCalenderWithTodoInfo() {
    const times = document.querySelectorAll('time');
    console.log(times);
    console.log(todos);

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
                numberOfTodos.textContent = count + "Todos";
                time.appendChild(numberOfTodos);
            }
        }
        else if (time.querySelector('p')) {
            time.querySelector('p').remove();
            updateCalenderWithTodoInfo();
        }
    }
}