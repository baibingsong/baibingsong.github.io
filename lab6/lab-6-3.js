"use strict";

function count() {
    let min = document.getElementById('min').value;
    let sec = document.getElementById('sec').value;
    if (sec > 0) {
        sec--;
    } else if (min > 0) {
        min--;
        sec = 59;
    } else {
        document.body.style.backgroundColor = "red";
    }
    document.getElementById('min').value = min;
    document.getElementById('sec').value = sec;
}

function beginCount() {
    setInterval(count, 1000);
}

window.onload = function() {
    document.getElementById('go').onclick = beginCount;
}