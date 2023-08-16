AOS.init({
    duration: 800,
})

document.querySelector("#overlayToggle").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#overlayMenu").classList.toggle("right-[-100%]");
  document.querySelector("#overlayMenu").classList.toggle("right-0");
});

document.querySelector("#closeOverlayToggle").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#overlayMenu").classList.remove("right-0");
  document.querySelector("#overlayMenu").classList.add("right-[-100%]");
});