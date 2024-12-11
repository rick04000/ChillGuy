// Simple Intersection Observer to animate sections and update indicator
document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('[data-animate="true"]');
    const indicatorItems = document.querySelectorAll('.scroll-indicator li');
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.setAttribute('data-visible','true');
                // Update scroll indicator
                const currentId = entry.target.getAttribute('id');
                indicatorItems.forEach(item => item.classList.remove('active'));
                const currentItem = document.querySelector(`.scroll-indicator li[data-target="${currentId}"]`);
                if(currentItem) currentItem.classList.add('active');
            }
        });
    }, {threshold: 0.6});

    animatedSections.forEach(sec => {
        observer.observe(sec);
    });

    // Click scroll navigation
    indicatorItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            if(targetEl) {
                targetEl.scrollIntoView({behavior:'smooth'});
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.faq-accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Close other accordion items
            const allContents = document.querySelectorAll('.faq-accordion-content');
            const allHeaders = document.querySelectorAll('.faq-accordion-header');

            allHeaders.forEach(h => {
                if (h !== header) {
                    h.classList.remove('active');
                }
            });

            allContents.forEach(content => {
                if (content !== header.nextElementSibling) {
                    content.style.display = 'none';
                }
            });

            // Toggle the current accordion
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (header.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

let currentIndex = 0;

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].clientWidth + 20; // Include margin

    // Move the track
    track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

    // Infinite loop logic
    if (currentIndex === items.length - 1) {
        setTimeout(() => {
            track.style.transition = 'none';
            currentIndex = 0;
            track.style.transform = `translateX(0px)`;
        }, 500);
    } else {
        track.style.transition = 'transform 0.5s ease';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const controls = document.querySelectorAll('.carousel-control');

    // Clone first and last items for infinite effect
    const firstItem = items[0].cloneNode(true);
    const lastItem = items[items.length - 1].cloneNode(true);

    track.appendChild(firstItem);
    track.insertBefore(lastItem, items[0]);

    // Update carousel position
    controls.forEach(control => {
        control.addEventListener('click', () => {
            if (control.dataset.direction === 'next') {
                currentIndex++;
            } else {
                currentIndex--;
            }

            updateCarousel();
        });
    });
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.remove('show');
    } else {
        navbar.classList.add('show');
    }
    lastScrollY = window.scrollY;
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navLinks) {
        console.error('Menu toggle or nav links not found. Please check your selectors.');
        return;
    }

    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent closing the menu when clicking on the toggle
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a nav-link
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Ensure this works only on mobile
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside the dropdown
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});



