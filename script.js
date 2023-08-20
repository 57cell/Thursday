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
const numberOfBubbles = 10;
// Create bubble elements and append to the body
for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);
    positionBubble(bubble); // Function to set initial position
    animateBubble(bubble); // Function to animate bubble
}

// Apply styling to the bubbles
const bubbles = document.querySelectorAll('.bubble');
bubbles.forEach((bubble) => {
    const size = Math.floor(Math.random() * 120) + 80; // Larger and more variable sizes
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.borderRadius = '50%';
    bubble.style.position = 'absolute';
    bubble.style.background = '#4a0072'; // Deep purple color
    bubble.style.opacity = Math.random(); // Random opacity for more depth
});

// Function to set a random initial position for a bubble
function positionBubble(bubble) {
    bubble.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
    bubble.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
}

let scrollSpeed = 0; // Variable to hold scroll speed

// Function to animate a bubble
function animateBubble(bubble) {
    // Use requestAnimationFrame for smooth animation
    const animate = () => {
        const x = parseFloat(bubble.style.left);
        const y = parseFloat(bubble.style.top);
        const newX = x + (Math.random() * 2 - 1 + scrollSpeed * 0.1);
        const newY = y + (Math.random() * 2 - 1 + scrollSpeed * 0.1);

        // Wrap around the screen if the bubble goes out of bounds
        bubble.style.left = `${(newX + window.innerWidth) % window.innerWidth}px`;
        bubble.style.top = `${(newY + window.innerHeight) % window.innerHeight}px`;

        requestAnimationFrame(animate);
    };

    animate();
}

// Event listener to detect scrolling speed
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    scrollSpeed = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    // Gradually reduce scrollSpeed back to 0 when not scrolling
    setTimeout(() => {
        scrollSpeed *= 0.9;
    }, 100);
});
