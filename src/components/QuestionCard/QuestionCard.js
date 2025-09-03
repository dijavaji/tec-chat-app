import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrash, FaPlus, FaChevronDown, FaChevronRight, FaEllipsisV } from "react-icons/fa";
import './QuestionCard.css';

const QuestionCard = ({ question, onUpdate, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [editedPhrase, setEditedPhrase] = useState(question.phrase);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // State for inline editing answers
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [editedAnswerText, setEditedAnswerText] = useState('');

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Disable expand when editing
  const toggleExpand = () => {
    if (!isEditingQuestion) {
      setIsExpanded(!isExpanded);
    }
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    handleEditQuestion(e);
    setIsMenuOpen(false);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(question.id);
    setIsMenuOpen(false);
  };

  const handleEditQuestion = (e) => {
    e.stopPropagation();
    setEditedPhrase(question.phrase); // Reset on opening
    setIsEditingQuestion(true);
  };

  const handleCancelEdit = (e) => {
    e.stopPropagation();
    setIsEditingQuestion(false);
  };

  const handleSaveQuestion = (e) => {
    e.stopPropagation();
    // Here you would call the actual update logic passed via props
    console.log(`Saving new phrase: ${editedPhrase}`);
    // onUpdate({ ...question, phrase: editedPhrase });
    setIsEditingQuestion(false);
  };

  // --- Answer Edit Handlers ---
  const handleEditAnswer = (answer) => {
    setEditingAnswerId(answer.id);
    setEditedAnswerText(answer.response);
  };

  const handleCancelAnswer = () => {
    setEditingAnswerId(null);
    setEditedAnswerText('');
  };

  const handleSaveAnswer = () => {
    console.log(`Saving answer ${editingAnswerId} with text: ${editedAnswerText}`);
    // onUpdateAnswer({ id: editingAnswerId, response: editedAnswerText });
    setEditingAnswerId(null);
    setEditedAnswerText('');
  };

  return (
    <div className="question-card">
      <div className="question-header" onClick={toggleExpand}>
        {isEditingQuestion ? (
          <div className="edit-question-form">
            <input
              type="text"
              value={editedPhrase}
              onChange={(e) => setEditedPhrase(e.target.value)}
              onClick={(e) => e.stopPropagation()} // Prevent header click
              className="form-control"
            />
            <div className="edit-actions">
              <button onClick={handleSaveQuestion} className="btn-save-sm">Guardar</button>
              <button onClick={handleCancelEdit} className="btn-cancel-sm">Cancelar</button>
            </div>
          </div>
        ) : (
          <>
            <span className="question-title">
              {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
              {question.phrase}
            </span>
            <div className="question-actions">
              <div className="context-menu-container">
                <button className="action-btn" onClick={toggleMenu}>
                  <FaEllipsisV />
                </button>
                {isMenuOpen && (
                  <div className="context-menu">
                    <button onClick={handleEditClick} className="menu-item">
                      <FaEdit /> Editar
                    </button>
                    <button onClick={handleDeleteClick} className="menu-item">
                      <FaTrash /> Eliminar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {isExpanded && (
        <div className="question-content">
          <div className="answers-section">
            <h5>Respuestas</h5>
            <ul>
              {question.responses.map(answer => (
                <li key={answer.id}>
                  {editingAnswerId === answer.id ? (
                    <div className="edit-answer-form">
                      <input
                        type="text"
                        value={editedAnswerText}
                        onChange={(e) => setEditedAnswerText(e.target.value)}
                        className="form-control"
                      />
                      <div className="edit-actions">
                        <button onClick={handleSaveAnswer} className="btn-save-sm">Guardar</button>
                        <button onClick={handleCancelAnswer} className="btn-cancel-sm">Cancelar</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {answer.response}
                      <div className="answer-actions">
                        <button onClick={() => handleEditAnswer(answer)} className="action-btn-sm"><FaEdit /></button>
                        <button className="action-btn-sm"><FaTrash /></button>
                      </div>
                    </>
                  )}
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
