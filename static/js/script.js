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
