// navbar
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if ((window, scrollY > 0)) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }

  menu.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

window.onload = () => {
  if ((window, scrollY > 0)) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
};

// button dropdown
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const selectBtn = dropdown.querySelector(".select");
  const options = dropdown.querySelectorAll(".option");
  const sBtn_text = dropdown.querySelector(".selected");

  selectBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove("active");
      }
    });
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      dropdown.classList.remove("active");
      console.log(selectedOption);
    });
  });
});

// caption slider
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(showNextSlide, 5000);
