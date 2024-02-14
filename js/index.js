document.getElementById("fluidsim").addEventListener("mouseenter", function () {
  fluidsimVideo.play();
});

document.getElementById("fluidsim").addEventListener("mouseleave", function () {
  fluidsimVideo.pause();
  // fluidsimVideo.currentTime = 0;
});

document.getElementById("pp").addEventListener("mouseenter", function () {
  document
    .getElementById("ppVideo")
    .setAttribute("src", "images/pp_banner5.gif");
});

document.getElementById("pp").addEventListener("mouseleave", function () {
  document
    .getElementById("ppVideo")
    .setAttribute("src", "images/pp_banner4.gif");
});
// Overflow Menu
