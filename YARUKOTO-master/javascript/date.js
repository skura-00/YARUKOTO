//date.js



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
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()+"-"+day;
document.getElementById("p1").innerHTML = current_date;

