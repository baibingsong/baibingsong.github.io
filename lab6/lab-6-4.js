function myFunction(){
    var text = document.getElementById("textSize").style.fontSize;
    document.getElementById("textSize").style.fontSize = "12pt";
    setInterval(myTimer,1000);
}
function myTimer() {
    var text = document.getElementById("textSize").style.fontSize;
    if (text <= "24pt") {
        document.getElementById("textSize").style.fontSize = parseInt(text)+ 2 + "pt";
    } else {
        clearTimeout;
    }
}
function fontStyle(){
    var text = document.getElementById("textSize");

    if(document.getElementById("bling").checked== true){

    text.style.fontWeight="bold";
    text.style.color ="green";
    text.style.textDecoration = "underline";
    }
    if(document.getElementById("bling").checked== false){
        text.style.fontWeight = "normal";
        text.style.color ="black";
    text.style.textDecoration = "none";
    }

}