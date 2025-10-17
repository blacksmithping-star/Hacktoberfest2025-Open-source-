const audio = new Audio("song.mp3");
const playBtn = document.querySelector("#play");

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause";
  } else {
    audio.pause();
    playBtn.textContent = "Play";
  }
};
