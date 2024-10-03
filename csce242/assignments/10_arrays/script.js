
const imageArray = [
    {
        src: 'images/birthday.jpg',
        title: 'Birthday Celebration',
        description: 'A fun birthday celebration.'
    },
    {
        src: 'images/clown.jpg',
        title: 'Clown Performance',
        description: 'A funny clown entertaining the crowd.'
    },
    {
        src: 'images/rain.jpg',
        title: 'Rainy Day',
        description: 'I think its time to bring your umbrella.'
    },
    {
        src: 'images/read.jpg',
        title: 'Reading Time',
        description: 'Enjoying a good book under a tree.'
    },
    {
        src: 'images/shovel.jpg',
        title: 'Shovel Work',
        description: 'A person shoveling dirt.'
    },
    {
        src: 'images/work.jpg',
        title: 'Work',
        description: 'A typical day with computers.'
    }
];


window.addEventListener('load', () => {
    const gallery = document.getElementById('imageGallery');
    
    imageArray.forEach((image, index) => {
        
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = `Image ${index + 1}`;
        
        
        imgElement.addEventListener('click', () => {
            document.getElementById('imageTitle').textContent = image.title;
            document.getElementById('imageDescription').textContent = image.description;
        });
        
        
        gallery.appendChild(imgElement);
    });
});
