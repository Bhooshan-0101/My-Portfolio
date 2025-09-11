// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Active navigation link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {  // Fixed template literal
            link.classList.add('active');
        }
    });
});

// Project Filter - Working Version
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.classList.add('show');
            } else if (card.classList.contains(filter)) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    });
});

// Initialize - show all projects by default
document.addEventListener('DOMContentLoaded', () => {
    projectCards.forEach(card => {
        card.classList.add('show');
    });
});

// Typing animation
const typedText = document.querySelector('.typed-text');
if (typedText) {
    const textArray = [
        'Full-Stack Developer', 
        'Data Analyst', 
        'Problem Solver', 
        'React Developer',
        'Python Developer',
        'Tech Enthusiast'
    ];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    setTimeout(type, newTextDelay + 250);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {  // Fixed: Added missing parenthesis
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image error handling
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x400/00d4ff/ffffff?text=Profile';
        });
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skills-category, .cert-card, .achievement-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
});

// Enhanced responsive behavior
function handleResize() {
    const viewport = window.innerWidth;
    
    // Close mobile menu on resize
    if (viewport > 768) {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    handleResize();
});

// Fixed console.log - removed markdown formatting
console.log(`
🚀 Portfolio Website Loaded Successfully!
👨‍💻 Developed by: Bhooshan A
📧 Contact: bhooshan0114@gmail.com
🔗 LinkedIn: https://linkedin.com/in/bhooshan-a-b718b3302/
⭐ GitHub: https://github.com/bhooshan-0101

✨ Features:
🗂️ Working project filtering
📸 Static profile image
📱 Fully responsive design
💫 Smooth animations
🎯 Clean dark theme (fixed)
`);
