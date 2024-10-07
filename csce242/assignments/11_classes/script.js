class Bear {
    constructor(name, species, habitat, diet, lifespan, imageFile, saying) {
        this.name = name;
        this.species = species;
        this.habitat = habitat;
        this.diet = diet;
        this.lifespan = lifespan;
        this.imageFile = imageFile;
        this.saying = saying;
    }

    getSection() {
        return `
            <section class="bear-section">
                <img src="images/${this.imageFile}" alt="${this.name}">
                <h3>${this.name}</h3>
            </section>`;
    }

    getExpandedSection() {
        return `
            <section class="bear-expanded">
                <div>
                    <h3>${this.name}</h3>
                    <p><strong>Species:</strong> ${this.species}</p>
                    <p><strong>Habitat:</strong> ${this.habitat}</p>
                    <p><strong>Diet:</strong> ${this.diet}</p>
                    <p><strong>Lifespan:</strong> ${this.lifespan} years</p>
                    <p><strong>Saying:</strong> "${this.saying}"</p> <!-- Display the bear's saying -->
                </div>
                <img src="images/${this.imageFile}" alt="${this.name}">
            </section>`;
    }
}


const bears = [
    new Bear('Grizzly Bear', 'Ursus arctos horribilis', 'Forests, Mountains', 'Fish, mammals, plants', 25, 'grizzly.jpg', 'If it is brown, lie down.'),
    new Bear('Polar Bear', 'Ursus maritimus', 'Arctic regions', 'Seals, fish, birds', 30, 'polar.jpg', 'If the bear is white, say goodnight.'),
    new Bear('Panda Bear', 'Ailuropoda melanoleuca', 'Mountain forests', 'Bamboo, fruits', 20, 'panda.jpg', 'Run and play, bamboo all the way.'),
    new Bear('Black Bear', 'Ursus americanus', 'Forests, swamps', 'Plants, insects, fish', 20, 'blackbear.jpg', 'If it is black, fight back.')
];


const bearContainer = document.getElementById('bearContainer');


bears.forEach(bear => {
    const bearSection = document.createElement('div');
    bearSection.innerHTML = bear.getSection();
    bearSection.classList.add('bear-box');

    
    bearSection.addEventListener('click', () => {
        document.getElementById('modalContent').innerHTML = bear.getExpandedSection();
        document.getElementById('bearModal').style.display = 'block';
    });

    bearContainer.appendChild(bearSection);
});

