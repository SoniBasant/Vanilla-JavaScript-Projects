
// 5. To do list

/*
Important concepts for project
1. document.getElementById()
2. addEventListener('click')
3. e.target
4. appendChild()
5. createElement()
6. parentElement()
7. .remove()
8. classList.add()
9. .value
10. if...else
11. style.textDecoration
12. .matches()
*/

// variables

const addTask = document.getElementById('add-task'); //button
const taskContainer = document.getElementById('task-container'); //container
const inputTask = document.getElementById('input-task'); //input text

// event listener for add button

addTask.addEventListener('click', function(){
    // create div of task
    let task = document.createElement('div');
    // add the style of 'task' in task
    task.classList.add('task');

    // create list item for the div
    let li = document.createElement('li');
    // take the text of list item
    li.innerText = (inputTask.value);
    // add list item text to task
    task.appendChild(li);

    // add check icon button for list item
    // create check button
    let checkButton = document.createElement("button");
    // icon for check
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    // give this icon the style of 'checkTask'
    checkButton.classList.add('checkTask');
    // add this icon to the task
    task.appendChild(checkButton);

    // create delete button
    let deleteButton = document.createElement("button");
    // icon for delete button
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    // give delete icon the style of 'deleteTask'
    deleteButton.classList.add('deleteTask');
    // add delete button to the task
    task.appendChild(deleteButton);

    // condition to check for empty entry
    if(inputTask.value === "") {
        // message to enter some task if it is not present
        alert('Please Enter a task');
    } else {
        // add that task to task container
        taskContainer.appendChild(task);
    }

    // after adding, make you input empty
    inputTask.value = "";


    // event listener for icons
    // line-through functionality for check button
    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    // deleting the task functionality for delete button
    deleteButton.addEventListener('click', function(e){
        // to select the element that trigger the event
        let target = e.target;

        // if we clicked on button
        if(target.matches('button')) {
            target.parentElement.remove();
        }

        // if we clicked on icon
        if(target.matches('i')) {
            target.parentElement.parentElement.remove();
        }
    });

});
