import React from 'react';
import SidebarComponent from '../components/ui/SidebarComponent';
import HeaderComponent from '../components/ui/HeaderComponent';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function LayoutHome(props) {
  const {children} = props;
  //console.log(props);
    return (
      <div className="layout">
         <SidebarComponent/>
        <div className="main">
          <HeaderComponent/>
          <main className="content">
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
      </div>
    );
}