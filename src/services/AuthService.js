import { API_SERVER_BACKEND, HTTP_METHODS } from "../utils/constants";

const API_SERVER_AUTH = API_SERVER_BACKEND.HOST + API_SERVER_BACKEND.AUTH;
//const API_SERVER_AUTH = "http://127.0.0.1:4000";

export const recoverUser = async (email) =>
  fetch(`${API_SERVER_AUTH}/recovery/`, {
    method: HTTP_METHODS.REQUEST_POST,
    headers:{
      "Content-Type": "application/json",
      "x-access-token": "token-value",
    },
    body: JSON.stringify({
    	"input": email
    }),
  }).then((res) => res.json())
    .then((result) => {
          return result;
      }).catch((error) => console.error('Error:', error));
