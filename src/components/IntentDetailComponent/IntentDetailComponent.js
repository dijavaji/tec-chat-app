import {useState, useEffect} from 'react';
import './IntentDetailComponent.css';
import { 
  IoArrowBackOutline, 
  IoCreateOutline, 
  IoSaveOutline, 
  IoCloseOutline, 
  IoAddOutline,
  IoChatboxEllipsesOutline 
} from "react-icons/io5";
import { useHistory, useParams } from "react-router-dom";
import {toast} from "react-toastify";
import IntentService from '../../services/intent.service.js';

import { AUDIT_APP,} from "../../utils/tec-chat.constants";

import LoadScreenComponent from '../ui/LoadScreenComponent';
import QuestionComponent from '../QuestionComponent';
import QuestionCard from '../QuestionCard';

const IntentDetailComponent = ({ onBack  }) => {

  const { id } = useParams();
  const intentId = id;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);


  const [intent, setIntent] = useState(null);
  // State for inline editing of the header
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [headerValues, setHeaderValues] = useState({ name: '', description: '' });

  const [addingQuestionMode, setAddingQuestionMode] = useState(false);

  const loadFetchIntent = async () => {
    setIsLoading(true);
    try {
      const intentResult = await IntentService.getIntentById(id);
      setIntent(intentResult.data);
      // Initialize header values for editing form
      setHeaderValues({
        name: intentResult.data.name,
        description: intentResult.data.description
      });
      setIsLoading(false);
    } catch(e) {
        toast.error(e.message);
        setIsLoading(false); // Ensure loading is turned off on error
    }
  };

  useEffect(() => {
    loadFetchIntent();
  }, [intentId]);


  const handleonBack = () => {
    history.push("/intents");
  };

  const handleHeaderSave = async () => {
    try {
      const intentUpdated = await IntentService.updateIntent({
        id: intent.id,
        name: headerValues.name,
        description: headerValues.description,
        assistantId: 1, // Assuming this is static for now
        modifiedBy: AUDIT_APP.UPDATE_BY,
      });

      if (intentUpdated.success) {
        toast.success(intentUpdated.message);
        // Refresh data and exit editing mode
        await loadFetchIntent();
        setIsEditingHeader(false);
      } else {
        throw new Error("Error al actualizar la intención");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleHeaderCancel = () => {
    // Reset values to original and exit editing mode
    setHeaderValues({ name: intent.name, description: intent.description });
    setIsEditingHeader(false);
  };

  const handleHeaderValueChange = (e) => {
    const { name, value } = e.target;
    setHeaderValues(prev => ({ ...prev, [name]: value }));
  };

  const handleAddQuestion = () => {
    // Placeholder for handleAddQuestion logic
  }

  const handleDeleteQuestion =()=>{
    // Placeholder for handleDeleteQuestion logic
  }

  const handleEditQuestion = ()=>{
    // Placeholder for handleEditQuestion logic
  }

  if(isLoading ){
    return <LoadScreenComponent/>;
  }

  return (
    <div className="intent-detail-container">
      {intent && <>
        <button onClick={handleonBack} className="btn-return-sm">
          <IoArrowBackOutline />
          Volver a lista
        </button>

        <div className="intent-header">
          {isEditingHeader ? (
            <div className="intent-header-edit">
              <input
                type="text"
                name="name"
                placeholder="Nombre de la intención"
                value={headerValues.name}
                onChange={handleHeaderValueChange}
                className="form-control"
              />
              <textarea
                name="description"
                placeholder="Descripción de la intención..."
                value={headerValues.description}
                onChange={handleHeaderValueChange}
                className="form-control"
                rows="3"
              />
              <div className="header-edit-actions">
                <button onClick={handleHeaderSave} className="action-btn save">
                  <IoSaveOutline />
                </button>
                <button onClick={handleHeaderCancel} className="action-btn">
                  <IoCloseOutline />
                </button>
              </div>
            </div>
          ) : (
            <div className="intent-header-display">
              <div className="intent-title-container">
                <h2>
                  <IoChatboxEllipsesOutline style={{marginRight: '12px', verticalAlign: 'middle', color: 'var(--color-primary-electric)'}} />
                  {intent.name}
                </h2>
                <button onClick={() => setIsEditingHeader(true)} className="action-btn">
                  <IoCreateOutline />
                </button>
              </div>
              <p>{intent.description || "Sin descripción."}</p>
            </div>
          )}
        </div>

        <div className="section-header">
          <h3>Preguntas Entrenadas</h3>
          <button className="add-answer-btn" onClick={() => setAddingQuestionMode(true)}>
            <IoAddOutline size={20} />
            Nueva Pregunta
          </button>
        </div>

        {addingQuestionMode && (
          <div style={{marginBottom: '2rem'}}>
            <QuestionComponent initial={null} onSubmit={handleAddQuestion} onCancel={() => setAddingQuestionMode(false)} />
          </div>
        )}

        <div className="intent-questions-list">
          {intent.phrases.map(q => (
            <QuestionCard
              key={q.id}
              question={q}
              onUpdate={handleEditQuestion}
              onDelete={handleDeleteQuestion}
            />
          ))}
          {intent.phrases.length === 0 && !addingQuestionMode && (
            <div style={{textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px dashed var(--color-border)'}}>
              No hay preguntas registradas para esta intención.
            </div>
          )}
        </div>
      </>}
    </div>
  )
}

export default IntentDetailComponent;
