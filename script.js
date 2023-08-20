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


    function createCalendar() {
    var now = new Date();
    var firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    var lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    var htmlContent = '<table class="calendar-table">';
    htmlContent += '<tr><th>Thursday</th><th>Thursday</th><th>Thursday</th><th>Thursday</th><th>Thursday</th><th>Thursday</th><th>Thursday</th></tr>';

    for (var i = 0; i < 6; i++) {
        htmlContent += '<tr>';
        for (var j = 0; j < 7; j++) {
            var currentDay = new Date(firstDayOfMonth);
            currentDay.setDate(currentDay.getDate() + (i * 7 + j) - firstDayOfMonth.getDay());
            if (currentDay.getMonth() === now.getMonth()) {
                if (currentDay.getDate() === now.getDate()) {
                    htmlContent += '<td class="current-day">' + currentDay.getDate() + '</td>';
                } else {
                    htmlContent += '<td>' + currentDay.getDate() + '</td>';
                }
            } else {
                htmlContent += '<td class="other-month"></td>';
            }
        }
        htmlContent += '</tr>';
    }
    htmlContent += '</table>';
    document.getElementById('calendar').innerHTML = htmlContent;
}

createCalendar();
