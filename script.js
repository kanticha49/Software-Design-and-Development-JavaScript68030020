document.getElementById('btn3').onclick = function() {
    var now = new Date();
    var time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ':' + (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
    alert('เวลาปัจจุบัน: ' + time);
};
