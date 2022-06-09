//ES6
//Course class
class Course{
    constructor(title, instructor, image){
        this.courseId = Math.floor(Math.random()*10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image = image;

    }
}
//UI class
class UI {
    addCourseToList(course){
        const list = document.getElementById('course-list');

        let html = `
            <tr>
                <td><img src="img/${course.image}"/></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
            </tr>    
        `;

    list.innerHTML += html;
    }
    clearControls(){
        const title = document.getElementById('title').value="";
        const instructor = document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";
    }
    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
            return true;
        }
    }
    showAlert(message, className){
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
}

class Storage {
    static getCourses(){
        let courses;

        if(localStorage.getItme('courses')===mull){
            courses=[];
        }        
        else{
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }
    static displayCoruses(){
        const courses = Storage.getCourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course);
        });
    }
    static addCourse(course){
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));
    }
    static deleteCourse(element){
        if(element.classList.contains('delete')){
            const id = element.getAttribute('data-id');
            //console.log(id);
            const courses = Storage.getCourses();
            course.forEach((course,index)=>{
                if(course.courseId == id){
                    courses.splice(index,1);
                }
            });
            localStorage.setItem('courses',JSON.stringify(courses));
        }
    }
}
document.addEventListener('DOMContentLoaded',Storage.deleteCourses);

document.getElementById('new-course').addEventListener('submit', function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //console.log(title,instructor,image);

    // Create course object
    const course = new Course(title,instructor,image);

    //console.log(course);

    //console.log(course);

    //Create UI
    const ui = new UI();

    //console.log(ui);

    if(title==='' || instructor === '' || image === ''){
        ui.showAlert('Please complete the form','warning');
    }
    else{
        // Add course to list
        ui.addCourseToList(course);

        // Save to LS
        Storage.addCourse(course);

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

    // Delete Course
    if(ui.deleteCourse(e.target)==true){
        //Delete form Ls
        //ui.deleteCourse(e.target);
        Storage.deleteCourse(e.target);
        ui.showAlert('the course has been deleted','danger');
    };

    
});