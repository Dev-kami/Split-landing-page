const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => {
  left.style.flex = "2";
});
left.addEventListener("mouseleave", () => {
  left.style.flex = "1";
});
right.addEventListener("mouseenter", () => {
  right.style.flex = "2";
});
right.addEventListener("mouseleave", () => {
  right.style.flex = "1";
});
