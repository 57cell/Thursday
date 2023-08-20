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
