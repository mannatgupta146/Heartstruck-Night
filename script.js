var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];
var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
var music = document.getElementById("backgroundMusic");
var isClicked = false;

// Helper function to get random numbers
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars
for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random();
  starArray.push({ x, y, radius, hue, sat, opacity });
}

// Draw stars
function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

// Update stars (twinkle effect)
function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

// Draw text with line breaks for smaller screens
function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

// Draw text animation
function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25);
  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Of all the places, in all the timelines,",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Of all the places, in all the timelines,",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity -= 0.01;
  }
  if (frameNumber == 600) opacity = 0;

  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I ended up right here, with you.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I ended up right here, with you.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity -= 0.01;
  }
  if (frameNumber == 1200) opacity = 0;

  if (frameNumber > 1200 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "A statistical impossibility. A miracle.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 1800) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "A statistical impossibility. A miracle.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity -= 0.01;
  }
  if (frameNumber == 1800) opacity = 0;

  if (frameNumber > 1800 && frameNumber < 2100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "And somehow, the universe got it right.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }
  if (frameNumber >= 2100 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "And somehow, the universe got it right.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity -= 0.01;
  }
  if (frameNumber == 2400) opacity = 0;

  if (frameNumber > 2400 && frameNumber < 2700) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I don’t need infinity—just you, here and now.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }
  if (frameNumber >= 2700 && frameNumber < 3000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I don’t need infinity—just you, here and now.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity -= 0.01;
  }
  if (frameNumber == 3000) opacity = 0;

  if (frameNumber > 3000 && frameNumber < 3300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "You are my favorite equation, my favorite mystery.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity += 0.01;
  }
  if (frameNumber >= 3300 && frameNumber < 3600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "You are my favorite equation, my favorite mystery.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity -= 0.01;
  }
  if (frameNumber == 3600) opacity = 0;

  if (frameNumber > 3600 && frameNumber < 3900) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    context.fillText(
      "So, tell me… will you keep solving this life with me?",
      canvas.width / 2,
      canvas.height / 2 + 50
    );
    secondOpacity += 0.01;
  }
  if (frameNumber >= 3900 && frameNumber < 4200) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    context.fillText(
      "So, tell me… will you keep solving this life with me?",
      canvas.width / 2,
      canvas.height / 2 + 50
    );
    secondOpacity -= 0.01;
  }
  if (frameNumber == 4200) secondOpacity = 0;

  if (frameNumber > 4200) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    context.fillText(
      "In this universe you have my heart!",
      canvas.width / 2,
      canvas.height / 2 + 120
    );
    thirdOpacity += 0.01;
  }
}

// Handle canvas click
canvas.addEventListener("click", () => {
  if (!isClicked) {
    isClicked = true;
    fetch("send_mail.php")
      .then((response) => {
        if (response.ok) {
          music.play();
        } else {
          console.error("Failed to send email");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

// Main draw function
function draw() {
  context.putImageData(baseFrame, 0, 0);
  drawStars();
  updateStars();
  drawText();
  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

// Handle window resize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

// Start animation
window.requestAnimationFrame(draw);
