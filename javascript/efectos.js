let menu = document.getElementById("header");

function mostrarScroll() {
  let scrollTop = window.scrollY;
  if (scrollTop > 10) {
    menu.classList.add("scroll");
  } else {
    menu.classList.remove("scroll");
  }
}
window.addEventListener("load", function () {
  mostrarScroll();
  window.addEventListener("scroll", mostrarScroll);
});

const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  body.classList.toggle("active");
};

const text = document.querySelector('.text_img p');
text.innerHTML = text.innerText.split("").map(
  (char, i) => `<span style="transform:rotate(${i*9}deg)">${char}</span>`).join("")
