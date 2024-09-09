const todoList = [{
  name: 'make hair', 
  dueDate: '2024-07-08'}, 
  {name: 'wash ass',
  dueDate: '2024-07-09'}
];
renderTodoList();
function renderTodoList () {
let todoListHTML = '';

todoList.forEach( (todoObject, index) => {
  const {name, dueDate} = todoObject;
  
  const html = `
  <div>${name}</div> 
  <div>${dueDate}</div> 
  <button class="del-butt js-del-butt">Delete</button>
  `;
  todoListHTML += html;
});

document.querySelector('.js-div').innerHTML = todoListHTML;

document.querySelectorAll('.js-del-butt').forEach(
  (deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
  renderTodoList();
    })
  });
}

document.querySelector('.js-add').addEventListener('click', () => {
  addTodo();
});


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  let name = inputElement.value;

  const dateInputElement = document.querySelector('.js-duedate');
  const dueDate = dateInputElement.value;

  todoList.push(
    {
      name,
      dueDate
    }
  );
  

  name = '';
  renderTodoList();
}