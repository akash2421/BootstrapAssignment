const carousel = document.querySelector(".carousel");
const Card = carousel.querySelector(".card");
const arrowBtns = document.querySelectorAll(".wrapper i");

arrowBtns.forEach(arrowleft => {
    arrowleft.addEventListener("click", () => {
        const scrollAmount = arrowleft.id === "left" ? -Card.offsetWidth : Card.offsetWidth;
        carousel.scrollLeft += scrollAmount;
    });
});
