var mymusic = document.getElementById("mymusic");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mymusic.paused) {
    mymusic.play();
    icon.src = "/assets/image/pause.png";
  } else {
    mymusic.pause();
    icon.src = "/assets/image/play.png";
  }
};

var mymusic = new Audio(
  "/assets/music/Sampaikan sayangku untuk dia (karaoke).mp3"
);
mymusic.volume = 1;
mymusic.play();
if (mymusic) {
  window.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode;

    if (key === 32) {
      // spacebar

      // eat the spacebar, so it does not scroll the page
      event.preventDefault();

      mymusic.paused
        ? mymusic.play((icon.src = "/assets/image/pause.png"))
        : mymusic.pause((icon.src = "/assets/image/play.png"));
    }
  });
}
