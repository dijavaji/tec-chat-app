import React, {useState, useEffect}from 'react';
//import BannerComponent from '../../components/ui/BannerComponent';

import "./FilePage.css";

import FileUploadComponent from "../../components/FileUploadComponent";

import AuthService from "../../services/auth.service";

export default function Home() {

  function componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  return (
      <FileUploadComponent />
  )
}
