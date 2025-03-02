/**
 * FAQ Accordion JavaScript
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
                
                // Toggle icon
                if (toggle) {
                    if (toggle.classList.contains('fa-plus')) {
                        toggle.classList.remove('fa-plus');
                        toggle.classList.add('fa-minus');
                    } else {
                        toggle.classList.remove('fa-minus');
                        toggle.classList.add('fa-plus');
                    }
                }
                
                // Toggle answer visibility with smooth transition
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
        
        // Optional: Open the first FAQ item by default
        if (faqQuestions.length > 0) {
            // Simulate click on first question to open it
            faqQuestions[0].click();
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
                
                // Show/hide FAQ categories based on filter
                const faqCategories = document.querySelectorAll('.faq-category');
                
                faqCategories.forEach(faqCategory => {
                    if (category === 'all' || faqCategory.getAttribute('data-category') === category) {
                        faqCategory.style.display = 'block';
                    } else {
                        faqCategory.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // FAQ search functionality (if applicable)
    const faqSearch = document.getElementById('faqSearch');
    
    if (faqSearch) {
        faqSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            // Get all FAQ items
            const faqItems = document.querySelectorAll('.faq-item');
            
            // Show/hide based on search term
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question h4').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                    
                    // Highlight matching text if desired
                    // (Implementation would go here)
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide category headings based on whether they have visible children
            const faqCategories = document.querySelectorAll('.faq-category');
            
            faqCategories.forEach(category => {
                const visibleItems = category.querySelectorAll('.faq-item[style="display: block"]').length;
                
                if (visibleItems === 0) {
                    category.querySelector('h3').style.display = 'none';
                } else {
                    category.querySelector('h3').style.display = 'block';
                }
            });
            
            // Show a message if no results
            const noResultsMessage = document.querySelector('.no-faq-results');
            
            if (noResultsMessage) {
                const totalVisibleItems = document.querySelectorAll('.faq-item[style="display: block"]').length;
                
                if (totalVisibleItems === 0 && searchTerm !== '') {
                    noResultsMessage.style.display = 'block';
                } else {
                    noResultsMessage.style.display = 'none';
                }
            }
        });
    }
});
