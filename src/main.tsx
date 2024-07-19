import ReactDOM from "react-dom/client"

import { Provider } from "react-redux"
import Routes from "@/router"
import store from "@/store"

import App from "./App"
import "./styles"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App>
      <Routes />
    </App>
  </Provider>
)
