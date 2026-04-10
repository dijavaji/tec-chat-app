import React from 'react';
import HeaderBanner from '../components/ui/HeaderBanner';
import FooterComponent from '../components/ui/FooterComponent';
import ChatWidget from '../components/ui/ChatWidget';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutBasic(props) {
  const {children} = props;
  //console.log(props);
    return (
      <React.Fragment>
        <HeaderBanner/>
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
