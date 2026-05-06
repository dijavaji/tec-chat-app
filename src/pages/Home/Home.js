import React, {useState, useEffect}from 'react';
//import BannerComponent from '../../components/ui/BannerComponent';

import "./Home.css";
//import 'react-chat-widget/lib/styles.css';
//import logo from '../../logo.svg';

import ChatFeatureComponent from "../../components/ChatModuleComponent/ChatFeatureComponent";

import ChatBoxComponent from '../../components/ChatBoxComponent';
import AuthService from "../../services/auth.service";

export default function Home() {

  function componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  return (
      <ChatFeatureComponent />
  )
}
