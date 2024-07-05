import React from 'react';
import HeaderComponent from '../components/ui/HeaderComponent';
import FooterComponent from '../components/ui/FooterComponent';
import ChatWidget from '../components/ui/ChatWidget';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutBasic(props) {
  const {children} = props;
  //console.log(props);
    return (
      <React.Fragment>
        <HeaderComponent/>
          <main>
          <>{children}</>
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick={true}
          pauseOnHover draggable rtl={false} pauseOnFocurLoss />
          </main>
        <ChatWidget/>
        <FooterComponent/>
      </React.Fragment>
    );
}
