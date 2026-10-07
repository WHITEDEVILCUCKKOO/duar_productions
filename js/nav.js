

// ── HAMBURGER ──
function toggleMenu() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileNav');
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileNav').classList.remove('open');
}



let servicesmb = document.getElementById("servicesmb");
let dropdown_2 = document.querySelector(".dropdown_2");

servicesmb.addEventListener("click", (e) => {
  e.preventDefault();

  dropdown_2.classList.toggle("unshow_smmb");
});

