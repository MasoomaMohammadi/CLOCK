function setTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let mAnda = "AM";

    if (h === 0) {
        h = 12
    }

    if (h >= 12) {
        h = h - 12;
        mAnda = "PM";
    };

    let time = h + ":" + m + ":" + s + " " + mAnda;
    document.getElementById("clock").innerHTML = time;
}
setInterval(setTime, 1000);
setTime();
 