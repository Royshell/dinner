document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('hover-img');
    const audio = document.getElementById('theme-song');
    
    img.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            img.classList.add('colored');
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset the audio to the beginning
            img.classList.remove('colored');
        }
    });

    audio.addEventListener('ended', () => {
        img.classList.remove('colored');
    });
});
