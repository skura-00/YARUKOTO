// todo.js

document.getElementById("myInput").addEventListener("keypress", function (e) {
  if (e.key === 'Enter') {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "checkbox";
    li.appendChild(checkbox);

    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";


    var close = document.getElementsByClassName("Cross");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Cross";
    span.appendChild(txt);
    li.appendChild(span);
    
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    
  }
})

