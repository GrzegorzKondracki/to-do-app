const input = document.querySelector('input');
const addTaskBtn = document.querySelector('button');
const ul = document.querySelector('ul');
const lisItems = document.getElementsByClassName('task');
let taskCounter = document.querySelector('span');

const removeBtn = (e) => {
    e.target.parentNode.remove();
    taskCounter.textContent = lisItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    const inputText = input.value;
    if (inputText == '') return;

    let newLi = document.createElement('li');
    newLi.innerHTML = inputText + "<button>usuń</button>"
    newLi.classList.add('task');

    ul.appendChild(newLi);

    taskCounter.textContent = ul.getElementsByTagName('li').length;
    input.value = '';

    newLi.querySelector('button').addEventListener('click', removeBtn);
}

addTaskBtn.addEventListener('click', addTask);
