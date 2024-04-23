import React from 'react';
import './Modal.css'; // Asegúrate de crear este archivo CSS
import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">Cerrar</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')  // Asegúrate de tener un div con id='modal-root' en tu index.html
  );
}

export default Modal;
