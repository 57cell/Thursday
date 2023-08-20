document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const animatedSection = document.querySelector('.animated-section');

    let darkMode = false;

    darkModeToggle.addEventListener('click', function () {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    window.addEventListener('scroll', function () {
        const sectionPos = animatedSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionPos < windowHeight) {
            animatedSection.classList.add('visible');
        }
    });
});

