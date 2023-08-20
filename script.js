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

// Code for creating floating bubbles
const numberOfBubbles = 50;

for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);
    positionBubble(bubble);
    animateBubble(bubble);
}

const bubbles = document.querySelectorAll('.bubble');
bubbles.forEach((bubble) => {
    const size = Math.floor(Math.random() * 60) + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.borderRadius = '50%';
    bubble.style.position = 'absolute';
    bubble.style.background = '#4a0072';
    bubble.style.opacity = Math.random();
});

function positionBubble(bubble) {
    bubble.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
    bubble.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
}

function animateBubble(bubble) {
    setInterval(() => {
        const x = parseInt(bubble.style.left, 10);
        const y = parseInt(bubble.style.top, 10);
        const newX = x + (Math.random() * 10 - 5);
        const newY = y + (Math.random() * 10 - 5);

        bubble.style.left = `${(newX + window.innerWidth) % window.innerWidth}px`;
        bubble.style.top = `${(newY + window.innerHeight) % window.innerHeight}px`;
    }, 100);
}
