setInterval(function() {
function r(el, deg) {
el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
}
var d = new Date()
r(sec, 6*d.getSeconds())
r(min, 6*d.getMinutes())
r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000)
var currentTime = document.getElementById("currtime");
var timeNow = new Date();
var month = timeNow.getMonth()+1;
if(month < 10)
    month = "0"+month;
var dateString = timeNow.getFullYear() +"."+ (month) +"."+ timeNow.getDate();
currentTime.innerHTML = dateString;
setInterval();





