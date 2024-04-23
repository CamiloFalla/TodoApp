// TodoCounter.js

import React, { useState } from 'react';
import Modal from './Modal/Modal';
import allDoneImage from '../../../images/imagescontent/all-donde.png'; // Ajusta la ruta según sea necesario

function TodoCounter({ total, completed }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        if (completed === total && total > 0) {
            setShowModal(true);
        }
    };

    return (
        <div className="todo-counter">
            
            <h4>Tareas Completadas: {completed} de {total}</h4>
            
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <img src={allDoneImage} alt="All tasks completed" />
                <p>¡Lo lograste, todas las tareas completadas!</p>
            </Modal>
        </div>
    );
}

export { TodoCounter };
