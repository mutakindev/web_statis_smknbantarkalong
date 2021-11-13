window.onscroll = function () {
  toggleSticky();
};

function toggleSticky() {
  const navbar = document.querySelector("nav");
  if (window.pageYOffset > 0) {
    navbar.classList.add("scroll");
    document.querySelector(".btn-toggle svg").style.fill = "white";
    document.querySelector("header").style.marginTop = "100px";
  } else {
    navbar.classList.remove("scroll");
    document.querySelector(".btn-toggle svg").style.fill = "black";
    document.querySelector("header").style.marginTop = "initial";
  }
}

const links = document.querySelectorAll("nav li a");

for (const link of links) {
  link.addEventListener("click", (e) => {
    const target = e.target;
    const current = document.querySelector(".menu-active");
    current.classList.remove("menu-active");
    target.classList.toggle("menu-active");
  });
}

const btn_toggle = document.querySelector(".btn-toggle");

btn_toggle.addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});
