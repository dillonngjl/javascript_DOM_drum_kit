// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
//
//     //what happens when button is clicked
// });

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",  function () {
        // alert("I got clicked!");

        playAudio(this.innerHTML);
        playAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    // console.log(event);
    playAudio(event.key);
    playAnimation(event.key);
})

function playAudio(key) {
    switch (key) {
        case "w":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "a":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "s":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            console.log(key);
            break;
    }
}

function playAnimation(key) {
    let activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}