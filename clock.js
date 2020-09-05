function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    let months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }
    if(day < 10){
        day = "0" + day;
    }

    var time = h + ":" + m + ":" + s;
    var callendar = day + " " + month + " " + year;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    document.getElementById("callendar").innerText = callendar;
    document.getElementById("callendar").textContent = callendar;
    setTimeout(showTime, 1000);
}

showTime();

