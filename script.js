document.addEventListener('DOMContentLoaded', function () {
  const animatedSection = document.querySelector('.animated-section');
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

function createCalendar() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    
    // Get the current month's name
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
    
    document.getElementById('monthYear').innerText = `${monthName} ${year}`;
    
    // Start building the calendar
    let calendarBody = '';
    
    // Get the first day of the month
    let firstDay = new Date(year, month, 1);
    
    // Fill in the blank spaces before the first day
    for (let i = 0; i < firstDay.getDay(); i++) {
        calendarBody += '<td></td>';
    }
    
    // Fill in the days of the month
    for (let i = 1; i <= 31; i++) {
        const dayDate = new Date(year, month, i);
        if (dayDate.getMonth() !== month) break; // Handle months with less than 31 days
        
        // Check if today
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            calendarBody += `<td><span class="calendar__today circle">${i}</span></td>`;
        } else {
            calendarBody += `<td>${i}</td>`;
        }
        
        // Check if the week is complete
        if (dayDate.getDay() === 6) {
            calendarBody += '</tr><tr>';
        }
    }
    
    // Add the generated body to the calendar
    document.querySelector('.calendar tbody').innerHTML += `<tr>${calendarBody}</tr>`;
}

// Execute the function to create the calendar
createCalendar();
});

// Get the current date
var today = now.getDate();

// Find the table cell that corresponds to today's date
var calendarCells = document.querySelectorAll(".calendar td");
calendarCells.forEach(function(cell) {
    if (parseInt(cell.innerText) === today) {
        cell.classList.add("today");
    }
});
