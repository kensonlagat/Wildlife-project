// Grab DOM elements
const video = document.getElementById('wildlifeVideo');
const videoWrapper = document.getElementById('videoWrapper');
const actionBtn = document.getElementById('actionBtn');

// Track state: Is the video currently "hidden"?
let isVideoHidden = false;

// Button logic (3 Marks)
actionBtn.addEventListener('click', () => {
    // 1. If the video is hidden, unhide it and play it
    if (isVideoHidden) {
        videoWrapper.classList.remove('hidden');
        isVideoHidden = false;
        video.play();
        actionBtn.textContent = "Hide Video";
    } 
    // 2. If it's already visible but paused/not playing, play it
    else if (video.paused) {
        video.play();
        actionBtn.textContent = "Hide Video";
    } 
    // 3. If it is currently playing, hide the video element
    else {
        video.pause(); // Good practice to pause audio when hiding
        videoWrapper.classList.add('hidden');
        isVideoHidden = true;
        actionBtn.textContent = "Show & Play Video";
    }
});

// Sync button text if a user uses the native HTML5 overlay play button
video.addEventListener('play', () => {
    if (!isVideoHidden) {
        actionBtn.textContent = "Hide Video";
    }
});

video.addEventListener('pause', () => {
    if (!isVideoHidden) {
        actionBtn.textContent = "Play Video";
    }
});
