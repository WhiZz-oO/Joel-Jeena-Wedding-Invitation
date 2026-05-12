// Countdown Logic
export const weddingDate = new Date('July 11, 2026 11:00:00').getTime();

export function calculateTimeRemaining(targetDate, now = new Date().getTime()) {
    const distance = targetDate - now;

    if (distance < 0) {
        return null;
    }

    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
}

export function updateCountdown() {
    const time = calculateTimeRemaining(weddingDate);

    if (!time) {
        const timerEl = document.getElementById('timer');
        if (timerEl) timerEl.innerHTML = "<h3 style='grid-column: span 2; text-align: center; color: var(--gold);'>The Big Day is Here!</h3>";
        return;
    }

    const elements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    if (elements.days) elements.days.innerText = time.days.toString().padStart(2, '0');
    if (elements.hours) elements.hours.innerText = time.hours.toString().padStart(2, '0');
    if (elements.minutes) elements.minutes.innerText = time.minutes.toString().padStart(2, '0');
    if (elements.seconds) elements.seconds.innerText = time.seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.9;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);
