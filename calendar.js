function updateCalenderWithTodoInfo() {
    const times = document.querySelectorAll('time');

    console.log(todos);
    for (const time of times) {
        
        console.log(time.dateTime);
        let count = 0;

          
        if (time.dateTime === todos.date) {
        //    loop (?)
   
     }
    }


        
        if (count < 0) {
            time.append(" - " + count);
            break;
        }
    }

    
    // Loopa igenom times (loop)
        // Kolla om datumet sparat i time matchar något datum i todos listan (loop)
        // Om det matchar då lägg till en siffra på time elementet.

// 

//const span = document.createElement('span');
//span.innerHTML = 2;

