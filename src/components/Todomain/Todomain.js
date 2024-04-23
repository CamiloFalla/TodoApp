// En Todomain.js

import React, { useState, useEffect } from 'react';
import './Todomain.css';
import { TodoFilter } from './componentsTodo/TodoFilter';
import { TodoItem } from './componentsTodo/TodoItem';
import { TodoCounter } from './componentsTodo/TodoCounter';
import { useTasks } from './componentsTodo/useTask';  // Asegúrate que el nombre del archivo importado es correcto
import { useDarkMode } from './componentsTodo/useDarkMode';
import Todoloading from './componentsTodo/Todoloading';
import Modal from './componentsTodo/Modal/Modal';
import emptyListImage from '../../images/imagescontent/no-tasks.png'
import allDoneImage from '../../images/imagescontent/all-donde.png'

function Todomain() {
  const { tasks, isLoading, error, addTask, removeTask, toggleCompleted } = useTasks();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [currentSearchText, setCurrentSearchText] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [lastCompleted, setLastCompleted] = useState(null);
  const [completedTasksModal, setCompletedTasksModal] = useState([]);

  useEffect(() => {
    if (currentSearchText.trim()) {
      const searchResults = tasks.filter(task =>
        task.text.toLowerCase().includes(currentSearchText.toLowerCase())
      );
      setFilteredTasks(searchResults);
    } else {
      setFilteredTasks(tasks); // Restablece a todas las tareas cuando no hay texto
    }
  }, [currentSearchText, tasks]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const handleAddTask = (text) => {
    addTask(text);
    setCurrentSearchText('');  // Limpia el texto de búsqueda cada vez que se añade una nueva tarea
  };
  const handleComplete = (task) => {
    toggleCompleted(task.id);
    setLastCompleted({ ...task, completedDate: new Date() });
    setModalIsOpen(true);
  }

  useEffect(() => {
    setCompletedTasksModal(tasks.filter(task => task.completed));
  }, [tasks]);

  const handleShowCompletedTasks = () => {
    setModalIsOpen(true);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Todoloading isLoading={isLoading} error={error} />
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        Modo {isDarkMode ? 'Claro' : 'Oscuro'}
      </button>

      <TodoCounter total={totalTasks} completed={completedTasks} />
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h2>Completadas todas las Tareas</h2>
        <ul>
          {completedTasksModal.map(task => (
            <li key={task.id}>
              {task.text} - Completed on: {task.completedDate ? new Date(task.completedDate).toLocaleString() : 'Date not set'}
            </li>
          ))}
        </ul>
      </Modal>
      <button className="add-task-button" onClick={handleShowCompletedTasks}>
        Mostrar las tareas completadas
      </button>
      <TodoFilter addTask={handleAddTask} searchTasks={setCurrentSearchText} />   
      {filteredTasks.length === 0 && currentSearchText && (
        <div className="empty-list">
          <img src={emptyListImage} alt="No tasks found" />
          <p>¡Ninguna tarea coincide con tu búsqueda!</p>
        </div>
      )}

      {completedTasks === totalTasks && totalTasks !== 0 && (
        <div className="all-done">
          <img src={allDoneImage} alt="All tasks completed" />
          <p>Felicidades todas las tareas estan completas!</p>
        </div>
      )}

      {filteredTasks.length > 0 && (
        <ul>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onToggleCompleted={toggleCompleted}
              onRemoveTask={removeTask}
            />
          ))}
        </ul>
      )}

      {filteredTasks.length === 0 && !currentSearchText && (
        <div className="empty-list">
          <img src={emptyListImage} alt="No tasks" />
          <p>Agrega una tarea para comenzar!</p>
        </div>
      )}
    </div>
  );
}

export default Todomain;
