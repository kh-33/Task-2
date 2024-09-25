let slideIndex = 0;
let slides = document.querySelectorAll(".slides img");
let totalSlides = slides.length;
let autoSlide;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });
}

function changeSlide(n) {
  showSlide((slideIndex += n));
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => changeSlide(1), 3000);
}

document.querySelector(".slider").addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

document
  .querySelector(".slider")
  .addEventListener("mouseleave", resetAutoSlide);

showSlide(slideIndex);
resetAutoSlide();
