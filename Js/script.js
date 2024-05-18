const screenshots = [
  "assets/screenshot1.png",
  "assets/screenshot2.png",
  "assets/screenshot3.png",
  "assets/screenshot4.png",
];

let currentImageIndex = 0;

function changeImage() {
  const overlayImage = document.getElementById("overlayImage");
  overlayImage.style.opacity = 0;
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % screenshots.length;
    overlayImage.src = screenshots[currentImageIndex];
    overlayImage.style.opacity = 1;
  }, 500);
}

setInterval(changeImage, 5000);
