import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrash, FaPlus, FaChevronDown, FaChevronRight, FaEllipsisV, FaSave, FaWindowClose } from "react-icons/fa";
import './QuestionCard.css';
import AnswerComponent from '../AnswerComponent';

const QuestionCard = ({ question, onUpdate, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [editedPhrase, setEditedPhrase] = useState(question.phrase);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [addingAnswerMode, setAddingAnswerMode] = useState(false);


  // State for inline editing answers
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [editedAnswerText, setEditedAnswerText] = useState('');

  // Disable expand when editing
  const toggleExpand = () => {
    if (!isEditingQuestion) {
      setIsExpanded(!isExpanded);
    }
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

  const handleAddAnswer = ()=>{

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
              <button onClick={handleSaveQuestion} className="action-btn"> <FaSave title="Guardar"/> </button>
              <button onClick={handleCancelEdit} className="action-btn"> <FaWindowClose title="Cancelar"/></button>
            </div>
          </div>
        ) : (
          <>
            <span className="question-title">
              {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
              {question.phrase}
            </span>
            <div className="question-actions">
                <button onClick={handleEditClick} className="action-btn-sm"> <FaEdit /> </button>
                <button onClick={handleDeleteClick} className="action-btn-sm"> <FaTrash /> </button>
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
                        <button onClick={handleSaveAnswer} className="action-btn"><FaSave title="Guardar"/></button>
                        <button onClick={handleCancelAnswer} className="action-btn"><FaWindowClose title="Cancelar"/></button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {answer.response}
                      <div className="answer-actions">
                        <button onClick={() => handleEditAnswer(answer)} className="action-btn-sm"><FaEdit title="Editar"/></button>
                        <button className="action-btn-sm"><FaTrash title="Eliminar"/></button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <button className="add-answer-btn" onClick={() => setAddingAnswerMode(true)}>
              <FaPlus /> Respuesta
            </button>
            {addingAnswerMode && (
              <AnswerComponent initial={null} onSubmit={handleAddAnswer} onCancel={() => setAddingAnswerMode(false)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
