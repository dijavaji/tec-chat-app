import React from 'react';
import HeaderComponent from '../components/ui/HeaderComponent';
import BannerComponent from '../components/ui/BannerComponent';
import FooterComponent from '../components/ui/FooterComponent';

export default function LayoutBasic(props) {
  const {children} = props;
    return (
      <React.Fragment>
        <HeaderComponent/>
        <BannerComponent/>
        <FooterComponent/>
      </React.Fragment>
    );
}
