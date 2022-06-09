const btnAddTodo = document.getElementById('btnAddToDo');
const btnDeleteAll = document.getElementById('btnDeleteAll');
const input = document.getElementById('taskName');
const taskList = document.querySelector('.list-group');

let items;
eventListener();
loadData();
function eventListener() {
    // add new todo
    btnAddTodo.addEventListener('click', addNewTodo);
    // delete todo
    taskList.addEventListener('click', deleteTodo);
    // All delete todo
    btnDeleteAll.addEventListener('click', deleteAllTodo);



}
function loadData() {
    let todos = getDataLs();
    // todos=['görev1','görev2' ...]
    todos.forEach(todo => {
        createdTodo(todo)
    });


}
function addNewTodo() {
    let todo = input.value.trim();
    createdTodo(todo);
    setDataLs(todo)
    input.value = '';
    alert('Görev Eklendi !')
}

function createdTodo(todo) {
    //     <li class="list-group-item d-flex justify-content-between">
    //     1. görev
    //     <a href = "#" class="delete-item">
    //         <i class = "fa fa-remove text-danger"></i>
    //     </a>

    // </li>

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.appendChild(document.createTextNode(todo));
    const a = document.createElement('a');
    a.setAttribute('href', '#')
    a.className = 'delete-item';
    a.innerHTML = '  <i class = "fa fa-remove text-danger"></i>'
    li.appendChild(a);
    taskList.appendChild(li);

}

function deleteTodo(e) {
    if (e.target.className == 'fa fa-remove text-danger') {
        e.target.parentElement.parentElement.remove();
        deleteDataLs(e.target.parentElement.parentElement.textContent);
        alert('Görev Silindi !')
    }
    e.preventDefault(); // sayfanınn refresh olmnasnı engeller;
}
function deleteAllTodo(e) {
    // taskList.innerHTML = '';
    let listLength = taskList.children.length;
    for (let i = 0; i < listLength; i++) {
        taskList.children[0].remove();
    }
    alert('Tüm Görevler Silindi !')
    localStorage.removeItem('dataList')
    e.preventDefault(); // sayfanınn refresh olmnasnı engeller;
}

// local strorage => name =  dataList;

function getDataLs() {
    let todos = localStorage.getItem('dataList');
    if (!todos) {
        todos = []
    } else {
        todos = JSON.parse(todos);
    }

    return todos;
}

function setDataLs(text) {
    let todos = getDataLs();
    todos.push(text);
    todos = JSON.stringify(todos);
    localStorage.setItem('dataList', todos)
}

function deleteDataLs(text) {  // text=görev2
    let todos = getDataLs();
    // todos=['görev1','görev2' ...]

    todos.forEach(function (todo, index) {
        if (todo == text.trim()) {
            todos.splice(index, 1)
        }
    })

    localStorage.setItem('dataList', JSON.stringify(todos))

}

