const $ = (selector) => {
    return document.querySelector(selector);
}

const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const sec = $('.sec');
const week = $('.week');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.remove('invisible');
    } else {
        dot.classList.add('invisible');
    }

    let hours = now.getHours();
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    hour.textContent = String(hours).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });

    week.children[now.getDay()].classList.add('active');
}

setInterval(update, 1000); 
