//função de adição
function addTask(){
    const taskTitle = document.querySelector("#task-title").value

    if (taskTitle){
        //clonar o template existente
        const template = document.querySelector(".template")
        const newTask = template.cloneNode(true)
        
        //adicionar titulos
        newTask.querySelector(".task-title").textContent = taskTitle

        //remover classes
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adiciona tarefa na lista
        const list = document.querySelector("#task-list")
        list.appendChild(newTask)

        //evento de REMOVER
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this)
        })

        //COMPLETAR tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this)
        })

        //limpar o texto
        document.querySelector("#task-title").value = ""
    }
}

//função de remover
function removeTask(task){
    task.parentNode.remove(true)
}

//função de completar
function completeTask(task){
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("done")
}

const addBtn = document.querySelector("#add-btn");
//variável "addBtn" recebendo o valor de "#add-btn" do HTML

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    
    addTask();

} );