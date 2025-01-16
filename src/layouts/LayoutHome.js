import React from 'react';
import SidebarComponent from '../components/ui/SidebarComponent';
import FooterComponent from '../components/ui/FooterComponent';
import ChatWidget from '../components/ui/ChatWidget';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutHome(props) {
  const {children} = props;
  //console.log(props);
    return (
      <React.Fragment>

        <SidebarComponent/>
        <main className="main-content">
          <>{children}</>
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick={true}
            pauseOnHover draggable rtl={false} pauseOnFocurLoss />
        </main>
        <FooterComponent/>
      </React.Fragment>
    );
}
