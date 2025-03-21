function final(check) {
 
  textAlign(CENTER, CENTER);

  textSize(70);
  if (check) {
    text("Player LEFT WINS", width / 2, height / 2 + 100);
  } else {
    text("Player RIGHT WINS", width / 2, height / 2 +100);
  }
  noLoop();
}
