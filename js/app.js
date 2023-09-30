(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let seconds = 599;
    function updateTimer() {
        const timerElementMin = document.querySelector(".pre-2__min");
        const timerElementSec = document.querySelector(".pre-2__sec");
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const remainingSecond = seconds % 10;
        console.log(remainingSecond);
        const displaySeconds = remainingSeconds < 10 ? `${remainingSeconds}` : remainingSeconds;
        if (remainingSeconds < 10) timerElementSec.innerHTML = `<span>${displaySeconds}</span>`; else timerElementSec.innerHTML = `<span>${displaySeconds}</span>`;
        if (minutes < 10) timerElementMin.innerHTML = `<span>${minutes}</span>`; else timerElementMin.innerHTML = `<span>${minutes}</span>`;
        if (seconds === 0) clearInterval(timerInterval); else seconds--;
    }
    const timerInterval = setInterval(updateTimer, 1e3);
    updateTimer();
    window["FLS"] = true;
    isWebp();
})();