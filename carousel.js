const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");
const size = slides.length;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
    slides[index].style.transform = "translateY(-2vh)";
    prev.disabled = (index === 0) ? true : false;
    next.disabled = (index === size - 1) ? true : false;
}

prev.onclick = () => {
    index = index - 1;
    showSlide(index);
}

next.onclick = () => {
    index = index + 1;
    showSlide(index);
}

showSlide(index);
