/**
 * Services Modal JavaScript
 * Catherine Lambert Therapy Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Service data for modals
    const services = {
        individual: {
            title: "Individual Therapy",
            icon: "fa-user",
            content: `
                <p>One-on-one sessions designed to address your specific challenges, goals, and growth. We'll work together to develop effective strategies for overcoming obstacles and improving overall well-being.</p>
                
                <h4>This service is ideal for those experiencing:</h4>
                <ul>
                    <li>Life transitions and adjustment difficulties</li>
                    <li>Stress management challenges</li>
                    <li>Self-esteem and identity concerns</li>
                    <li>Personal growth and self-exploration</li>
                </ul>
                
                <h4>What to expect:</h4>
                <p>Individual therapy typically begins with an assessment of your current concerns and goals. Together, we'll develop a personalized treatment plan that incorporates evidence-based techniques suited to your needs. Sessions are generally held weekly, with adjustments made as progress continues.</p>
            `
        },
        anxiety: {
            title: "Anxiety Management",
            icon: "fa-brain",
            content: `
                <p>Develop practical techniques to manage anxiety and reduce its impact on your daily life. Learn to recognize triggers, challenge anxious thoughts, and build resilience against stress.</p>
                
                <h4>This service addresses:</h4>
                <ul>
                    <li>Generalized anxiety and persistent worry</li>
                    <li>Social anxiety and performance fears</li>
                    <li>Panic attacks and physical anxiety symptoms</li>
                    <li>Phobias and specific fears</li>
                </ul>
                
                <h4>Therapeutic approaches include:</h4>
                <p>Cognitive-Behavioral Therapy (CBT), mindfulness techniques, exposure therapy, and relaxation training. Treatment is focused on both immediate anxiety reduction and long-term management skills to promote lasting change.</p>
            `
        },
        depression: {
            title: "Depression Treatment",
            icon: "fa-cloud-rain",
            content: `
                <p>Find your way through depression with compassionate support and evidence-based strategies. We'll work together to rebuild hope, reconnect with meaningful activities, and develop sustainable well-being.</p>
                
                <h4>This service addresses:</h4>
                <ul>
                    <li>Major depressive disorder and persistent depression</li>
                    <li>Low motivation and energy</li>
                    <li>Negative thought patterns</li>
                    <li>Isolation and withdrawal</li>
                </ul>
                
                <h4>Treatment approaches include:</h4>
                <p>Cognitive Behavioral Therapy (CBT), Behavioral Activation, Mindfulness-Based Cognitive Therapy (MBCT), and other evidence-based interventions tailored to your specific experience of depression.</p>
            `
        },
        trauma: {
            title: "Trauma Recovery",
            icon: "fa-heart-broken",
            content: `
                <p>Process traumatic experiences in a safe, supportive environment. Develop coping skills and work toward healing and post-traumatic growth with specialized trauma-informed care.</p>
                
                <h4>This approach helps with:</h4>
                <ul>
                    <li>Processing past traumatic events</li>
                    <li>Managing trauma-related symptoms</li>
                    <li>Developing healthy coping strategies</li>
                    <li>Rebuilding a sense of safety and trust</li>
                </ul>
                
                <h4>Specialized methods include:</h4>
                <p>Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), EMDR (Eye Movement Desensitization and Reprocessing), and other evidence-based trauma approaches. Treatment pacing is always determined by your comfort level and readiness.</p>
            `
        },
        relationships: {
            title: "Relationship Counseling",
            icon: "fa-users",
            content: `
                <p>Strengthen your relationship by improving communication, resolving conflicts, and deepening your connection. Learn to navigate challenges together with greater understanding and empathy.</p>
                
                <h4>This service helps with:</h4>
                <ul>
                    <li>Communication breakdowns and recurring conflicts</li>
                    <li>Trust and intimacy concerns</li>
                    <li>Life transitions and relationship growth</li>
                    <li>Pre-marital counseling and relationship enrichment</li>
                </ul>
                
                <h4>The process includes:</h4>
                <p>Initial assessment of relationship patterns, identification of strengths and growth areas, and development of practical strategies to enhance connection. Both partners are engaged equally in a supportive, non-judgmental environment.</p>
            `
        },
        grief: {
            title: "Grief Counseling",
            icon: "fa-leaf",
            content: `
                <p>Navigate the complex emotions of grief and loss with compassionate guidance. Find meaning and move forward while honoring your experience and the significance of your loss.</p>
                
                <h4>This service provides support through:</h4>
                <ul>
                    <li>Loss of loved ones</li>
                    <li>Non-death losses (relationships, health, career)</li>
                    <li>Complicated grief</li>
                    <li>Anticipatory grief</li>
                </ul>
                
                <h4>The grief work includes:</h4>
                <p>Creating space to express and process emotions, making meaning of your loss, developing coping strategies, and gradually adapting to life changes. Treatment honors the uniqueness of each grief journey.</p>
            `
        }
    };
    
    // Initialize variables for modal functionality
    const modalOverlay = document.getElementById('serviceModalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Set up event listeners for service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            const serviceData = services[serviceId];
            
            if (serviceData) {
                // Populate modal content
                modalTitle.textContent = serviceData.title;
                modalContent.innerHTML = serviceData.content;
                
                // Show modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
            }
        });
    });
    
    // Close modal when close button is clicked
    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Periodic shimmer effect for service icons
    function startShimmerAnimation() {
        const serviceIcons = document.querySelectorAll('.service-icon.animate-shimmer');
        
        serviceIcons.forEach((icon, index) => {
            // Stagger the animations
            setTimeout(() => {
                icon.classList.add('shimmer');
                
                setTimeout(() => {
                    icon.classList.remove('shimmer');
                }, 1500); // Duration of shimmer
            }, index * 1000); // Stagger start times
        });
        
        // Repeat the animation cycle
        setTimeout(startShimmerAnimation, 8000);
    }
    
    // Start the periodic shimmer animation
    setTimeout(startShimmerAnimation, 2000);
});
