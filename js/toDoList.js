// import * from 'ToDOListFunctions.js';

//wrappers

const btnContainer = document.createElement('div');
const tasksDiv = document.createElement('div');
const doneDiv = document.createElement('div');
const tasks = document.createElement('div');

//buttons

const btnTasks = document.createElement('button');
const btnDone = document.createElement('button');
const btnAdd = document.createElement('button');

btnTasks.classList.add('btn-tasks');
btnDone.classList.add('btn-done');
btnAdd.classList.add('btn-add');

btnTasks.textContent = 'Tasks';
btnDone.textContent = 'Done';
btnAdd.textContent = 'Add';

//form

const form = document.createElement('form');
const input = document.createElement('input');

// functions

function defaultSettings() {
  tasksDiv.style.display = 'block';
  doneDiv.style.display = 'none';
}

defaultSettings();

function addTask() {
  const btnMarkDone = document.createElement('button');
  btnMarkDone.classList.add('btn-mark');
  btnMarkDone.textContent = 'Mark as done';

  const p = document.createElement('p');
  let taskText = input.value;
  p.textContent = taskText;

  btnMarkDone.addEventListener('click', (event) => {
    const doneP = document.createElement('p');
    const btnDelete = document.createElement('button');

    doneP.textContent = taskText;
    btnDelete.textContent = 'delete';

    btnDelete.addEventListener('click', (event) => {
      doneP.remove();
    });

    doneDiv.append(doneP);
    doneDiv.append(btnDelete);
  });
  tasks.append(p);
  tasks.append(btnMarkDone);
  tasksDiv.append(tasks);

  console.log(taskText);
}

function deleteTask() {
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-delete');
  btnDelete.textContent = 'Delete';
  doneDiv.append(btnDelete);
}

function addDone() {
  doneDiv.append(p);
}

function showTasks() {
  tasksDiv.style.display = 'block';
  doneDiv.style.display = 'none';
}

function showDone() {
  tasksDiv.style.display = 'none';
  doneDiv.style.display = 'block';
}

btnContainer.addEventListener('click', (event) => {
  console.log(event.target);

  if (event.target.classList == 'btn-tasks') {
    console.log('showing tasks');
    showTasks();
  } else if (event.target.classList == 'btn-done') {
    console.log('showing done');
    showDone();
  } else if (event.target.classList == 'btn-mark') {
    addDone();
  }
});

form.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList == 'btn-add') {
    addTask();
  }
});

//pushing elements

btnContainer.append(btnTasks);
btnContainer.append(btnDone);

form.append(input);
form.append(btnAdd);

document.body.append(btnContainer);
document.body.append(tasksDiv);
document.body.append(doneDiv);
document.body.append(form);
