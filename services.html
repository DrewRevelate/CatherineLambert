/**
 * Main JavaScript
 * Catherine Lambert Therapy Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('site-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('site-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations using Intersection Observer
    if ('IntersectionObserver' in window) {
        // Fade in elements
        const fadeElements = document.querySelectorAll('.animate-on-scroll.fade-in');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, { threshold: 0.2 });
        
        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });
        
        // Fade up elements
        const fadeUpElements = document.querySelectorAll('.animate-on-scroll.fade-up');
        const fadeUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-up-visible');
                }
            });
        }, { threshold: 0.2 });
        
        fadeUpElements.forEach(element => {
            fadeUpObserver.observe(element);
        });
        
        // Fade from left
        const fadeLeftElements = document.querySelectorAll('.animate-on-scroll.fade-left');
        const fadeLeftObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-left-visible');
                }
            });
        }, { threshold: 0.2 });
        
        fadeLeftElements.forEach(element => {
            fadeLeftObserver.observe(element);
        });
        
        // Fade from right
        const fadeRightElements = document.querySelectorAll('.animate-on-scroll.fade-right');
        const fadeRightObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-right-visible');
                }
            });
        }, { threshold: 0.2 });
        
        fadeRightElements.forEach(element => {
            fadeRightObserver.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            element.classList.add('fade-in-visible', 'fade-up-visible', 'fade-left-visible', 'fade-right-visible');
        });
    }
    
    // Testimonial rotation (if multiple testimonials)
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (testimonials.length > 1) {
        let currentTestimonialIndex = 0;
        
        setInterval(() => {
            testimonials[currentTestimonialIndex].style.opacity = 0;
            
            setTimeout(() => {
                testimonials[currentTestimonialIndex].style.display = 'none';
                currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
                testimonials[currentTestimonialIndex].style.display = 'block';
                
                setTimeout(() => {
                    testimonials[currentTestimonialIndex].style.opacity = 1;
                }, 50);
            }, 500);
        }, 8000);
    }
});
