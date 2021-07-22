let time = 1865

function timeConvert(time) {
    let minutes = time % 60
    let hours = Math.floor(time / 60)
    let days = 0

    if (hours >= 24) {
        days = Math.floor(hours / 24)
        hours = hours % 24

    }
    console.log(`${days} days : ${hours} hours : ${addZero(minutes)} minutes`);
    draw(days, hours, addZero(minutes))
}

function addZero(num) {
    return num < 10 ? '0' + num : num
}

function draw(day, hour, min) {
    document.getElementById("days").innerText = day
    document.getElementById("hours").innerText = hour
    document.getElementById("mins").innerText = min
}

timeConvert(time)