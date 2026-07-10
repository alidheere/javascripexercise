

function addTask(){
    const list = document.querySelector('#list')

const newTask = document.createElement('li')

newTask.textContent= `new task`

list.appendChild(newTask)
}

function removeTask(){


    if(list.lastChild){
         list.removeChild(list.lastChild);
    }else{
        alert `mesha kayaac sxb`
    }
   
}