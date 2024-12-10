// Simple Intersection Observer to animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('[data-animate="true"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.setAttribute('data-visible','true');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    animatedSections.forEach(sec => {
        observer.observe(sec);
    });
});
