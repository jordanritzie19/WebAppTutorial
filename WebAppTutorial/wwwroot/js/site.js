// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

var id = null
var timer = null
// 62 beats per minute, or 1 beat every 0.967741935 seconds
function dance() {
    var elem = document.getElementById("dancer");
    var pos = 0;   //this sets position. '0' is far left, '800' is far right
    var direction = 1;    //this sets direction, if its 1 it moves right, if its -1 it moves left
    clearInterval(id);
    clearInterval(timer);
    bpms = (60 / 62) * 1000;
    framerate = bpms / 60;
    function switcher() {  //switches direction
        direction = direction*-1
    }
    id = setInterval(frame, framerate); //runs frame 60 times per cycle
    function frame() {
        if (pos <= -0.01 | pos >= 800) { //if position is out-of-bounds switch direction
            switcher()
        }
        pos = pos + (direction*(800/60)) //everytime frame runs, position is shifted an equal amount
        elem.style.left = pos + 'px' //this changes 'left' to whatever pos value is.
    }
}
