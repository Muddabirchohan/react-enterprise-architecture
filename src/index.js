import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import RouterDefault from "./router";
import { AuthProvider } from "./auth/AuthContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Provider } from "react-redux";
import store from "./store/index"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';
import 'react-credit-cards-2/dist/lib/styles.scss';
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();


root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <Provider store={store}>
      <AuthProvider>
        <RouterDefault />
      </AuthProvider>
      <ToastContainer />

      </Provider>

    {/* </QueryClientProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
