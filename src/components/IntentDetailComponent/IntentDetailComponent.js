import {useState, useEffect} from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaWindowClose } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import {toast} from "react-toastify";
import IntentService from '../../services/intent.service.js';

import { AUDIT_APP,} from "../../utils/tec-chat.constants";

import LoadScreenComponent from '../ui/LoadScreenComponent';
import IntentComponent from '../IntentComponent';
import QuestionComponent from '../QuestionComponent';
import AnswerComponent from '../AnswerComponent';

const IntentDetailComponent = ({ onBack  }) => {

  const { id } = useParams();
  const intentId = id;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);


  const [intent, setIntent] = useState(null);
  const [editingIntent, setEditingIntent] = useState(false);
  const [addingQuestionFor, setAddingQuestionFor] = useState(null); // null or true (new) or questionId editing
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingAnswer, setEditingAnswer] = useState({ questionId: null, answer: null });
  const [addingQuestionMode, setAddingQuestionMode] = useState(false);

  const loadFetchIntent = async () => {
    setIsLoading(true);
    try{
      //const response = await IntentService.listIntents();
      //const intent = response.find((element) => element.id = intentId);
      const intentResult = await IntentService.getIntentById(id);
      //console.log("cargamos intencion",intentResult);
      setIntent(intentResult.data);
      setIsLoading(false);
    }catch(e){
        toast.error(e.message);
    }
  };

  useEffect(() => {
    loadFetchIntent();
  }, [intentId]);


  const handleonBack = () => {

    history.push("/intents");
  };

  const handleIntentSave = async (formData) => {
    try{
      console.log('guardar intencion', formData);
      if(intent.id){
        /*const updatePhrases = [];
        const updateResponses = [];

        updateResponses.push({
          id:formData.answerId,
          response:formData.answer,
        });

        updatePhrases.push({
            id:formData.questionId,
            phrase:formData.question,
            responses:updateResponses,
          })*/

        const intentUpdated = await IntentService.updateIntent({
          id:intent.id,
          name:formData.intentname,
          description: formData.description,
          assistantId: 1,
          modifiedBy: AUDIT_APP.UPDATE_BY,
          //phrases:updatePhrases,
        });
        console.log("actualiza intent",intentUpdated);

        if(intentUpdated.success){

            //toast.success("Intenci\u00f3n actualizada correctamente.");
            toast.success(intentUpdated.message);
        }else{
          throw new Error("Error al actualizar intenci\u00f3n");
        }
      }
    }catch(e){
      //console.log(e.response.data);
      toast.error(e.message);
    }


    setEditingIntent(false);
    await loadFetchIntent();
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
        <h2>Intención: {intent.name}</h2>
        <div>
          <button onClick={() => setEditingIntent(!editingIntent)}>
            {editingIntent ? "Cerrar editor" : "Editar intenci\u00f3n"}
          </button>
        </div>

        {editingIntent ? (
        <IntentComponent intent={intent} onSubmit={handleIntentSave} onCancel={() => setEditingIntent(false)} />
          ) : (
            <div>
              <p>{intent.description}</p>
            </div>
          )}

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

        {/* This is the new div-based structure that replaces the old table. */}
        <div className="intent-questions-list">
          {intent.phrases.map(q => (
            // This placeholder div will eventually become the QuestionCard component.
            <div key={q.id} className="question-card-placeholder">
              <p><strong>Pregunta:</strong> {q.phrase} (ID: {q.id})</p>
              <div>
                <strong>Respuestas:</strong>
                <ul>
                  {q.responses.map(a => (
                    <li key={a.id}>{a.response}</li>
                  ))}
                </ul>
              </div>
              <div className="question-actions-placeholder">
                <button>Editar Pregunta</button>
                <button>Eliminar Pregunta</button>
                <button>Agregar Respuesta</button>
              </div>
            </div>
          ))}
        </div>

        </>

      }

    </div>
  )
}

export default IntentDetailComponent;
