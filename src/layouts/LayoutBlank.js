import React from 'react';

import ChatWidget from '../components/ui/ChatWidget';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutBlank(props) {
  const {children} = props;
  //console.log(props);
    return (
      <React.Fragment>
          <main>
          <>{children}</>
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick={true}
          pauseOnHover draggable rtl={false} pauseOnFocurLoss />
          </main>
        <ChatWidget/>
      </React.Fragment>
    );
}
