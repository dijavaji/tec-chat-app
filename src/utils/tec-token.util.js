import jwtDecode from "jwt-decode";
import {TOKEN} from "./tec-chat.constants";

/*Funcion para agregar token en el localStorage del navegador */
export function setToken(token){
  localStorage.setItem(TOKEN, token);
}

export function getToken(){
  return localStorage.getItem(TOKEN);
}

export function decodeToken(token){
  return jwtDecode(token);
}

export function removeToken(){
  return localStorage.removeItem(TOKEN);
}
