const body = document.getElementById("body");

const display = document.getElementById("screenWidth");

screenCheck();

function screenCheck() {
  display.innerHTML = body.offsetWidth;
  setTimeout(screenCheck, 0.5);
}
