document.getElementById('draw-stars').addEventListener('click', () => {
    const starCanvas = document.getElementById('star-canvas');
    const starCount = parseInt(document.getElementById('star-count').value);
    const errorMessage = document.getElementById('error-message');
    const messageBox = document.getElementById('message-box');
    
    
    starCanvas.innerHTML = '';
    errorMessage.style.display = 'none';
    messageBox.textContent = '';

    
    if (isNaN(starCount) || starCount < 0) {
        errorMessage.style.display = 'block';
        return;
    }

    
    for (let i = 1; i <= starCount; i++) {
        const star = document.createElement('span');
        star.innerHTML = '&#9733;'; // Unicode for star symbol
        star.classList.add('star');

        // Randomly position the star within the canvas bounds
        const x = Math.random() * (starCanvas.clientWidth - 30);
        const y = Math.random() * (starCanvas.clientHeight - 30);
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        star.addEventListener('click', () => {
            messageBox.textContent = `You clicked on star number ${i} out of ${starCount} stars.`;
        });

        starCanvas.appendChild(star);
    }
});
