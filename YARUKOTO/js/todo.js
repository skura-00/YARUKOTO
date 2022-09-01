
// onload function 
window.addEventListener('load', () => {
  tasks = JSON.parse(localStorage.getItem('tasks')) || []; // [] = null?
  // get the form info
  const lists = document.querySelector('#todos'); 

  // Add new todos
  // When 'submit' button is pressed
  // Can be 'enter key'? 
  lists.addEventListener('submit', (e) => {
    e.preventDefault(); //何をしてくれるかわからない

    const newTodo = {
      // Text value, Done
      content: e.target.elements.content.value,
      done: false,
      color: e.target.elements.color.value
    }

    tasks.push(newTodo);
    
    // add new task to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // reset the form
    e.target.reset();

    Display();
  })
  Display();
});

function Display() {
  const list = document.querySelector('#todo-list');
  list.innerHTML = "";

  tasks.forEach(task => {

    // ======== add action ========
    const item = document.createElement('div');
    item.classList.add('item'); // classname?

    // checkbox
    const label = document.createElement('label')
    const check_input = document.createElement('input');
    const check_span = document.createElement('span');

    check_input.type = 'checkbox'; // type = 'checkbox'
    check_input.checked = task.done;
    check_span.classList.add('bubble');
    check_span.setAttribute("id",task.color);

    label.appendChild(check_input);
    label.appendChild(check_span);

    // text value
    const content = document.createElement('div');
    content.classList.add('todo-content');
    var color;
    switch (task.color) {
      case 'blue': color='#BFD9F1;'; break;
      case 'red': color='#f1bfbf;'; break;
      case 'green': color='#c5f1bf;'; break;
    }
    content.innerHTML = `<input type="text" value="${task.content}" readonly style="border-color:${color}">`
                        // <div class="text_underline" readonly></div>` // readonly makes the text unchangable
                        // $(".item .todo-content input").css( { 'boder-color' : task.color });

    // document.querySelector(".item .todo-content input").style.borderColor = '#f1bfbf';
                      

    // remove button
    const actions = document.createElement('div');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');
    actions.classList.add('actions');
    editButton.classList.add('edit');
    removeButton.classList.add('delete');

    editButton.innerHTML = 'Edit';
    removeButton.innerHTML = 'X';


    item.appendChild(label);
    item.appendChild(content);
    actions.appendChild(editButton);
    actions.appendChild(removeButton);
    item.appendChild(actions);
    list.appendChild(item);


    // ======== checkbox action ========
    if(task.done) {
      item.classList.add('done');
    }

    check_input.addEventListener('change', (e) => {
      task.done = e.target.checked; 
      localStorage.setItem('tasks', JSON.stringify(tasks));

      if(task.done) 
        item.classList.add('done')
      else 
        item.classList.remove('done');
      
      Display();
    });


    editButton.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				task.content = e.target.value;
				localStorage.setItem('tasks', JSON.stringify(tasks));
				Display()

			})
		})

    // ======== remove task action ========
    removeButton.addEventListener('click', (e) => {
      tasks = tasks.filter(t => t != task); //'task'以外を'tasks'からget!
      localStorage.setItem('tasks', JSON.stringify(tasks));
      Display();
    })


  })
}