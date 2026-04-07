// Smooth load effect
document.body.style.opacity = 0;

window.onload = () => {
  document.body.style.transition = "1s ease";
  document.body.style.opacity = 1;
};