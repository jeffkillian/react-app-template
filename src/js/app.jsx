import React from 'react'
import ReactDOM from "react-dom"
import AppContent from "./AppContent.jsx"
import { Provider } from "mobx-react"
import AppStore from "./AppStore.js"

document.addEventListener("DOMContentLoaded", () => {
  let appStore = new AppStore()
  ReactDOM.render(
    <Provider store={appStore}>
      <AppContent />
    </Provider>
  , document.getElementById("appContents"));

})