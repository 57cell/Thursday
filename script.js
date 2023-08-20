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

        if (sectionTop <= 100) {
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

// Number of bubbles you want to create
const numberOfBubbles = 10;

// Create bubble elements and append to the body
for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);
    positionBubble(bubble);
    animateBubble(bubble);
}

// Apply styling to the bubbles
const bubbles = document.querySelectorAll('.bubble');
bubbles.forEach((bubble) => {
    const size = Math.floor(Math.random() * 120) + 80;
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

let scrollSpeed = 0;

function animateBubble(bubble) {
    const animate = () => {
        const x = parseFloat(bubble.style.left);
        const y = parseFloat(bubble.style.top);
        const newX = x + (Math.random() * 2 - 1 + scrollSpeed * 0.1);
        const newY = y + (Math.random() * 2 - 1 + scrollSpeed * 0.1);

        bubble.style.left = `${(newX + window.innerWidth) % window.innerWidth}px`;
        bubble.style.top = `${(newY + window.innerHeight) % window.innerHeight}px`;

        requestAnimationFrame(animate);
    };

    animate();
}

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    scrollSpeed = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    setTimeout(() => {
        scrollSpeed *= 0.9;
    }, 100);
});
