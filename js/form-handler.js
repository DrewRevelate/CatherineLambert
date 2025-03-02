/**
 * Form Handler JavaScript
 * Catherine Lambert Therapy Website
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Form validation
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            // Reset previous error messages
            document.querySelectorAll('.form-error').forEach(error => error.remove());
            document.querySelectorAll('.error-field').forEach(field => field.classList.remove('error-field'));
            
            // Validate each required field
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    addErrorMessage(field, 'This field is required');
                } else if (field.type === 'email' && !isValidEmail(field.value)) {
                    isValid = false;
                    addErrorMessage(field, 'Please enter a valid email address');
                } else if (field.id === 'phone' && !isValidPhone(field.value)) {
                    isValid = false;
                    addErrorMessage(field, 'Please enter a valid phone number');
                }
            });
            
            // If form is valid, send the data
            if (isValid) {
                // Disable submit button and show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.textContent;
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Collect form data
                const formData = new FormData(contactForm);
                const formObject = {};
                
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    console.log('Form submitted with data:', formObject);
                    
                    // Show success message
                    showFormSuccess(contactForm);
                    
                    // Reset button state
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }, 1500);
            }
        });
        
        // Real-time validation for email field
        const emailField = document.getElementById('email');
        if (emailField) {
            emailField.addEventListener('blur', function() {
                if (this.value && !isValidEmail(this.value)) {
                    // Remove any existing error
                    const existingError = this.parentNode.querySelector('.form-error');
                    if (existingError) {
                        existingError.remove();
                    }
                    this.classList.remove('error-field');
                    
                    // Add error message
                    addErrorMessage(this, 'Please enter a valid email address');
                }
            });
        }
        
        // Real-time validation for phone field
        const phoneField = document.getElementById('phone');
        if (phoneField) {
            phoneField.addEventListener('blur', function() {
                if (this.value && !isValidPhone(this.value)) {
                    // Remove any existing error
                    const existingError = this.parentNode.querySelector('.form-error');
                    if (existingError) {
                        existingError.remove();
                    }
                    this.classList.remove('error-field');
                    
                    // Add error message
                    addErrorMessage(this, 'Please enter a valid phone number');
                }
            });
            
            // Format phone number as user types
            phoneField.addEventListener('input', function() {
                const cleaned = this.value.replace(/\D/g, '');
                if (cleaned.length <= 10) {
                    let formatted = cleaned;
                    
                    if (cleaned.length > 3) {
                        formatted = cleaned.substring(0, 3) + '-' + cleaned.substring(3);
                    }
                    
                    if (cleaned.length > 6) {
                        formatted = formatted.substring(0, 7) + '-' + formatted.substring(7);
                    }
                    
                    this.value = formatted;
                }
            });
        }
    }
    
    // Utility Functions
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Accept various formats: (123) 456-7890, 123-456-7890, 1234567890
        const cleaned = phone.replace(/\D/g, '');
        return cleaned.length >= 10;
    }
    
    function addErrorMessage(field, message) {
        field.classList.add('error-field');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        
        // Handle checkbox fields differently
        if (field.type === 'checkbox') {
            field.parentNode.insertAdjacentElement('beforeend', errorDiv);
        } else {
            field.insertAdjacentElement('afterend', errorDiv);
        }
    }
    
    function showFormSuccess(form) {
        // Save the original form height to maintain page layout
        const formHeight = form.offsetHeight;
        
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.innerHTML = `
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. I'll get back to you within 24-48 business hours.</p>
        `;
        
        // Replace form with success message
        form.innerHTML = '';
        form.appendChild(successDiv);
        form.style.minHeight = `${formHeight}px`;
    }
});
