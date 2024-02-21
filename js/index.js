document
  .getElementById("fluidsim")
  .addEventListener("mouseenter", playFluidVideo);
document
  .getElementById("fluidsim")
  .addEventListener("touchstart", playFluidVideo);
function playFluidVideo() {
  fluidsimVideo.play();
}

document
  .getElementById("fluidsim")
  .addEventListener("mouseleave", pauseFluidVideo);
document
  .getElementById("fluidsim")
  .addEventListener("touchend", pauseFluidVideo);
function pauseFluidVideo() {
  fluidsimVideo.pause();
}

document.getElementById("pp").addEventListener("mouseenter", playPPVideo);
document.getElementById("pp").addEventListener("touchstart", playPPVideo);
function playPPVideo() {
  document
    .getElementById("ppVideo")
    .setAttribute("src", "images/pp_banner5.gif");
}

document.getElementById("pp").addEventListener("mouseleave", pausePPVideo);
document.getElementById("pp").addEventListener("touchend", pausePPVideo);
function pausePPVideo() {
  document
    .getElementById("ppVideo")
    .setAttribute("src", "images/pp_banner4.gif");
}
