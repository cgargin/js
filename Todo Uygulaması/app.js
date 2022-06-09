const btnAddTodo = document.getElementById("btnAddTodo");//Ekrandaki btnAddTodo oldu.
const btnDeleteAll = document.getElementById("btnDeleteAll");
const input  = document.getElementById("taskName");
const taskList = document.querySelector(".list-grpup");

let item;
eventListener();

function eventListener(){
//Ad New Todo
btnAddTodo.addEventListener('click',addNewTodo);
//Delete Todo
taskList.addEventListener('click',deleteTodo);
//All Delete Todo
btnDeleteAll.addEventListener('click',btnDeleteAll);

}
function loadData(){
    let todos = getDatals();
    todos = ['görevi','görev2']
    todos.forEach(todo => {
        createdTodo(todo)
    });
}
function addNewTodo(){
    let todo = input.value;
    createdTodo(todo)
    input.value = '';
    setDataLs(todo)
}

function createdTodo(todo){

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.appendChild((document.createTextNode)(todo));
    const a = document.createElement('a');
    a.setAttribute('href','#')
    a.className = 'delete-item';
    a.innerHTML = '<i class = "fa fa-remove text-danger"></i>'
    li.appendChild(a);
    taskList.appendChild(li);
}    

function deleteTodo(e){
    if(e.target.className == 'fa fa-remove text-danger'){
        e.target.parentElement.parentElement.remove();
        deleteDatals(e.target.parentElement.parentElement.textContent);
        //console.log(e.target.parentElement.parentElement.textContent);
        //console.log('sil butonu');
    }
    localStorage.removeItem("dataList");
    e.preventDefault();//Sayfanın refresh olmasını engeller;
}

function DeleteAll(){
    //taskList.innerHTML='';//Boş verirsek eğer hepsini siler.
    let listLength = taskList.children.length;
    for (let i=0; i<listLength; i++){
        taskList.children[0].remove;
    }
    e.preventDefault();//Sayfanın refresh olmasını engeller;
}


//console.log('todo-app')

// Local Storage => nam = DataList diye birşeyin içinde tutalım.

function getDatals(){
    let todos = localStorage.getItem('dataList');
    if(todos){
        todos = []
    }
    else {
        todos = JSON.parse(todos);
    }

    return todos;
}

function setDataLs(text){
    let todos = getDatals();
    todos.push(text);
    todos =  JSON.stringify(todos);
    localStorage.setItem('dataList',todos);
}

function deleteDatals(text){ // Text=görev2
    let todos = getDatals();
    todos.forEach(function(todo,index){
        if(todo == text.trim()){
            todos.splice(index,1)
        }
    })
    console.log(todos);//Test
    localStorage.setItem('dataList',JSON.stringify(todos))
}