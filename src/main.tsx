import React from "react"
import ReactDOM from "react-dom/client"
import Routes from "@/router"

import "./styles/index.css"
import "normalize.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
