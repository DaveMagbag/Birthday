const confettiContainer = document.getElementById('confetti-container');
const videoContainer = document.getElementById('video-container');

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * -100 + 'px'; // Start above the viewport
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 300);

function showVideo() {
    document.querySelector('.click-box').style.display = 'none'; // Hide the button
    document.getElementById('video-container').style.display = 'block'; // Show the video
    document.querySelector('.message').style.display = 'none'; // Hide the message
}

