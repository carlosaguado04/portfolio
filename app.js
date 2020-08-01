const nav = document.querySelector(".nav-bar");

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};
