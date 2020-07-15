'use strict'

function clock () {
    let tm = new Date();
    let h = tm.getHours();
    let m = tm.getMinutes();
    let s = tm.getSeconds();

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m; 
    s = (s < 10) ? `0${s}` : s;

    let timeBlock = document.querySelector('.time');
    let colorBlock = document.querySelector('.color');
    timeBlock.innerHTML = `${h}:${m}:${s}`;
    colorBlock.innerHTML = `#${h}${m}${s}`

    document.body.style.backgroundColor = `#${h}${m}${s}`;
}

(function () {
    setInterval(() => clock(), 1000);
})();