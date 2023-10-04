document.addEventListener('DOMContentLoaded', function () {
  const animatedSection = document.querySelector('.animated-section');
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  function createCalendar() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    let calendarBody = '';
    let firstDay = new Date(year, month, 1);
    for (let i = 0; i < firstDay.getDay(); i++) {
      calendarBody += '<td></td>';
    }

    for (let i = 1; i <= 31; i++) {
      const dayDate = new Date(year, month, i);
      if (dayDate.getMonth() !== month) break;
      if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        calendarBody += `<td id="day-${year}-${month + 1}-${i}" class="current-day">${i}</td>`;
      } else {
        calendarBody += `<td id="day-${year}-${month + 1}-${i}">${i}</td>`;
      }
      if (dayDate.getDay() === 6) {
        calendarBody += '</tr><tr>';
      }
    }

    document.querySelector('.calendar tbody').innerHTML += `<tr>${calendarBody}</tr>`;
  }
  
  createCalendar();
  
  var today = new Date().getDate();
  var calendarCells = document.querySelectorAll(".calendar td");
  calendarCells.forEach(function (cell) {
    if (parseInt(cell.innerText) === today) {
      cell.classList.add("today");
    }
  });
});

function navigateTo(page) {
    switch (page) {
        case "home":
            window.location.href = "/";
            break;
        case "about":
            window.location.href = "/about/";
            break;
        case "contact":
            window.location.href = "/contact/";
            break;
        case "join-us":
            window.location.href = "/join/";
            break;
        case "store":
            window.location.href = "/store/";
            break;
        case "publications":
            window.location.href = "/publications/";
            break;
        default:
            break;
    }
}

function toggleMenuLinks(isContainerClick = false) {
    var menuLinks = document.getElementById('menu-links');
    var toggle = document.getElementById('menu-toggle');
    
    if (isContainerClick) {
        toggle.checked = !toggle.checked;
    }

    if (toggle.checked) {
        menuLinks.style.display = 'block';
        menuLinks.style.pointerEvents = 'auto';
        setTimeout(function() {
            menuLinks.style.opacity = '1';
        }, 0);
    } else {
        menuLinks.style.opacity = '0';
        menuLinks.style.pointerEvents = 'none';
        setTimeout(function() {
            menuLinks.style.display = 'none';
        }, 500);
    }
}

function toggleMenuByContainerClick(event) {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width <= 768 && event.target.id === "main-container") {
        toggleMenuLinks(true);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("main-container").addEventListener("click", toggleMenuByContainerClick);
    document.getElementById("main-container").addEventListener("touchstart", toggleMenuByContainerClick);
});

function updateClock() {
    var now = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    milliseconds = milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;
    document.getElementById('date').innerText = "Thursday, " + month + " " + now.getDate() + ", " + year;
    document.getElementById('time').innerText = hours + ":" + minutes + ':' + seconds + '.' + milliseconds + ' ' + ampm;
}
setInterval(updateClock, 1); // Update every millisecond

function filter(tag) {
    // Get all publications
    const publications = document.querySelectorAll('.publication');
    
    // Hide all publications
    publications.forEach(pub => pub.style.display = 'none');

    // Show publications with the selected tag
    publications.forEach(pub => {
        const tags = pub.getAttribute('data-tags');
        if(tags.includes(tag) || tag === 'all') {
            pub.style.display = 'flex';
        }
    });
}

function openSlideMenu() {
    const menu = document.getElementById("slide-out-menu");
    if (menu.style.left === "-100%") {
        menu.style.left = "0";
    } else {
        menu.style.left = "-100%";
    }
}
