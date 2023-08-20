document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop - windowHeight <= 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

function updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    let currentSection = null;

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 100) { // 100px offset to handle the sticky header
            currentSection = index;
        }
    });

    navLinks.forEach((link, index) => {
        link.classList.remove('active');

        if (index === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveSection);

function updateGradient() {
    const gradientAngle = Math.random() * 360; // Random angle for the gradient
    const gradientPosition = Math.random() * 100; // Random position for color stops

    const gradientStyle = `linear-gradient(${gradientAngle}deg, #4a0072 ${gradientPosition}%, #1b1b1b ${100 - gradientPosition}%)`;

    document.querySelectorAll('.full-height').forEach(section => {
        section.style.background = gradientStyle;
    });
}

// Update gradient every 5 seconds
setInterval(updateGradient, 5000);
