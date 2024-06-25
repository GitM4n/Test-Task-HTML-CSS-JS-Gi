"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const doneIcon = `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0px" y="0px" viewBox="0 0 375.147 375.147" style="enable-background:new 0 0 375.147 375.147;" xml:space="preserve"><g><g><polygon points="344.96,44.48 119.147,270.293 30.187,181.333 0,211.52 119.147,330.667 375.147,74.667 " fill="#000000" style="fill: rgb(255, 255, 255);"/></g></g></svg>
    `;
    const removeIcon = `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0px" y="0px" viewBox="0 0 94.926 94.926" style="enable-background:new 0 0 94.926 94.926;" xml:space="preserve"><g><path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z" fill="#000000" style="fill: rgb(255, 255, 255);"/></g></svg>
    `;
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo();
    });
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            alert('Task cannot be empty!');
            return;
        }
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = todoText;
        li.appendChild(p);
        const completeButton = document.createElement('button');
        completeButton.innerHTML = doneIcon;
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = removeIcon;
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
