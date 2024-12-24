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
  if (indexNo >= activeBox.length) {
    indexNo = 0;
  } else if (indexNo < 0) {
    indexNo = activeBox.length - 1;
  }

  for (let i = 0; i < activeBox.length; i++) {
    if (i == indexNo) {
      // console.log(indexNo);
      activeBox[i].classList.add("active");
      if (window.screen.width > 768) {
        wrapper.style.transform = `translateX(${indexNo * -22.5}vw)`;
      }
    } else {
      activeBox[i].classList.remove("active");
    }
  }
};

// syarat & cara pesan
function showSyarat() {
  document.getElementById("syaratpesan").style.display = "block";
  document.getElementById("carapesan").style.display = "none";
}

function showCara() {
  document.getElementById("syaratpesan").style.display = "none";
  document.getElementById("carapesan").style.display = "block";
}
