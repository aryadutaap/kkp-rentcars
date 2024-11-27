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

// card-cars
let wrapper = document.querySelector(".wrapper-box");
let activeBox = document.querySelectorAll(".box");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

let indexNo = 0;

nextBtn.onclick = () => {
  indexNo++;
  changeBox();
};

prevBtn.onclick = () => {
  indexNo--;
  changeBox();
};

let changeBox = () => {
  if (indexNo > activeBox.length - 1) {
    indexNo = 0;
  } else if (indexNo < 0) {
    indexNo = activeBox.length - 1;
  }

  for (let i = 0; i < activeBox.length; i++) {
    if (i == indexNo) {
      activeBox[i].classList.add("active");
      if (window.screen.width > 768) {
        wrapper.style.transform = `translateX(${indexNo * -22.5}vw)`;
      }
    } else {
      activeBox[i].classList.remove("active");
    }
  }
};
