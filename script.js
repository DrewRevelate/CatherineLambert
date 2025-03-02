// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', function() {
    nav.classList.toggle('open');
    
    // Animate hamburger to X
    const bars = this.querySelectorAll('div');
    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});

// FAQ accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Toggle active class
        this.classList.toggle('active');
        
        // Toggle answer visibility
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
    });
});

// Form submission handling - wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the data to your server or email service
            // For now, we'll just show a success message
            console.log('Form submitted with data:', formObject);
            
            // Show success message
            this.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <h3 style="color: var(--highlight);">Thank You!</h3>
                    <p>Your message has been received. I'll get back to you shortly.</p>
                </div>
            `;
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            nav.classList.remove('open');
            
            // Calculate offset with fixed header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to service cards when they come into view
document.addEventListener('DOMContentLoaded', () => {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observeElements = (elements, className) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                    }
                });
            }, { threshold: 0.3 });

            elements.forEach(element => {
                observer.observe(element);
            });
        };

        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length) {
            observeElements(serviceCards, 'animate-in');
        }
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('.service-card').forEach(card => {
            card.classList.add('animate-in');
        });
    }
});
