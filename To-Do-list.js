const todoList = [{
  name: 'make hair', 
  dueDate: '2024-07-08'}, 
  {name: 'wash ass',
  dueDate: '2024-07-09'}
];
renderTodoList();
function renderTodoList () {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  const {name, dueDate} = todoObject;
  
  const html = `
  <div>${name}</div> 
  <div>${dueDate}</div> 
  <button onclick="
  todoList.splice(${i}, 1);
  renderTodoList();
  " class="del-butt">Delete</button>
  `;
  todoListHTML += html;
}

document.querySelector('.js-div').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-duedate');
  const dueDate = dateInputElement.value;

  todoList.push(
    {
      name,
      dueDate
    }
  );
  

  inputElement.value = '';
  renderTodoList();
}