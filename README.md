# tec-chat-app

## Introducción

**tec-chat-app** es la aplicación frontend de una plataforma de chatbot inteligente, diseñada para ofrecer una experiencia de usuario excepcional y natural. Esta interfaz se conecta a un backend de microservicios que utiliza inteligencia artificial para proporcionar respuestas contextualmente relevantes.

El propósito de este frontend es proporcionar un canal de conversación intuitivo y receptivo que mejore la interacción con los clientes y se integre fácilmente en sitios web empresariales.

## Características Principales

- **Interacción Inteligente:** Capacidad para interactuar con los usuarios que visitan el sitio web de la compañía, respondiendo a preguntas sobre la empresa, sus servicios y oportunidades laborales.
- **Respuestas Mejoradas con IA:** Utiliza entrenamiento neuronal para mejorar continuamente la calidad y precisión de las respuestas.
- **Integración Analítica:** Incluye funciones de aprendizaje automático e integración analítica para un seguimiento detallado.
- **Procesamiento de Lenguaje Natural (NLP):** Todos los mensajes recibidos pasan por un modelo de NLP para comprender la intención del usuario.
- **Integración con Terceros:** Diseñado para conectarse con aplicaciones de terceros como Telegram.
- **Interfaz en Tiempo Real:** La interfaz de usuario del chat (frontend) está construida para ofrecer una experiencia de mensajería web en tiempo real.
- **Fácilmente integrable:** Puede ser integrado de forma sencilla en cualquier sitio web empresarial.
- **Gestión de Usuarios y Empresas:** Permite el registro, asignación y cancelación de empresas y usuarios en el sistema.

## Stack Tecnológico y Atribuciones

Este proyecto es la capa de presentación (frontend) de una arquitectura de microservicios. Las tecnologías utilizadas para construir esta interfaz son:

- **[React](https://reactjs.org/):** Biblioteca principal para la construcción de la interfaz de usuario.
- **[Material-UI](https://mui.com/):** Framework de componentes de UI para un diseño visual atractivo.
- **[Axios](https://axios-http.com/):** Cliente HTTP para la comunicación con los microservicios del backend.
- **[SockJS](https://github.com/sockjs/sockjs-client)** y **[React-Stomp](https://github.com/stomp-js/react-stomp):** Para la comunicación en tiempo real a través de WebSockets.
- **[Formik](https://formik.org/)** y **[Yup](https://github.com/jquense/yup):** Para la gestión y validación de formularios.
- **[React Router](https://reactrouter.com/):** Para la gestión de rutas en la aplicación.

## Primeros Pasos

Para ejecutar este proyecto de forma local, sigue los siguientes pasos.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [pnpm](https://pnpm.io/installation) en tu sistema.

### Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias del proyecto ejecutando el siguiente comando:
   ```sh
   pnpm install
   ```

### Ejecución

Una vez instaladas las dependencias, puedes iniciar la aplicación en modo de desarrollo:

```sh
pnpm start
```

Esto ejecutará la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador. La página se recargará automáticamente cuando realices cambios en el código.

## Configuración

La configuración del backend se gestiona a través de variables de entorno. Puedes crear un archivo `.env.development` en la raíz del proyecto para personalizar las URLs de los servicios:

```
REACT_APP_API_SERVER_BACKEND_HOST_AUTH=http://127.0.0.1:4000
REACT_APP_API_SERVER_BACKEND_HOST_DOCUMENT_LOADER=http://127.0.0.1:8082
REACT_APP_API_SERVER_BACKEND_HOST_MESSAGE=http://127.0.0.1:8081
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- **`pnpm start`**: Inicia la aplicación en modo de desarrollo.
- **`pnpm test`**: Ejecuta las pruebas en modo interactivo.
- **`npm run build`**: Compila la aplicación para producción en la carpeta `build`.
- **`npm run eject`**: Expulsa las dependencias de configuración de `create-react-app`. **Nota: esta es una operación de un solo sentido.**

## Licencia

Este proyecto está bajo la Licencia Apache 2.0. Consulta el archivo `LICENSE` para más detalles.
