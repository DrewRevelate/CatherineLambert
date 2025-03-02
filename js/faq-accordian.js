/**
 * FAQ Accordion JavaScript - Softer Transitions
 * Catherine Lambert Therapy Website
 */

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length) {
        // Initialize FAQ accordion
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const toggle = this.querySelector('.faq-toggle i');
                
                // Toggle this question
                this.classList.toggle('active');
                
                // Toggle icon with smoother transition
                if (toggle) {
                    if (toggle.classList.contains('fa-plus')) {
                        toggle.style.transition = 'all 0.5s ease';
                        toggle.classList.remove('fa-plus');
                        toggle.classList.add('fa-minus');
                    } else {
                        toggle.style.transition = 'all 0.5s ease';
                        toggle.classList.remove('fa-minus');
                        toggle.classList.add('fa-plus');
                    }
                }
                
                // Toggle answer visibility with smoother transition
                if (answer.style.maxHeight) {
                    answer.style.transition = 'max-height 0.5s ease-out';
                    answer.style.maxHeight = null;
                } else {
                    answer.style.transition = 'max-height 0.5s ease-in';
                    answer.style.maxHeight = answer.scrollHeight + 50 + 'px'; // Add buffer for smoother expansion
                }
            });
        });
        
        // Optional: Open the first FAQ item by default with a slight delay for smoother initial load
        if (faqQuestions.length > 0) {
            setTimeout(() => {
                // Simulate click on first question to open it
                faqQuestions[0].click();
            }, 500);
        }
    }
    
    // Category filter functionality (if applicable)
    const categoryButtons = document.querySelectorAll('.faq-filter-button');
    
    if (categoryButtons.length) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get category to filter
                const category = this.getAttribute('data-category');
                
                // Show/hide FAQ categories based on filter with fade effect
                const faqCategories = document.querySelectorAll('.faq-category');
                
                faqCategories.forEach(faqCategory => {
                    if (category === 'all' || faqCategory.getAttribute('data-category') === category) {
                        // Fade in
                        faqCategory.style.opacity = '0';
                        faqCategory.style.display = 'block';
                        setTimeout(() => {
                            faqCategory.style.transition = 'opacity 0.5s ease';
                            faqCategory.style.opacity = '1';
                        }, 50);
                    } else {
                        // Fade out
                        faqCategory.style.transition = 'opacity 0.5s ease';
                        faqCategory.style.opacity = '0';
                        setTimeout(() => {
                            faqCategory.style.display = 'none';
                        }, 500);
                    }
                });
            });
        });
    }
    
    // FAQ search functionality (if applicable) with smoother transitions
    const faqSearch = document.getElementById('faqSearch');
    
    if (faqSearch) {
        // Add debounce function to prevent excessive processing during typing
        const debounce = (func, delay) => {
            let debounceTimer;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => func.apply(context, args), delay);
            };
        };
        
        const performSearch = debounce(function() {
            const searchTerm = this.value.toLowerCase();
            
            // Get all FAQ items
            const faqItems = document.querySelectorAll('.faq-item');
            
            // Show/hide based on search term with fade effect
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question h4').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    // Fade in
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    item.style.display = 'block';
                } else {
                    // Fade out
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        if (item.style.opacity === '0') {
                            item.style.display = 'none';
                        }
                    }, 500);
                }
            });
            
            // Show/hide category headings based on whether they have visible children with transition
            const faqCategories = document.querySelectorAll('.faq-category');
            
            faqCategories.forEach(category => {
                const visibleItems = Array.from(category.querySelectorAll('.faq-item')).filter(item => 
                    item.style.opacity !== '0' && item.style.display !== 'none'
                ).length;
                
                const categoryHeading = category.querySelector('h3');
                
                if (visibleItems === 0) {
                    categoryHeading.style.transition = 'opacity 0.5s ease';
                    categoryHeading.style.opacity = '0';
                    setTimeout(() => {
                        if (categoryHeading.style.opacity === '0') {
                            categoryHeading.style.display = 'none';
                        }
                    }, 500);
                } else {
                    categoryHeading.style.display = 'block';
                    setTimeout(() => {
                        categoryHeading.style.transition = 'opacity 0.5s ease';
                        categoryHeading.style.opacity = '1';
                    }, 50);
                }
            });
            
            // Show a message if no results with fade effect
            const noResultsMessage = document.querySelector('.no-faq-results');
            
            if (noResultsMessage) {
                const totalVisibleItems = document.querySelectorAll('.faq-item[style*="opacity: 1"]').length;
                
                if (totalVisibleItems === 0 && searchTerm !== '') {
                    noResultsMessage.style.display = 'block';
                    setTimeout(() => {
                        noResultsMessage.style.transition = 'opacity 0.5s ease';
                        noResultsMessage.style.opacity = '1';
                    }, 50);
                } else {
                    noResultsMessage.style.transition = 'opacity 0.5s ease';
                    noResultsMessage.style.opacity = '0';
                    setTimeout(() => {
                        noResultsMessage.style.display = 'none';
                    }, 500);
                }
            }
        }, 300); // 300ms delay for debounce
        
        faqSearch.addEventListener('input', performSearch);
    }
});
