// slider controls
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const sliderLabel = document.querySelector(".slider-label");

let newLabelText = "PLAY";
let currentLabelText = sliderLabel.textContent; 

//video element
const video = document.querySelector(".video-container");

sliderContainer.addEventListener("click", () => {
    slider.classList.toggle("slider-pause"); 
    sliderLabel.classList.toggle("slider-label-pause");
    sliderLabel.textContent = newLabelText;
    newLabelText = currentLabelText;
    currentLabelText = sliderLabel.textContent;
    video.paused ? video.play() : video.pause();
});
