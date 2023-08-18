const carousel = document.querySelector(".carousel");
const firstCard = carousel.querySelector(".card");
const arrowBtns = document.querySelectorAll(".wrapper i");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const scrollAmount = btn.id === "left" ? -firstCard.offsetWidth : firstCard.offsetWidth;
        carousel.scrollLeft += scrollAmount;
    });
});
