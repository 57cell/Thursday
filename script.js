document.addEventListener('DOMContentLoaded', function () {
    const animatedSection = document.querySelector('.animated-section');
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
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
    // Removed extra closing brace and parenthesis here

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
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentDate = date.getDate();

  document.getElementById('monthYear').textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);

  // Clear existing calendar
  const rows = document.querySelectorAll('.calendar-row');
  rows.forEach(row => row.remove());

  // Generate new calendar
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  let tr = document.createElement('tr');
  tr.className = 'calendar-row';

  // Padding days
  for (let i = 0; i < firstDay; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  // Fill dates
  for (let i = 1; i <= lastDate; i++) {
    if (tr.children.length === 7) {
      document.querySelector('.calendar tbody').appendChild(tr);
      tr = document.createElement('tr');
      tr.className = 'calendar-row';
    }

    let td = document.createElement('td');

    if (i === currentDate) {
      let span = document.createElement('span');
      span.className = 'calendar__today';
      span.textContent = 'Thursday';
      td.appendChild(span);
    } else {
      td.textContent = 'Thursday';
    }

    tr.appendChild(td);
  }

  // Append remaining row
  document.querySelector('.calendar tbody').appendChild(tr);
}

// Initial load
updateCalendar();

// Navigation buttons
document.getElementById('prevMonth').addEventListener('click', () => /* Previous month code */);
document.getElementById('nextMonth').addEventListener('click', () => /* Next month code */);

