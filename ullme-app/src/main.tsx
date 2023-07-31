import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "../src/styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
