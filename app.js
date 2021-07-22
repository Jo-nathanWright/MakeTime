let longTime = 172799
let shortTime = 2879

function timeConvert(time) {
    let minutes = time % 60
    let hours = Math.floor(time / 60)
    let days = 0

    if (hours >= 24) {
        days = Math.floor(hours / 24)
        hours = hours % 24
    }
    //console.log(`${days} days : ${hours} hours : ${addZero(minutes)} minutes`);
    draw(days, hours, addZero(minutes), time)
}

function draw(day, hour, min, time) {
    document.getElementById("ShortTime").innerHTML = `<p>SHORT TIME : <em> ${day} Days : ${hour} Hours : ${min} Minutes </em> - ${time} total minutes</p>`
}

function secsConvert(time) {
    let seconds = time % 60
    let minutes = Math.floor(time / 60)
    let hours = 0
    let days = 0
    if (minutes >= 60) {
        hours = Math.floor(time / 3600)
        minutes = minutes % 60
    }
    if (hours >= 24) {
        days = Math.floor(hours / 24)
        hours = hours % 24
    }
    //console.log(`${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`);
    longDraw(days, hours, addZero(minutes), addZero(seconds), time)
}

function longDraw(day, hour, min, sec, time) {
    document.getElementById("LongTime").innerHTML = `<p>LONG TIME : <em> ${day} Days : ${hour} Hours : ${min} Minutes : ${sec} Seconds </em> - ${time} total seconds</p>`
}

function addZero(num) {
    return num < 10 ? '0' + num : num
}

timeConvert(shortTime)
secsConvert(longTime)