AOS.init({
    duration: 800,
})

document.querySelector("#overlayToggle").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#overlayMenu").classList.toggle("hidden");
    document.querySelector("#overlayMenu").classList.toggle("flex");
  });
  
  document.querySelector("#closeOverlayToggle").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#overlayMenu").classList.remove("flex");
    document.querySelector("#overlayMenu").classList.add("hidden");
  });