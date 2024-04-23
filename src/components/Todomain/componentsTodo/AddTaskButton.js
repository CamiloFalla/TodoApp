// AddTaskButton.js

import React from 'react';

function AddTaskButton({ onAddTask }) {
    return (
        <button onClick={onAddTask} className="add-task-button">
            Añadir Tarea
        </button>
    );
}

export { AddTaskButton };
