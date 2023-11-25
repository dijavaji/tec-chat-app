import React from 'react';
import HeaderComponent from '../components/ui/HeaderComponent';
import FooterComponent from '../components/ui/FooterComponent';
import ChatWidget from '../components/ui/ChatWidget';

export default function LayoutBasic(props) {
  const {children} = props;
  console.log(props);
    return (
      <React.Fragment>
        <HeaderComponent/>
        <main>
        <>{children}</>
        </main>
        <ChatWidget/>
        <FooterComponent/>
      </React.Fragment>
    );
}
