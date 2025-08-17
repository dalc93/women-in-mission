function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.includes('+') ? `+${target}` : target;
                clearInterval(timer);
            } else {
                const prefix = counter.textContent.includes('+') ? '+' : '';
                counter.textContent = prefix + Math.floor(current);
            }
        }, 16);
    });
}

// Ejecutar animación cuando las tarjetas estén visibles
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateCounters, 800);
            observer.disconnect();
        }
    });
});

window.addEventListener('load', () => {
    const statsGrid = document.querySelector('.stats-grid');
    observer.observe(statsGrid);
});