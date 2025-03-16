const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    // Menu title animation
    const menuTitle = document.querySelector('.menu-section__title');
    observer.observe(menuTitle);

    // Card titles and descriptions animations
    const cardTitles = document.querySelectorAll('.card-container__text h3');
    const descriptions = document.querySelectorAll('.card-container__text p');
    
    cardTitles.forEach(title => observer.observe(title));
    descriptions.forEach(desc => observer.observe(desc));
});
