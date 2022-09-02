var date = new Date();
var day = date.getDay();
switch (day) {
    case 0: day = "SUN"; break;
    case 1: day = "MON"; break;
    case 2: day = "TUE"; break;
    case 3: day = "WED"; break;
    case 4: day = "THU"; break;
    case 5: day = "FRI"; break;
    case 6: day = "SAT"; break;
}

var yr = date.getFullYear();
var m = (date.getMonth()+1);
var d = date.getDate();


document.getElementById("date").innerHTML = m+'/'+d;
document.getElementById("day").innerHTML = day;