document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.game-image');
    let currentSound = null;

    images.forEach(image => {
        image.addEventListener('click', () => {
            try {
                // Stop the current sound if it's playing
                if (currentSound) {
                    currentSound.pause();
                    currentSound.currentTime = 0;
                }

                // Get the sound file path from the data-sound attribute
                const soundPath = image.getAttribute('data-sound');
                
                // Create and play the new sound
                currentSound = new Audio(soundPath);
                currentSound.play().catch(error => {
                    console.error('Error playing sound:', error);
                });

                // Add visual feedback
                image.style.animation = 'none';
                image.offsetHeight; // Trigger reflow
                image.style.animation = 'pop 0.3s ease';
            } catch (error) {
                console.error('Error handling click:', error);
            }
        });
    });
}); 