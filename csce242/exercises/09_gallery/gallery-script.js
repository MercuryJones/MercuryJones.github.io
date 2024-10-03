// every one second, go through and move the class of highlighted through the gallery

// const highlighted = () => {
//     const currentHigh = document.querySelector(".columns section :not(.hidden)");
//     let nextHigh = currentHigh.nextElementSibling;

//     if(nextHigh == null) {
//         nextHigh = document.querySelector("#columns section :first-child");
//     };

//     currentHigh.classList.add(".hidden");
//     nextHigh.classList.remove("hidden");

// };
// setInterval(highlighted, 1000);

setInterval(()=>{
    let currentSection = document.querySelector(".items section.highlighted");

    //highlight the first item
    if(currentSection == null) {
        document.querySelector(".items section").classList.add("highlighted");
        return;
    }

    let nextSection = currentSection.nextElementSibling;

    //hit the end
    if(nextSection == null){
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");
}, 1500);