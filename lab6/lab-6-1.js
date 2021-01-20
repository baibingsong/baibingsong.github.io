(function () {
    let animation = null;
    let currentAminationText;
    let delay = 250;
    let timer = null;
    let index = 0;

    window.onload = function () {
        let showArea = document.getElementById("showArea");

        let btnStart = document.getElementById("btnStart");
        btnStart.onclick = start;

        let btnStop = document.getElementById("btnStop");
        btnStop.onclick = stop;

        let slctAnimation = document.getElementById("slctAnimation");
        slctAnimation.onchange = changeAnimationText;
        slctAnimation.selectedIndex = 0;

        let slctFont = document.getElementById("slctFont");
        slctFont.onchange = changeFontSize;
        slctFont.selectedIndex = 2;

        let chkSpeed = document.getElementById("chkSpeed");
        chkSpeed.onchange = changeDelay;
    };

    function start() {
        switchSS('start');
        currentAminationText = showArea.value;
        if (timer === null) {
            timer = setInterval(changeFrame, delay);
        }

    }

    function stop() {
        switchSS('stop');
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
        index =0;
        restoreOrininalText();
    }

    function changeAnimationText() {
        let selected = slctAnimation.options[slctAnimation.selectedIndex].value;
        animation = ANIMATIONS[selected];


        showArea.value = animation;
    }

    function changeFontSize() {
        showArea.style.fontSize = slctFont.options[slctFont.selectedIndex].value;
    }

    function changeDelay() {
        if (chkSpeed.checked) {
            delay = 50;
            clearInterval(timer);
            timer = setInterval(changeFrame, delay);
        }
        else {
            delay = 250;
            clearInterval(timer);
            timer = setInterval(changeFrame, delay);
        }
    }

    function switchSS(state) {
        if (state === 'start') {
            btnStart.disabled = true;
            btnStop.disabled = false;

            slctAnimation.disabled = true;
        } else if (state === 'stop') {
            btnStart.disabled = false;
            btnStop.disabled = true;

            slctAnimation.disabled = false;
        }
    }

    function changeFrame() {

        let frames = currentAminationText.split("=====\n");
        showArea.value = frames[index];
        index++;

        if (index === frames.length)
            index = 0;
    }
    
    function restoreOrininalText(){
        showArea.value = currentAminationText;
    
    }
})();