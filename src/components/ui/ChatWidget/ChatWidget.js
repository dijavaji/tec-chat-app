import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';
import { Widget, addResponseMessage, renderCustomComponent} from 'react-chat-widget';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {toast} from "react-toastify";

import 'react-chat-widget/lib/styles.css';
import logo from '../../../logo.svg';
import botGif from '../../../assets/img/l3sgiphy.gif';
import "./ChatWidget.css";

import { API_SERVER_BACKEND, AUDIT_APP, APP_NAME} from "../../../utils/tec-chat.constants";
import AuthService from "../../../services/auth.service";
import {setToken, decodeToken} from "../../../utils/tec-token.util";
import useAuth from "../../../hooks/useAuth";



const API_SERVER_SOCKET = API_SERVER_BACKEND.HOST + '/ws';

const ChatWidget = () => {
  const navigate = useHistory();
  const [stompCLient, setStompCLient] = useState(null);
  const [nickName, setNickName] = useState('usuario');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
	const {setUser, auth, logout} = useAuth();

  //const [uuid, setUuid] = useState(uuidv4());
  const [messageId] = useState(uuidv4(),);

  useEffect(() => {
    const socket = new Sockjs(API_SERVER_SOCKET);//new Sockjs('http://127.0.0.1:8081/ws');
    const client = Stomp.over(socket);
    //addResponseMessage('Bienvenidos a este incre\u00edble chat\u0021');
    client.connect({},()=>{
      client.subscribe('/topic/messages', (message)=>{
        const receivedMessages = JSON.parse(message.body);
        console.log(receivedMessages);
        //addResponseMessage((prevMessages)=> [...prevMessages, receivedMessages]);
        addResponseMessage(receivedMessages.response);
      });
    });
    setStompCLient(client);
    return () =>{
      client.disconnect();
    };
  }, []);


  const handleNewUserMessage = (newMessage) => {
    //console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    if(newMessage.trim()){
        if(newMessage === '/login'){
          console.log("ingreso login");
          addResponseMessage("Por favor, ingresa tus credenciales a continuaci&#243;n 👇");
          renderCustomComponent(getCustomLauncher);

        }else if(newMessage === '/logout'){
          console.log("cierro login");
          onLogout();

        }else{
          const chatMessage = {
            id:messageId,
            displayName:nickName,
            text: newMessage,
            assistantName:APP_NAME,
            createdBy:AUDIT_APP.CREATE_BY
          };
          const response = stompCLient.send('/app/chat', {}, JSON.stringify(chatMessage));
          console.log(`responde api ${response}`);

        }
        //addResponseMessage("hola mundo");
    }
  };
  const getCustomLauncher = (handleToggle) =>{

    return <LoginLaucher handleSubmit={handleLoginSubmit} data={initialValues} loginValidationSchema={validationSchema}/>
  }


  //renderCustomComponent(getCustomLauncher)
  const handleLoginSubmit = async (values)=>{
    console.log("ingreso a login usuario",values);
    
    setError("");
    try{
      const data = await AuthService.login(values.email, values.password);
      //console.log(data);
      const token = data.accessToken;
      if(token){
        //console.log(token);
        setToken(token);
        const user = decodeToken(token);
        console.log(user);
        setUser(user);
        setNickName(user.nombre)
        addResponseMessage("Hola Bienvenido "+user.nombre);
        //navigate.push('/home');
        //setUser(decodeToken(token));
        //console.log(decodeToken(token));
      }else {
        console.log(data.error)
        throw new Error(data.message);
      }
    }catch(e){
      //toast.error(e.message);
      addResponseMessage(e.message);
      console.log(JSON.stringify(e.message)); //console.log(e.toString()); //console.error(e);
      //const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      setLoading(false);
      setError(e.message);
    }
  }

  const onLogout = () =>{
    logout();
    addResponseMessage("Hasta pronto");
    navigate.push("/");
  }

  return (
    <div>
      <Widget id={messageId} handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title={<span>Asesor Virtual Inteligente</span>}
        subtitle=""
        titleAvatar={botGif}
        resizable={false}/>
    </div>
  )
}


function LoginLaucher(props){

  return(<div className="loginLaucher-container">
      <Formik initialValues={props.data} onSubmit={props.handleSubmit} validationSchema={props.loginValidationSchema}>
      {() =>(
        <Form className="loginLaucher-form">
            <h2 className="padding: 0 50px">Iniciar Sesi&#243;n</h2>
            <div className="loginLaucherform-group">
                <Field type="text" name="email" placeholder="Correo" required/>
                <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
            </div>
            <div className="loginLaucherform-group">
                <Field type="password" name="password" placeholder="Contrase&#241;a" required/>
            </div>
            <div className="loginLaucherform-group">
              <button className="loginLaucher-button" type="submit">Iniciar</button>
            </div>
        </Form>
      )}
      </Formik>
    </div>)
}

function initialValues(){
	return(
		{
			email:"",
			password:"",
		}
	);
}

const validationSchema = Yup.object(
  {
    email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
    password: Yup.string().matches(/[a-zA-Z0-9-]*$/, "La contrase\u00f1a no puede tener espacios").required("La contrase\u00f1a es obligatoria").min(6,"La contrase\u00f1a debe contener al menos 6 caracteres"),
  }
)

export default ChatWidget;
