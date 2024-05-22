require("dotenv").config({ path: ".env.local" });

//clave utilizado para autenticacion
export const TOKEN = "token";
export const SERVER_FRONTEND_HOST=process.env.REACT_APP_SERVER_FRONTEND_HOST;

export const API_SERVER_BACKEND={
    HOST: process.env.REACT_APP_API_SERVER_BACKEND_HOST,
    HOST_AUTH: process.env.REACT_APP_API_SERVER_BACKEND_HOST_AUTH,
    AUTH: "/api/v1/auth",
    USER: "/api/v1/users",
};
export const STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZE: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BOOLEAN_TRUE: true,
  BOOLEAN_FALSE: false,
  NUMBER_ENABLE: 1,
  NUMBER_DISABLE: 0,
};

export const HTTP_METHODS = {
  REQUEST_GET: "GET",
  REQUEST_HEAD: "HEAD",
  REQUEST_POST: "POST",
  REQUEST_PUT: "PUT",
  REQUEST_DELETE: "DELETE",
  REQUEST_PATCH: "PATCH",
};

export const AUDIT_APP={
  UPDATE_BY: "app-web",
  CREATE_BY: "app-web",
};

export const FORMAT_APP={
    DATE_DD_MM_YYYY: "dd/MM/yyyy",
    DATE_DD_MM_YYYY_HH_MM: "dd/MM/yyyy hh:mm",
}
