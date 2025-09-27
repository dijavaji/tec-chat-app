import {useState, useEffect} from 'react';
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
            {editingIntent ? "Cerrar editor" : "Editar intención"}
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
          <button onClick={() => setAddingQuestionMode(true)}>Agregar pregunta</button>
        </div>
        {addingQuestionMode && (
          <QuestionComponent initial={null} onSubmit={handleAddQuestion} onCancel={() => setAddingQuestionMode(false)} />
        )}

        <ul>
            {intent.phrases.map((q) => (
              <li key={q.id} style={{ marginBottom: 12 }}>
                <div>
                  <strong>Pregunta:</strong> {q.phrase}
                </div>
                <div>
                  <button onClick={() => setEditingQuestion(q)}>Editar pregunta</button>
                  <button onClick={() => handleDeleteQuestion(q.id)}>Eliminar pregunta</button>
                  <button onClick={() => setEditingAnswer({ questionId: q.id, answer: null })}>Agregar respuesta</button>
                </div>
                {editingQuestion && editingQuestion.id === q.id && (
                  <QuestionComponent initial={editingQuestion} onSubmit={(vals) => handleEditQuestion(q.id, vals)}
                    onCancel={() => setEditingQuestion(null)}
                    />
                  )}

                  <div style={{ marginTop: 8 }}>
                        <strong>Respuestas:</strong>
                        <ul>
                          {q.responses.map((a) => (
                            <li key={a.id}>
                              {a.response}
                              <div>
                                <button onClick={() => setEditingAnswer({ questionId: q.id, answer: a })}>Editar</button>
                                <button onClick={() => handleDeleteAnswer(q.id, a.id)}>Eliminar</button>
                              </div>
                              {editingAnswer.questionId === q.id && editingAnswer.answer?.id === a.id && (
                                <AnswerComponent
                                  initial={editingAnswer.answer}
                                  onSubmit={(vals) => handleEditAnswer(q.id, a.id, vals)}
                                  onCancel={() => setEditingAnswer({ questionId: null, answer: null })}
                                />
                              )}
                            </li>
                          ))}
                        </ul>
                        {editingAnswer.questionId === q.id && editingAnswer.answer === null && (
                        <AnswerComponent
                          initial={null}
                          onSubmit={(vals) => handleAddAnswer(q.id, vals)}
                          onCancel={() => setEditingAnswer({ questionId: null, answer: null })}
                        />
                      )}


                  </div>

              </li>
            ))}
        </ul>
        </>

      }

    </div>
  )
}

export default IntentDetailComponent;
