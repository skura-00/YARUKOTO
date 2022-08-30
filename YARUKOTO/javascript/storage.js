// storage.js

// On app load, get all tasks from localStorage
window.onload = loadTasks;
// checkbox -> one checkbox
document.querySelector("input").addEventListener("change", function(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
      if (task.task === event.nextElementSibling.value) {
          task.completed = !task.completed;
      }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling.classList.toggle("completed");
});


// On form submit add task
document.querySelector("input").addEventListener("keypress", e => {
  // e.preventDefault();
  if (e.key === 'Enter') {
    var inputValue = document.getElementById("myInput").value;

    if (inputValue === '') {
      alert("You must write something!");
    } else {
      var li = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      // checkbox.setAttribute("onclick", "document.getElementById('checkbox).addEventListener('click', function { task.completed  = !task.completed;})");
      checkbox.setAttribute('id', 'checkbox');
      checkbox.setAttribute('checked', '');
      checkbox.className = "checkbox";
      li.appendChild(checkbox);

      var t = document.createTextNode(inputValue);
      var textbox = document.createElement("input");
      textbox.setAttribute("type", "text");
      textbox.setAttribute("value", inputValue);
      textbox.className = "inputbox";
      li.appendChild(textbox);

      var close = document.getElementsByClassName("Cross");
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.setAttribute("onclick", "removeTask(this)");
      span.className = "Cross";
      span.appendChild(txt);
      li.appendChild(span);

      document.getElementById("myUL").appendChild(li);

      //Add task to local storage
      //const task = document.querySelector("input");
      localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: inputValue, completed: false }]));
      document.getElementById("myInput").value = "";
    }

    
    // var i;
    // for (i = 0; i < close.length; i++) {
    //   close[i].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //   }
    // }
    
  }
  // addTask();
});


function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.parentNode.children[1].value) {
      // delete task
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}

function loadTasks() {
  // check if localStorage has any tasks
  // if not then return
  if (localStorage.getItem("tasks") == null) return;

  // Get the tasks from localStorage and convert it to an array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // Loop through the tasks and add them to the list
  tasks.forEach(task => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // checkbox.setAttribute("onclick", "document.getElementById('checkbox').addEventListener('click', function { task.completed  = !task.completed;})");
    // checkbox.setAttribute('checked',"${ task.completed ? 'checked' : '' }")
    checkbox.setAttribute('id', 'checkbox');
    //checkbox.set
    // if (task.completed) {
    //   checkbox.checked = true;
    // }
    checkbox.className = "checkbox";
    li.appendChild(checkbox);

    //var t = document.createTextNode(inputValue);
    var textbox = document.createElement("input");
    textbox.setAttribute("type", "text");
    textbox.setAttribute("value", task.task);
    textbox.className = "inputbox";
    li.appendChild(textbox);

    var close = document.getElementsByClassName("Cross");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.setAttribute("onclick", "removeTask(this)");
    span.className = "Cross";
    span.appendChild(txt);
    li.appendChild(span);
    
    document.getElementById("myUL").appendChild(li);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    


    // li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="checkbox" ${task.completed ? 'checked' : ''}>
    //       <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}">
    //       <span class="Cross" onclick="removeTask(this)>\u00D7</span>`;
          
    list.insertBefore(li, list.children[0]);
    
  });
}

//onfocus="getCurrentTask(this)" onblur="editTask(this)">

// function addTask() {
//   const task = document.querySelector("input");
//   const list = document.querySelector("ul");

//   // add task to local storage
//   localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

//   // create list item, add innerHTML and append to ul
//   const li = document.createElement("li");
//   li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
//       <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
//       <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
//   list.insertBefore(li, list.children[0]);
//   // clear input
//   task.value = "";
// }

function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
      
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
  
}

// var i;
// for (i = 0; i < close.length; i++) {
//   checkbox[i].onclick = function() {
//     task.completed = !task.completed;
//   }
// }

// // store current task to track changes
// var currentTask = null;

// // get current task
// function getCurrentTask(event) {
//   currentTask = event.value;
// }

// // edit the task and update local storage
// function editTask(event) {
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
//   // check if task is empty
//   if (event.value === "") {
//     alert("Task is empty!");
//     event.value = currentTask;
//     return;
//   }
//   // task already exist
//   tasks.forEach(task => {
//     if (task.task === event.value) {
//       alert("Task already exist!");
//       event.value = currentTask;
//       return;
//     }
//   });
//   // update task
//   tasks.forEach(task => {
//     if (task.task === currentTask) {
//       task.task = event.value;
//     }
//   });
//   // update local storage
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }