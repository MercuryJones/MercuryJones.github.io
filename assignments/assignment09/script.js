// Image Data
const images = {
    "It's my birthday": "birthday.jpg",
    "Clowning Around": "clown.jpg",
    "It's raining": "rain.jpg",
    "I am reading": "read.jpg",
    "Keep on diggin'": "shovel.jpg",
    "Working away": "work.jpg"
};

// Load images on page load
window.onload = () => {
    const gallery = document.getElementById("gallery");

    for (const [title, file] of Object.entries(images)) {
        const box = document.createElement("div");
        box.className = "img-box";

        const img = document.createElement("img");
        img.src = `images/${file}`;
        img.alt = title;

        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.innerText = title;

        box.appendChild(img);
        box.appendChild(overlay);
        gallery.appendChild(box);

        // Show modal on click
        img.onclick = () => {
            document.getElementById("modal").classList.remove("hidden");
            document.getElementById("modal-title").innerText = title;
            document.getElementById("modal-img").src = `images/${file}`;
        };
    }

    // Close modal
    document.getElementById("close").onclick = () => {
        document.getElementById("modal").classList.add("hidden");
    };
};
