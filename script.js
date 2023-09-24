let hrs = document.getElementById('hrs')
let mins = document.getElementById('mins')
let secs = document.getElementById('secs')



setInterval(function(){
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    secs.innerHTML = currentTime.getSeconds();

}, 1000)


console.log(currentTime)