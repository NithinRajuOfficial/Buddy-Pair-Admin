import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

import RouterWithSuspense from "./router/Index.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Redux/Store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <RouterWithSuspense />
        <ToastContainer />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
