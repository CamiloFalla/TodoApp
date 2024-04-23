// useTasks.js
import { useState, useEffect } from 'react';

function useTasks(initial = []) {
  const [tasks, setTasks] = useState(() => {
    return [];
  });
  const [isLoading, setIsLoading] = useState(true);  // Estado para manejar la carga
  const [error, setError] =useState(null);

  useEffect(() => {
    setTimeout(() => {  // Simula un pequeño retraso al cargar las tareas
      try {
        const storedTasks = localStorage.getItem('tasks');
        const initialTasks = storedTasks ? JSON.parse(storedTasks) : initial;
        setTasks(initialTasks);
        setIsLoading(false);  // Establece isLoading a false una vez cargadas las tareas
      } catch (err){
        setError(err);
        setIsLoading(false);
      }
      
    }, 2000); // Delay de 1 segundo para visualizar el efecto de carga
  }, []);

  useEffect(() => {
    if (!isLoading) {  // Asegura que no guardamos mientras inicialmente cargamos las tareas
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoading]);

  const addTask = (text) => {
    if (!text) return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
            completedDate: !task.completed ? new Date() : task.completedDate // Only set date if marking as completed
          };
        }
        return task;
      })
    );
  };

  return { tasks, isLoading, error, addTask, removeTask, toggleCompleted };
}

export { useTasks };
