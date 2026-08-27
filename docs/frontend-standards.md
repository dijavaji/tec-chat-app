# Developer Guide for Agentic Coding Agents

This document provides essential information for AI agents and developers working on the `tec-chat-app` codebase. Adhere to these guidelines to maintain consistency and quality across the project.

## 1. Technical Stack
- **Framework:** React (v17.0.2)
- **UI Library:** Material UI (v4.12.4)
- **Routing:** React Router Dom (v5.3.0)
- **State Management:** React Context API & Hooks
- **API Client:** Axios
- **Forms:** Formik & Yup
- **WebSocket:** SockJS & Stomp
- **Language:** JavaScript (ES6+)

## 2. Development Commands

### Build & Run
- **Start Development Server:** `pnpm start`
  - Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **Production Build:** `pnpm run build`
  - Bundles the app into static files for production in the `build` folder.

### Linting & Formatting
- **Lint:** The project uses the default `eslint-config-react-app`. Linting runs automatically during `pnpm start` and `pnpm run build`.
- **Formatting:** Ensure 2-space indentation and single quotes for strings.

### Testing
- **Run All Tests:** `pnpm test`
- **Run a Specific Test File:** `pnpm test -- path/to/file.test.js`
- **Watch Mode:** `pnpm test -- --watch`
- *Note: Currently, no test files are present in the repository. New features should ideally include tests.*

### Configuration
- Use `.env.development` for local environment variables.
- Required variables include:
  - `REACT_APP_API_SERVER_BACKEND_HOST_AUTH`
  - `REACT_APP_API_SERVER_BACKEND_HOST_DOCUMENT_LOADER`
  - `REACT_APP_API_SERVER_BACKEND_HOST_MESSAGE`

## 3. Code Style & Conventions

### Filename Conventions
- **Components:** PascalCase (e.g., `SidebarComponent.js`).
- **Pages:** PascalCase (e.g., `ChatPage.js`).
- **Services/Hooks:** camelCase (e.g., `auth.service.js`, `useAuth.js`).
- **Utils:** kebab-case or camelCase (e.g., `tec-token.util.js`).
- **Folders:**
  - Components/Pages: PascalCase (matching the main component).
  - Others: lowercase (services, hooks, utils, context).

### Import Order
Group imports in the following order, with a blank line between groups:
1. React and third-party libraries (e.g., `react`, `@material-ui/core`).
2. Project-level context, hooks, and services.
3. Components and layouts.
4. Constants, utils, and styles.

```javascript
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import useAuth from '../../../hooks/useAuth';
import { SUPER_USER_ROL } from '../../../utils/tec-chat.constants';

import './SidebarComponent.css';
```

### Component Structure
- Use **Functional Components** with hooks. Avoid Class Components.
- Use `makeStyles` from Material UI for component-specific styles.
- Define styles outside the component function.
- Destructure props in the function signature or at the start of the function.

```javascript
const useStyles = makeStyles({
  root: { /* ... */ },
});

const MyComponent = ({ prop1, prop2 }) => {
  const classes = useStyles();
  // ... logic
  return <div className={classes.root}>...</div>;
};
```

### State Management
- Use `useState` for local component state.
- Use `useContext` for global state (e.g., Auth, Chat).
- Wrap context providers around the application in `App.js`.
- Use `useMemo` and `useCallback` to optimize performance when passing functions or objects to children.

### API & Services
- Encapsulate API logic in classes within the `src/services/` directory.
- Export an instance of the service class.
- Use Axios for HTTP requests.
- Handle errors using `.catch()` or `try/catch`, logging with `console.error` and providing a fallback or throwing a meaningful error.

```javascript
class AuthService {
  login(email, password) {
    return axios.post(URL, { email, password })
      .then(res => res.data)
      .catch(err => {
        console.error('Login Error:', err);
        throw err;
      });
  }
}
export default new AuthService();
```

### Naming Conventions
- **Variables/Functions:** camelCase (e.g., `authData`, `handleClick`).
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_SERVER_BACKEND`).
- **Event Handlers:** Prefix with `handle` (e.g., `handleClose`, `handleSubmit`).

### Error Handling
- Use `react-toastify` for user-facing error messages.
- Always include basic error boundaries or fallback UI for critical components.

## 4. Project Structure

- `src/components/`: Reusable UI components. Often organized by `ui/` or feature.
- `src/context/`: React Context definitions (Auth, Chat).
- `src/hooks/`: Custom React hooks.
- `src/layouts/`: High-level layout components (LayoutBasic, LayoutHome).
- `src/pages/`: Main view components associated with routes.
- `src/routes/`: Routing configuration and navigation logic.
- `src/services/`: API client services.
- `src/utils/`: Helper functions and constants.

## 5. UI & UX Standards
- **Language:** The UI is primarily in Spanish. Ensure any new user-facing text matches this.
- **Icons:** Use `react-icons` (Material Design or Font Awesome sets).
- **Responsive Design:** Use Material UI's Grid and breakpoints where possible.

## 6. Security Guidelines
- Never hardcode API keys or secrets.
- Use `tec-token.util.js` for handling JWT tokens.
- Tokens should be stored securely (currently using `localStorage` via utils).
- Always validate inputs using `yup` and `formik` before submission.

## 7. Agentic Instructions
- **Design Changes:** AI agents MUST always use the `interface-design` skill for any task involving UI/UX modifications, layout refactoring, or styling updates.
- **Design System:** Refer to and adhere to the patterns defined in `.interface-design/system.md` to maintain visual consistency.

---
*Last Updated: May 01, 2026*
