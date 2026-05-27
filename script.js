const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

/* MOBILE MENU */
menuBtn.addEventListener("click", () => {
  mobileMenu.style.right = "0";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.right = "-100%";
});

const imageContainer = document.querySelector(".hero-image-container");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;

  if(imageContainer) {
    imageContainer.style.transform = `translate(${x}px, ${y}px)`;
    imageContainer.style.transition = "transform 0.1s ease-out";
  }
});

/* SCROLL REVEAL */
const cards = document.querySelectorAll(".profile-card");

const revealCards = () => {
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add("show-card");
    }
  });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
