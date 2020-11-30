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
            document.getElementById('numbersOfTodos').innerHTML = count++;
        }
        // console.log(time.dateTime);
   
    }
}

// function renderCalendar() {
//     //javascript-kalender 
// }

    
    // Loopa igenom times (loop)
        // Kolla om datumet sparat i time matchar något datum i todos listan (loop)
        // Om det matchar då lägg till en siffra på time elementet.

// 

//const span = document.createElement('span');
//span.innerHTML = 2;

