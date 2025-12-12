function addTask() {
    const newTask = document.createElement("li")
    const taskList = document.getElementById("tasklist")
    const userIn = document.getElementById("inputTask").value.trim();
    if (userIn == '') {
        alert('Enter your data first:)')
        return;
    }
    const span = document.createElement('span')
    span.textContent = userIn
    span.classList.add('spantxt')
    newTask.appendChild(span)


    document.getElementById("inputTask").value = ""
    newTask.appendChild(complete(span))
    deleteTask(newTask)
    taskList.appendChild(newTask)
}
function deleteTask(newTask) {
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function () {
        newTask.remove()
    }
}
function complete(spantxt) {
    const complete = document.createElement('button')
    complete.textContent = 'complete'
    complete.classList.add('complete')
    complete.onclick = function () {
        spantxt.classList.add('comtxt')
    }



    return complete
}
