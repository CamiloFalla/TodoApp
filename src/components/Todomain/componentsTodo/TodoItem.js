// TodoItem.js

import React from 'react';
import { ReactComponent as IconSVG } from './../../../images/icons/greencheck.svg';


function TodoItem({ id, text, completed, onToggleCompleted, onRemoveTask }) {
    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
            <div className="completecheck">
                <span onClick={() => onToggleCompleted(id)} className="toggle">
                    {completed ? <IconSVG /> : <div className='placeholdercheck'></div>}
                </span>
            </div>
                
            <p>{text}</p>
            <button onClick={() => onRemoveTask(id)} className="remove">
                Eliminar
            </button>
        </li>
    );
}

export { TodoItem };
