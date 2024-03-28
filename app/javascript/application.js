// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const button = document.getElementById('button');
const right = document.getElementById('right');
let isOpen = false;

button.addEventListener('click', function() {
    if (!isOpen) {
        animateRight(250);
        button.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
        animateRight(0);
        button.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    isOpen = !isOpen;
});

function animateRight(destination) {
    const start = parseInt(window.getComputedStyle(right).left);
    const distance = destination - start;
    const duration = 1000; // milliseconds
    const fps = 60;
    const step = distance / (duration / (1000 / fps));

    let current = start;
    const animateInterval = setInterval(function() {
        if ((distance > 0 && current >= destination) || (distance < 0 && current <= destination)) {
            clearInterval(animateInterval);
        } else {
            current += step;
            right.style.left = current + 'px';
        }
    }, 1000 / fps);
}
