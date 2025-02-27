const slider = document.querySelector(".full-page-slider");
let isDown = false;
let startX;
let scrollLeft;
let scrollForce = 1.2;

// Mouse events
slider.addEventListener("mousedown", (event) => {
    isDown = true;
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", (event) => {
    if(!isDown) return;
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * scrollForce;
    slider.scrollLeft = scrollLeft - walk;
    event.preventDefault();
});

// Touch events
slider.addEventListener("touchstart", (event) => {
    isDown = true;
    startX = event.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend", () => {
    isDown = false;
});

slider.addEventListener("touchcancel", () => {
    isDown = false;
});

slider.addEventListener("touchmove", (event) => {
    if(!isDown) return;
    const x = event.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * scrollForce;
    slider.scrollLeft = scrollLeft - walk;
    event.preventDefault();
});
