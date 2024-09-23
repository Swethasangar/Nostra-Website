// Offer Bar
let offerbar = document.querySelector(".offer-bar");
let closebutton = document.getElementById("close");
closebutton.addEventListener("click", function () {
  offerbar.style.display = "none";
});
var sidenav = document.getElementById("navbar");
var menu = document.getElementById("menu");

menu.addEventListener("click", function () {
  sidenav.style.right = 0;
});
// Selecting close nav
var closenav = document.getElementById("close");
closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
