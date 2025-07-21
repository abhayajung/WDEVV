const spin = document.getElementsByClassName("spin")[0];
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.addEventListener(
  "click",
  () => (spin.style.animationPlayState = "running")
);
pauseButton.addEventListener(
  "click",
  () => (spin.style.animationPlayState = "paused")
);
