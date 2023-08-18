const carousel = document.querySelector(".carousel");
const Cards = document.querySelector(".card");
const arrowBtns = document.querySelectorAll(".wrapper i");

arrowBtns.forEach(arrowleft => {
    arrowleft.addEventListener("click", () => {
        const scrollAmount = arrowleft.id === "left" ? -Cards.offsetWidth : Cards.offsetWidth;
        carousel.scrollLeft += scrollAmount;
    });
});
