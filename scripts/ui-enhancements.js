// scripts/ui-enhancements.js
document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação no título
    if(document.querySelector('.logo h1')) {
        const title = document.querySelector('.logo h1');
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if(i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
    
    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 25px rgba(0, 255, 136, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Atualizar hora em tempo real
    function updateTime() {
        const now = new Date();
        document.querySelectorAll('.time-now').forEach(el => {
            el.textContent = now.toLocaleTimeString();
        });
    }
    setInterval(updateTime, 1000);
    updateTime();
});