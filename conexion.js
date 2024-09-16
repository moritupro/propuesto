document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addTaskBtn').addEventListener('click', function() {
        const taskInput = document.getElementById('newTask');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskList = document.getElementById('taskList');

            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(newTask);
            });

            newTask.appendChild(deleteBtn);
            taskList.appendChild(newTask);

            taskInput.value = ''; // Limpiar el campo de entrada
        }
    });
});