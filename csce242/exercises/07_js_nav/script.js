/* when the hamburger is clicked, toggle between showing and hiding the nav items*/

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Dont go to links destination when clicked */

document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //Dont go to links destination
    console.log("you clicked a link");
};

document.getElementById("txt-color").onchange = (e) => {
    // document.getElementById("ball").style.setProperty("background-color", e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
};


/* Move the ball down when the button is clicked */

let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
};

/* Show color message */
document.getElementById("btn-show-color").onclick = () => {
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    
    if (color == "red"){
        mood = "angrrr";
    }
    else if(color == "blue"){
        mood = "sad";
    }
    else {
        mood = "undefined";
    }

    messageP.innerHTML = `You chose ${color} so you are ${mood}`;
};

/* Donations */
/* Get the number
-If it is not a number, or negative, show an error in the error
Otherwisefirst show teh percent out of 10000 towards goal
Next show a visual representation with a box and a gradient*/



document.getElementById("btn-donate").onclick = () => {
    const goal = 10000
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = "";

    if(isNaN(donation) || donation <=  0) {
        error.innerHTML = "* Invalid Donation";
        return;
    }

    const percentGoal = donation / goal * 100;
    console.log(percentGoal + "%");
    document.querySelector(":root").style.setProperty("--funds", percentGoal + "%");
    

};