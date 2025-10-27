import {useState, useEffect} from 'react';
import './IntentDetailComponent.css';
import { FaEdit, FaTrash, FaPlus, FaSave, FaWindowClose } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import {toast} from "react-toastify";
import IntentService from '../../services/intent.service.js';

import { AUDIT_APP,} from "../../utils/tec-chat.constants";

import LoadScreenComponent from '../ui/LoadScreenComponent';
import IntentComponent from '../IntentComponent';
import QuestionComponent from '../QuestionComponent';
import AnswerComponent from '../AnswerComponent';
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

  const [addingQuestionFor, setAddingQuestionFor] = useState(null); // null or true (new) or questionId editing
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingAnswer, setEditingAnswer] = useState({ questionId: null, answer: null });
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

  }

  const handleDeleteQuestion =()=>{

  }

  const handleEditQuestion = ()=>{

  }
  const handleDeleteAnswer=()=>{
    console.log('eliminar respuesta')



  }
  const handleEditAnswer=()=>{

  }
  const handleAddAnswer=()=>{

  }

  if(isLoading ){
    return <LoadScreenComponent/>;
  }

  return (
    <div className = "container">
      {intent && <>
        <button onClick={handleonBack}>Volver a lista</button>
        <div className="intent-header">
          {isEditingHeader ? (
            <div className="intent-header-edit">
              <input
                type="text"
                name="name"
                value={headerValues.name}
                onChange={handleHeaderValueChange}
                className="form-control"
              />
              <textarea
                name="description"
                value={headerValues.description}
                onChange={handleHeaderValueChange}
                className="form-control"
                rows="3"
              />
              <div className="header-edit-actions">
                <button onClick={handleHeaderSave} className="btn-save"><FaSave /> Guardar</button>
                <button onClick={handleHeaderCancel} className="btn-cancel"><FaWindowClose /> Cancelar</button>
              </div>
            </div>
          ) : (
            <div className="intent-header-display">
              <div className="intent-title-container">
                <h2>Intención: {intent.name}</h2>
                <button onClick={() => setIsEditingHeader(true)} className="action-btn">
                  <FaEdit />
                </button>
              </div>
              <p>{intent.description || "Sin descripción."}</p>
            </div>
          )}
        </div>

        <hr />

        <h3>Preguntas</h3>
        <div>
          <button className="" onClick={() => setAddingQuestionMode(true)}>
            <FaPlus /> Agregar pregunta
          </button>
        </div>
        {addingQuestionMode && (
          <QuestionComponent initial={null} onSubmit={handleAddQuestion} onCancel={() => setAddingQuestionMode(false)} />
        )}

import QuestionCard from '../QuestionCard';

// ... (rest of the component)

        <div className="intent-questions-list">
          {intent.phrases.map(q => (
            <QuestionCard 
              key={q.id} 
              question={q} 
              onUpdate={handleEditQuestion} 
              onDelete={handleDeleteQuestion} 
            />
          ))}
        </div>

        </>

      }

    </div>
  )
}

export default IntentDetailComponent;
