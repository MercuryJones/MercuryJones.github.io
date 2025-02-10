document.addEventListener("DOMContentLoaded", () => {
    const helloContainer = document.getElementById("hello-container");
    const sayHelloBox = document.getElementById("say-hello");
    const colorPicker = document.getElementById("color-picker");
    const colorDisplay = document.getElementById("color-display");
    const image = document.getElementById("image");

    // Say Hello Functionality
    sayHelloBox.addEventListener("click", () => {
        const hello = document.createElement("p");
        hello.textContent = "hello";
        helloContainer.appendChild(hello);
    });

    // Pick a Color Functionality
    colorPicker.addEventListener("input", () => {
        colorDisplay.style.color = colorPicker.value;
    });

    // Image Change Functionality
    const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
    let imageIndex = 0;

    image.addEventListener("click", () => {
        imageIndex = (imageIndex + 1) % images.length;
        image.src = images[imageIndex];
    });
});
