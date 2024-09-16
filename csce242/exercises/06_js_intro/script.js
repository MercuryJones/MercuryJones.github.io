const doStuff = () => {
    alert("Hello!");
}

const button = document.getElementById("btn_click");
//button.onclick = doStuff;

button.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
};

//add a second button, called beer
//when clicked change the text to goodbye everyone and remove the special

const button2 = document.getElementById("beer");
button2.onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye";
    document.getElementById("stuff").classList.remove("special");
};

const hide = document.getElementById("hide");
hide.onclick = () => {
    document.getElementById("hide").classList.add("hide");
}

//showing data from an input field

// document.getElementById("txt-first-name").onkeyup = () => {
//     //console.log("hello john");  use this to help check if code is updating
//     const textBox = document.getElementById("txt-first-name");
//     document.getElementById("result").innerHTML = textBox.value;
// };

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
}