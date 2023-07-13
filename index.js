
function show() {
  const nav = document.getElementById("nav");
const closeMenu = document.getElementById("close");
const openMenu = document.getElementById("menu");

  nav.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";

  console.log("clicked");
}

function hide() {
  const nav = document.getElementById("nav");
const closeMenu = document.getElementById("close");
const openMenu = document.getElementById("menu");

  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  nav.style.display = "none";
}
