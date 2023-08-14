class Task{
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status
    }
    
}
class TaskList{
    constructor(){
        this.Tasks = [];
    }

    addTask(param) {
        this.Tasks.push(param);
        }

}
 const VeryBigTaskList = new TaskList

function createTask(){
    const tasktitle = document.getElementById("newTask").value;

    const task = new Task(1, tasktitle, false);
    VeryBigTaskList.addTask(task);
    rendertasks()
    console.log(task).VeryBigTaskList
}


function rendertasks(){
    let elements = '';
}
 VeryBigTaskList.task.array.forEach(task => {
    elements +=`
<li id="${task.id}">
    <span id="${task.id}--title">${task.title}</span>
    <div>
    <button id="${task.id}--button" class="action"
    onclick="doneTask((${task.id}))"><i class="fa-solid fa-check"></i>
    </button>
    <button class="action edit" onclick="editTask(${task.id})"><i class="fa-solid fa-pencil"></i></button>
    <button class="action remove" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
    </li>
    `;
 });
 
 document.getElementById("list").innerHTML = element;


 function deleteTask(id){
    VeryBigTaskList.removeTask(id);
    rendertasks();
 }
console.log


