const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;

setInterval(() => {
    countElements++;
    let currentElement = document.querySelector(".active");
    currentElement.classList.remove("active");

    if (countElements > slideshowElements.length) {
        slideshowElements[0].classList.add("active");
        countElements = 1;
    } else {
        currentElement.nextElementSibling.classList.add("active");
    }
}, 3000);
