'use strict'

const buttonPrev = document.querySelector('.arrow-left');
const buttonNext = document.querySelector('.arrow-right');
const slidesEls = document.querySelectorAll('.slide');
const dotsEls = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = i => {
    for (let slidesEl of slidesEls) {
        slidesEl.classList.remove('active');
    }
    slidesEls[i].classList.add('active');
};

const activeDot = i => {
    for (let dotsEl of dotsEls) {
        dotsEl.classList.remove('active');
    }
    dotsEls[i].classList.add('active');
};

const currentActiveEl = ind => {
    activeSlide(ind);
    activeDot(ind);
};

const prevSlide = () => {
    if (index === 0) {
        index = slidesEls.length - 1;
        currentActiveEl(index);
        return
    }
    index -= 1;
    currentActiveEl(index);
};

const netxSlide = () => {
    if (index === slidesEls.length - 1) {
        index = 0;
        currentActiveEl(index);
        return
    }
    index += 1;
    currentActiveEl(index);
};

dotsEls.forEach((el, indexDot) => {
    el.addEventListener('click', () => {
        index = indexDot;
        currentActiveEl(index);
    });
});

buttonPrev.addEventListener('click', prevSlide);
buttonNext.addEventListener('click', netxSlide);

setInterval(netxSlide, 3000);