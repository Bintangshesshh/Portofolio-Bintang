const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.right = "0";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.right = "-100%";
});

/* INTERACTIVE PARALLAX */
const image = document.querySelector(".hero-image");

document.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  image.style.transform =
    `translate(${x}px, ${y}px)`;

});

/* SCROLL REVEAL */
const cards = document.querySelectorAll(".profile-card");

window.addEventListener("scroll", () => {

  cards.forEach((card) => {

    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("show-card");
    }

  });

});