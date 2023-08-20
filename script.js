document.addEventListener('DOMContentLoaded', function () {
  const animatedSection = document.querySelector('.animated-section');
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  mobileMenu.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  window.addEventListener('scroll', function () {
    const sectionPos = animatedSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPos < windowHeight) {
      animatedSection.classList.add('visible');
    }
  });

  document.querySelectorAll('.quadrant').forEach(quadrant => {
    const imageContainer = quadrant.querySelector('.image-container');
    const button = quadrant.querySelector('.btn');

    button.addEventListener('mouseover', () => {
      imageContainer.style.filter = 'grayscale(0%)';
    });

    button.addEventListener('mouseout', () => {
      imageContainer.style.filter = 'grayscale(100%)';
    });
  });

  function updateCalendar() {
    const date = new Date(currentYear, currentMonth);
    document.getElementById('monthYear').textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);

    // Clear existing calendar
    const tbody = document.querySelector('.calendar tbody');
    tbody.innerHTML = '';

    // Generate new calendar
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let tr = document.createElement('tr');

    // Padding days
    for (let i = 0; i < firstDay; i++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    }

    // Fill dates
    for (let i = 1; i <= lastDate; i++) {
      if (tr.children.length === 7) {
        tbody.appendChild(tr);
        tr = document.createElement('tr');
      }

      let td = document.createElement('td');

      if (i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
        let span = document.createElement('span');
        span.className = 'calendar__today circle';
        span.textContent = 'Thursday';
        span.style.color = "#ffb0f3"; // Highlight with the requested color
        td.appendChild(span);
      } else {
        td.textContent = 'Thursday';
      }

      tr.appendChild(td);
    }

    // Append remaining row
    tbody.appendChild(tr);
  }

  function prevMonth() {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    }
    updateCalendar();
  }

  function nextMonth() {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
    updateCalendar();
  }

  // Initial load
  updateCalendar();

  // Navigation buttons
  document.getElementById('prevMonth').addEventListener('click', prevMonth);
  document.getElementById('nextMonth').addEventListener('click', nextMonth);
});
