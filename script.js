// Number of bubbles you want to create
const numberOfBubbles = 10;

// Create bubble elements and append to the body
for (let i = 0; i < numberOfBubbles; i++) {
    createBubble();
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);
    const size = Math.floor(Math.random() * 120) + 80;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
    bubble.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;

    const directionX = Math.random() * 2 - 1;
    const directionY = Math.random() * 2 - 1;
    
    const moveBubble = () => {
        const x = parseFloat(bubble.style.left);
        const y = parseFloat(bubble.style.top);
        const newX = x + directionX + scrollSpeed * 0.1;
        const newY = y + directionY + scrollSpeed * 0.1;
        
        bubble.style.left = `${newX}px`;
        bubble.style.top = `${newY}px`;

        // If the bubble moves off-screen, remove and recreate it
        if (newX < 0 || newY < 0 || newX > window.innerWidth || newY > window.innerHeight) {
            bubble.remove();
            createBubble();
        }

        requestAnimationFrame(moveBubble);
    };

    moveBubble();
}

let scrollSpeed = 0;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    scrollSpeed = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    setTimeout(() => {
        scrollSpeed *= 0.9;
    }, 100);
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
