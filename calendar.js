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
            //Om span inte finns så lägg till span 
            if (time.querySelector('span')) {
                time.querySelector('span').textContent = count;
            } 

            else {
            let span = document.createElement('span');
            span.textContent = count;
            time.appendChild(span);
            }
        }
        else {
            time.querySelector('span').remove('span');        
        }

}
}

// time.innerHTML = "<span>" + times + count + "</span>";

// let span = document.createElement("span");
// let node = document.createTextNode(count);
// span.appendChild(node);
//if
//var element = document.getElementById('hej');
//        element.appendChild(span);


//document.querySelectorAll('span').innerHTML = "<span>" + count + "</span>";

// function renderCalendar() {
//     //javascript-kalender 
// }

    
    // Loopa igenom times (loop)
        // Kolla om datumet sparat i time matchar något datum i todos listan (loop)
        // Om det matchar då lägg till en siffra på time elementet.

// 

//const span = document.createElement('span');
//span.innerHTML = 2;

