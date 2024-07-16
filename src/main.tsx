import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import Routes from "@/router"
import store from "@/store"

import "@/styles/index.css"
import "normalize.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Routes />
  </Provider>
)
