//TodoFilter.js
// TodoFilter.js

import React, { useState } from "react";
import { AddTaskButton } from './AddTaskButton';

function TodoFilter({ addTask, searchTasks }) {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
      setInputText(e.target.value);
      searchTasks(e.target.value); // Asegúrate que esta llamada es válida
    };

    const handleAddTask = () => {
      addTask(inputText);
      setInputText(''); // Limpia el campo después de añadir la tarea
    };

    return (
      <div className="todo-filter-container">
        <input
          type="text"
          placeholder="Añade o busca una tarea"
          value={inputText}
          onChange={handleInputChange}
        />
        <AddTaskButton onAddTask={handleAddTask} />
      </div>
    );
}

export { TodoFilter };
