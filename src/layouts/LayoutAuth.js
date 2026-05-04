import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutAuth(props) {
  const { children } = props;
  return (
    <div className="layout-auth">
      <main className="auth-main">
        {children}
      </main>
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeOnClick={true}
        pauseOnHover 
        draggable 
        rtl={false} 
        pauseOnFocusLoss 
      />
    </div>
  );
}
