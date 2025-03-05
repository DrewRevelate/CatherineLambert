document.addEventListener('DOMContentLoaded', function() {
    // Service data
    const services = [
        {
            id: 'individual',
            title: 'Individual Therapy',
            description: 'One-on-one sessions designed to address your specific challenges, goals, and personal growth journey.',
            image: 'images/services/individual-therapy.jpg',
            icon: 'fas fa-user'
        },
        {
            id: 'anxiety',
            title: 'Anxiety Management',
            description: 'Develop practical techniques to manage anxiety and build resilience against stress.',
            image: 'images/services/anxiety.jpg',
            icon: 'fas fa-brain'
        },
        {
            id: 'depression',
            title: 'Depression Treatment',
            description: 'Find your way through depression with compassionate support and evidence-based strategies.',
            image: 'images/services/depression.jpg',
            icon: 'fas fa-cloud-rain'
        },
        {
            id: 'trauma',
            title: 'Trauma Recovery',
            description: 'Process traumatic experiences in a safe environment and develop resilience.',
            image: 'images/services/trauma.jpg',
            icon: 'fas fa-heart-broken'
        },
        {
            id: 'relationships',
            title: 'Relationship Counseling',
            description: 'Improve communication, resolve conflicts, and strengthen your connections.',
            image: 'images/services/relationships.jpg',
            icon: 'fas fa-users'
        },
        {
            id: 'grief',
            title: 'Grief Counseling',
            description: 'Navigate loss with compassionate guidance while honoring your experience.',
            image: 'images/services/grief.jpg',
            icon: 'fas fa-leaf'
        }
    ];

    const carouselItems = document.querySelector('.carousel-items');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    let activeIndex = 0;

    // Initialize carousel
    function initCarousel() {
        // Populate carousel items
        services.forEach((service, index) => {
            const itemHTML = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <div class="carousel-image">
                        <img src="${service.image}" alt="${service.title}">
                    </div>
                    <div class="carousel-content">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <a href="#${service.id}" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            `;
            carouselItems.innerHTML += itemHTML;

            // Populate indicators
            const indicatorHTML = `
                <div class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${service.image}" alt="${service.title}">
                </div>
            `;
            carouselIndicators.innerHTML += indicatorHTML;
        });

        // Add event listeners
        document.querySelector('.carousel-nav.prev').addEventListener('click', showPrevious);
        document.querySelector('.carousel-nav.next').addEventListener('click', showNext);
        
        document.querySelectorAll('.carousel-indicator').forEach(indicator => {
            indicator.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showService(index);
            });
        });

        document.querySelector('.view-all-btn').addEventListener('click', toggleServicesGrid);
    }

    function showService(index) {
        // Hide current active item
        document.querySelector('.carousel-item.active').classList.remove('active');
        document.querySelector('.carousel-indicator.active').classList.remove('active');
        
        // Show new active item
        document.querySelectorAll('.carousel-item')[index].classList.add('active');
        document.querySelectorAll('.carousel-indicator')[index].classList.add('active');
        
        activeIndex = index;
    }

    function showNext() {
        const newIndex = (activeIndex + 1) % services.length;
        showService(newIndex);
    }

    function showPrevious() {
        const newIndex = (activeIndex - 1 + services.length) % services.length;
        showService(newIndex);
    }

    function toggleServicesGrid() {
        const servicesGrid = document.querySelector('.services-grid');
        const viewAllBtn = document.querySelector('.view-all-btn');
        
        if (servicesGrid.classList.contains('hidden')) {
            servicesGrid.classList.remove('hidden');
            servicesGrid.classList.add('visible');
            viewAllBtn.textContent = 'Hide Services Grid';
        } else {
            servicesGrid.classList.add('hidden');
            servicesGrid.classList.remove('visible');
            viewAllBtn.textContent = 'View All Services';
        }
    }

    // Initialize carousel on page load
    initCarousel();
});
