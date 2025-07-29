// Hamburger menu functionality
const burger = document.getElementById("hamburger");
const list = document.getElementById("navlist");

burger.addEventListener("click", () => {
    list.classList.toggle("navlist-active");
});

// Navbar links functionality
const navLinks = document.querySelectorAll('.navlinks');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Close mobile menu if open
        list.classList.remove('navlist-active');

        // Get the text content to determine scroll target
        const linkText = link.textContent.toLowerCase();
        let targetSection;

        switch (linkText) {
            case 'home':
                targetSection = document.querySelector('.main-container');
                break;
            case 'perfume':
                targetSection = document.querySelector('#perfume');
                break;
            case 'deodrant':
            case 'body spray':
            case 'attar':
                targetSection = document.querySelector('#services');
                break;
            default:
                targetSection = document.querySelector('.main-container');
        }

        // Smooth scroll to target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !list.contains(e.target)) {
        list.classList.remove('navlist-active');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
    }
});