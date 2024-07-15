import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import Routes from "@/router"
import store from "@/store"

import "normalize.css"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Routes />
  </Provider>
  // </React.StrictMode>
)
