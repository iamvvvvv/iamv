// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const iconTop = document.querySelector(".footer-iconTop");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  sections.forEach((section) => {
    let sectionId = section.getAttribute("id");
    let navLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
    let offsetTop = section.offsetTop - 100;
    let offsetBottom = offsetTop + section.offsetHeight;

    if (fromTop >= offsetTop && fromTop < offsetBottom) {
      // Add active class to the corresponding nav link
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navLink.classList.add("active");
    }
  });
});

// Sticky header
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);

  navbar.classList.remove("active");
  menuIcon.classList.remove("bx-x");
});

window.onscroll = function () {
  if (window.scrollY > 500) {
    iconTop.classList.add("iconTop-active");
  } else {
    iconTop.classList.remove("iconTop-active");
  }
};


let backg = document.querySelector(".backg")
window.addEventListener("scroll", (e) => {
  if (scrollY > 700) {
    backg.style.opacity = "0.1"
  }
  else {
    backg.style.opacity = "0.3"
  }
})