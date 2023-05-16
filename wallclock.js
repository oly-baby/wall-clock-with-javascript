
 var dateInfo = new Date();
 var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
   min = dateInfo.getMinutes(),
   sec = dateInfo.getSeconds(),
   milsec = dateInfo.getMilliseconds();
   var hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (milsec * 0.36 / 1000);
function setAngle(han, angle) {
  document.querySelector('.' + han).style.transform = "rotate(" + angle + "deg)";
}
  setAngle("hr-han", hrAngle);
  setAngle("min-han", minAngle);
  setAngle("sec-han", secAngle);
 
