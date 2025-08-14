import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaChevronDown, FaChevronRight } from "react-icons/fa";
import './QuestionCard.css';

const QuestionCard = ({ question, onUpdate, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="question-card">
      <div className="question-header" onClick={toggleExpand}>
        <span className="question-title">
          {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
          {question.phrase}
        </span>
        <div className="question-actions">
          <button className="action-btn" onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>
            <FaEdit />
          </button>
          <button className="action-btn" onClick={(e) => { e.stopPropagation(); onDelete(question.id); }}>
            <FaTrash />
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="question-content">
          <div className="answers-section">
            <h5>Respuestas</h5>
            <ul>
              {question.responses.map(answer => (
                <li key={answer.id}>
                  {answer.response}
                  <div className="answer-actions">
                    <button className="action-btn-sm"><FaEdit /></button>
                    <button className="action-btn-sm"><FaTrash /></button>
                  </div>
                </li>
              ))}
            </ul>
            <button className="add-answer-btn">
              <FaPlus /> Añadir Respuesta
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
