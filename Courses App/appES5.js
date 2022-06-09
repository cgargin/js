// Course Constructor
function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

// UI Contructor
function UI(){

}

UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');

    let html = `
        <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>    
    `;

    list.innerHTML += html;

}

UI.prototype.clearControls = function(){
    const title = document.getElementById('title').value="";
    const instructor = document.getElementById('instructor').value="";
    const image = document.getElementById('image').value="";
}

UI.prototype.deleteCourse = function(element){//Conatins çelmek demektir.
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert =  function(message,className){
    
    let alert = `
        <div class ="alert alert-${className}">
            ${message}
        </div>
    `;

    const row = document.querySelector('.row');
    // BefıreBegin , afterBegin , beforeEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin',alert);//Row girmeden gösterir.

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },3000);
}

document.getElementById('new-course').addEventListener('submit', function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //console.log(title,instructor,image);

    // Create course object
    const course = new Course(title,instructor,image);

    //console.log(course);

    //Create UI
    const ui = new UI();

    if(title==='' || instructor === '' || image === ''){
        ui.showAlert('Please complete the form','warning');
    }
    else{
        // Add course to list
        ui.addCourseToList(course);

        // Clear controls
        ui.clearControls();

        ui.showAlert('the course has been added','succes');
    }

    // Save to database

    // Show on the Uİ

    

    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    //console.log(e.target);
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.deleteCourse(e.target);
    ui.showAlert('the course has been deleted','danger');
});