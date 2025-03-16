function createWheatParticle(card) {
    const particle = document.createElement('div');
    particle.className = 'wheat-particle';
    
    // Random position within card boundaries
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    particle.style.left = `${x}%`;
    particle.style.bottom = `${y}%`;
    
    const randomDuration = Math.random() * 2 + 1;
    const randomDelay = Math.random() * 0.5;
    
    particle.style.animation = `wheatFall ${randomDuration}s ease-in ${randomDelay}s`;
    
    card.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, (randomDuration + randomDelay) * 1000);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const interval = setInterval(() => {
            createWheatParticle(card);
        }, 50);

        card.addEventListener('mouseleave', () => {
            clearInterval(interval);
        }, { once: true });
    });
});
