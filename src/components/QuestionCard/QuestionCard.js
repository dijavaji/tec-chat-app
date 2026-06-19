import React, { useState } from 'react';
import { 
  IoChevronDown, 
  IoChevronForward, 
  IoCreateOutline, 
  IoTrashOutline, 
  IoSaveOutline, 
  IoCloseOutline, 
  IoAddOutline 
} from "react-icons/io5";
import './QuestionCard.css';
import AnswerComponent from '../AnswerComponent';

const QuestionCard = ({ question, onUpdate, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [editedPhrase, setEditedPhrase] = useState(question.phrase);
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
    setEditedPhrase(question.phrase);
    setIsEditingQuestion(true);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(question.id);
  };

  const handleCancelEdit = (e) => {
    e.stopPropagation();
    setIsEditingQuestion(false);
  };

  const handleSaveQuestion = (e) => {
    e.stopPropagation();
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
    // Placeholder for handleAddAnswer
  };

  return (
    <div className={`question-card ${isExpanded ? 'is-expanded' : ''}`}>
      <div className="question-header" onClick={toggleExpand}>
        {isEditingQuestion ? (
          <div className="edit-question-form">
            <input
              type="text"
              value={editedPhrase}
              onChange={(e) => setEditedPhrase(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="form-control"
              autoFocus
            />
            <div className="edit-actions">
              <button onClick={handleSaveQuestion} className="action-btn"> 
                <IoSaveOutline /> 
              </button>
              <button onClick={handleCancelEdit} className="action-btn" style={{background: 'rgba(255,255,255,0.05)'}}> 
                <IoCloseOutline />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="question-title">
              {isExpanded ? <IoChevronDown color="var(--color-primary-electric)" /> : <IoChevronForward color="var(--color-text-muted)" />}
              <span>{question.phrase}</span>
            </div>
            <div className="question-actions">
                <button onClick={handleEditClick} className="action-btn-sm"> 
                  <IoCreateOutline /> 
                </button>
                <button onClick={handleDeleteClick} className="action-btn-sm" style={{color: 'var(--color-error)'}}> 
                  <IoTrashOutline /> 
                </button>
            </div>
          </>
        )}
      </div>
      
      {isExpanded && (
        <div className="question-content">
          <div className="answers-section">
            <h5>Respuestas Disponibles</h5>
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
                        autoFocus
                      />
                      <div className="edit-actions">
                        <button onClick={handleSaveAnswer} className="action-btn">
                          <IoSaveOutline />
                        </button>
                        <button onClick={handleCancelAnswer} className="action-btn" style={{background: 'rgba(255,255,255,0.05)'}}>
                          <IoCloseOutline />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span>{answer.response}</span>
                      <div className="answer-actions">
                        <button onClick={() => handleEditAnswer(answer)} className="action-btn-sm">
                          <IoCreateOutline />
                        </button>
                        <button className="action-btn-sm" style={{color: 'var(--color-error)'}}>
                          <IoTrashOutline />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
            
            {!addingAnswerMode ? (
              <button className="add-answer-btn" onClick={() => setAddingAnswerMode(true)}>
                <IoAddOutline size={18} />
                Agregar Respuesta
              </button>
            ) : (
              <div style={{marginTop: '1.5rem'}}>
                <AnswerComponent initial={null} onSubmit={handleAddAnswer} onCancel={() => setAddingAnswerMode(false)} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
