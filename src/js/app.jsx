import React from 'react'
import ReactDOM from "react-dom"
import AppContent from "./AppContent.jsx"
import AppStore from "./AppStore.js"

document.addEventListener("DOMContentLoaded", () => {
  let appStore = new AppStore()
  ReactDOM.render(
    <AppContent store={appStore}/>  
  , document.getElementById("appContents"));

})