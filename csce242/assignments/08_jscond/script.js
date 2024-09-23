document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('#menu-items li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.exercise').forEach(section => section.classList.remove('active'));
            
            document.querySelector(this.getAttribute('href')).classList.add('active');
        });
    });

    // Color Slider 
    const colorSlider = document.getElementById('color-slider');
    const colorMessage = document.getElementById('color-message');
    const exercise1 = document.getElementById('exercise1');

    colorSlider.addEventListener('input', function() {
        const r = this.value;
        exercise1.style.backgroundColor = `rgb(${r}, 0, 0)`;

        if (r < 85) {
            colorMessage.textContent = "It's a cool red!";
        } else if (r < 170) {
            colorMessage.textContent = "It's a warm red!";
        } else {
            colorMessage.textContent = "It's a hot red!";
        }
    });

    // Picture Chooser
    const buttons = document.querySelectorAll('#exercise2 button');
    const imageContainer = document.getElementById('image-container');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            imageContainer.innerHTML = `<img src="https://picsum.photos/${size}" alt="Random Picture">`;
        });
    });
});
