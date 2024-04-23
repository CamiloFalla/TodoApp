import React from 'react';

function Todoloading({ isLoading, error }) {
  if (error) {
    return <div className="todo-loading error">Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div className="todo-loading">Cargando...</div>;
  }

  return null;  // No renderizar nada si no está cargando ni hay error
}

export default Todoloading;
