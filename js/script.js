document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission (basic example, no backend)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simulate form submission
            setTimeout(() => {
                formMessage.style.display = 'block';
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                formMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
                contactForm.reset(); // Clear the form

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);

            }, 500); // Simulate a short delay
        });
    }

    // Carousel functionality
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const dots = document.querySelectorAll('.dot');

    if (carouselSlide && carouselImages.length > 0) {
        let counter = 0;
        const size = carouselImages[0].clientWidth; // Width of a single image

        // Set initial position
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === counter) {
                    dot.classList.add('active');
                }
            });
        }

        // Auto-slide functionality
        setInterval(() => {
            counter++;
            if (counter === carouselImages.length) {
                counter = 0; // Loop back to the first image
            }
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            updateDots();
        }, 3000); // Change image every 3 seconds

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                counter = index;
                carouselSlide.style.transition = "transform 0.5s ease-in-out";
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
                updateDots();
            });
        });

        // Optional: Recalculate size on window resize
        window.addEventListener('resize', () => {
            // Re-get the size to ensure correct sliding on resize
            const newSize = carouselImages[0].clientWidth;
            carouselSlide.style.transition = "none"; // Remove transition during resize
            carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
        });
    }
});