//Collecting elements and setting variables
var arrow = document.getElementById("arrow");
var error = document.getElementById("error");
var countdown = document.getElementById("countdown");
let error_reset_tracker;
let countdown_reset_tracker;
let interval_time;
let delay_time = 4000;

//Helper functions, and reminder of different methods to hide elements
function error_msg(){
    error.style.display="block";
}
function error_over(){
    error.style.display="none";
}

window.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft")
        arrow.src="left.jpg";
    else if (event.key == "ArrowRight")
        arrow.src="right.jpg";
    else if (event.key == "ArrowUp")
        arrow.src="up.jpg";
    else if (event.key == "ArrowDown")
        arrow.src="down.jpg";
    else{
        error_msg();
    }
});