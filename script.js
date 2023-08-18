const carousel = document.querySelector(".carousel");
const card = carousel.querySelector(".card");
const arrowBtns = document.querySelectorAll(".wrapper i");

arrowBtns.forEach(arrowleft => {
    arrowleft.addEventListener("click", () => {
        const scrollAmount = arrowleft.id === "left" ? -card.offsetWidth : card.offsetWidth;
        carousel.scrollLeft += scrollAmount;
    });
});
